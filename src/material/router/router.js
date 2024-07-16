/**
 * A class for managing routing in a web application.
 * @fires MDRouter#onRouterCurrentEntryChange - Event fired when the current route changes.
 * @fires MDRouter#onRouterNavigate - Event fired when navigating to a new route begins.
 * @fires MDRouter#onRouterNavigateError - Event fired when an error occurs during navigation.
 * @fires MDRouter#onRouterNavigateSuccess - Event fired when navigation to a new route succeeds.
 */
class MDRouter {
    static stacks = []; // Array to store the route stack
    static _params = {}; // Object to store route parameters
    static controller; // AbortController instance for managing async operations
    static route; // Current route object
    static routes; // Array of routes
    static _historyApiFallback = true; // Flag to indicate if history API fallback is used

    /**
     * Sets up routes recursively with parent-child relationships.
     * @private
     * @param {Array} routes - The array of route objects to set up.
     * @param {Object} parent - The parent route object.
     * @returns {Array} - The flattened array of routes with parent references.
     */
    static setRoutes(routes, parent) {
        return routes.reduce((acc, curr) => {
            curr.parent = parent;
            curr.pathname = `${parent?.pathname ?? ""}/${curr.path}`.replace(/\/+/g, "/");
            acc.push(curr);

            if (curr.children?.length) {
                acc.push(...this.setRoutes(curr.children, curr));
            }
            return acc;
        }, []);
    }

    /**
     * Retrieves the current path based on history API or hash routing.
     * @returns {string} - The current path.
     */
    static get path() {
        if (this.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?.*$/, "") || "/";
        }
    }

    /**
     * Retrieves query parameters from the current URL.
     * @returns {Object} - The query parameters as key-value pairs.
     */
    static get query() {
        let search;

        if (this.historyApiFallback) {
            search = window.location.search;
        } else {
            search = window.location.hash.replace(/^#/, "").match(/(\?.*)$/)?.[1] || "";
        }
        const query = {};

        for (const [name, value] of new URLSearchParams(search).entries()) {
            if (query[name]) {
                if (Array.isArray(query[name])) {
                    query[name].push(value);
                } else {
                    query[name] = [query[name], value];
                }
            } else {
                query[name] = value;
            }
        }
        return query;
    }

    /**
     * Retrieves a route object that matches the given path.
     * @private
     * @param {string} path - The path to match against route patterns.
     * @returns {Object|undefined} - The matched route object or undefined if no match is found.
     */
    static getRoute(path) {
        return this.stacks.find((route) => {
            const pattern = `^${route.pathname.replace(/:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)")}(?:/?$)`;
            const regexp = new RegExp(pattern, "i");
            const matches = path.match(regexp);

            if (matches) {
                this.params = { ...matches.groups };
                return true;
            }
            return false;
        });
    }

    /**
     * Retrieves all routes leading up to the specified route, including parent routes.
     * @private
     * @param {Object} route - The route object to start from.
     * @returns {Array} - The array of routes leading up to the specified route.
     */
    static getRoutes(route) {
        return [route].reduce((acc, curr) => {
            if (curr.parent) {
                acc.push(...this.getRoutes(curr.parent));
            }
            acc.push(curr);
            return acc;
        }, []);
    }

    /**
     * Retrieves the outlet element where route components are rendered.
     * @private
     * @param {Element} container - The container element to search for the outlet.
     * @param {Object} route - The route object specifying the outlet.
     * @returns {Promise<Element>} - A promise that resolves with the outlet element.
     */
    static async getOutlet(container, route) {
        return new Promise((resolve) => {
            let outlet;
            let observer;
            let target = container;
            let selector = "md-outlet:not([name])";

            if (route.outlet) {
                target = document.body;
                selector = `md-outlet[name="${route.outlet}"]`;
            }

            const callback = () => {
                outlet = target.querySelector(selector);

                if (outlet) {
                    if (observer) {
                        observer.disconnect();
                    }
                    resolve(outlet);
                }
            };
            callback();

            if (!outlet) {
                observer = new MutationObserver(callback);
                observer.observe(target, {
                    childList: true,
                    subtree: true,
                });
            }
        });
    }

    /**
     * Retrieves route parameters from the current route.
     * @returns {Object} - The route parameters as key-value pairs.
     */
    static get params() {
        return this._params;
    }

    /**
     * Sets route parameters.
     * @param {Object} value - The route parameters to set.
     */
    static set params(value) {
        this._params = value;
    }

    /**
     * Handles the loading of a route, including beforeLoad hooks and component rendering.
     * @private
     * @param {Event} event - The event triggering the route load.
     * @returns {Promise<void>} - A promise that resolves when the route loading is complete.
     */
    static async handleLoad(event) {
        this.emit("onRouterCurrentEntryChange", event);
        performance.mark("markRouterCurrentEntryChange");
        this.params = {};
        this.route = this.getRoute(this.path);
        this.routes = this.getRoutes(this.route);

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }

        for (const route of this.routes) {
            this.emit("onRouterNavigate", event);
            performance.mark("markRouterNavigate");

            if (route.beforeLoad) {
                try {
                    await new Promise((resolve, reject) => {
                        const next = (err) => {
                            this.controller.signal.removeEventListener("abort", next);

                            if (err) {
                                reject(err);
                            } else {
                                resolve();
                            }
                        };
                        this.controller.signal.addEventListener("abort", next);
                        route.beforeLoad(next);
                    });
                } catch (error) {
                    this.emit("onRouterNavigateError", event);
                    performance.mark("markRouterNavigateError");
                    throw error;
                }
            }

            if (!route.component) {
                route.component = await route.load();
            }
            const container = route.parent?.component ?? document.body;
            const outlet = await this.getOutlet(container, route);

            if (!route.component.isConnected) {
                route.component.isComponent = true;
                outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
            }
            const outlets = Array.from(document.body.querySelectorAll("md-outlet"));

            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;

                while (nextElement) {
                    const unusedComponent = !this.routes.find((route) => route.component === nextElement) && nextElement.isComponent;
                    const unusedOutlet = !outlets.find((outlet) => outlet === nextElement);

                    if (unusedComponent && unusedOutlet) {
                        nextElement.remove();
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
        this.emit("onRouterNavigateSuccess", event);
        performance.mark("markRouterNavigateSuccess");
        performance.measure("measureRouterNavigateSuccess", "markRouterCurrentEntryChange", "markRouterNavigateSuccess");
        performance.clearMarks("markRouterCurrentEntryChange");
        performance.clearMarks("markRouterNavigate");
        performance.clearMarks("markRouterNavigateError");
        performance.clearMarks("markRouterNavigateSuccess");
        performance.clearMeasures("measureRouterNavigateSuccess");
    }

    /**
     * Navigates to a specified URL using history API or hash routing.
     * @param {string} url - The URL to navigate to.
     */
    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Handles click events on elements with a `routerLink` attribute to navigate.
     * @private
     * @param {Event} event - The click event to handle.
     */
    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");

        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     * Initializes the router with the specified routes and sets up event listeners.
     * @param {Array} routes - The array of route objects to initialize the router with.
     */
    static init(routes) {
        this.stacks = this.setRoutes(routes);
        this.handleLoad = this.handleLoad.bind(this);
        window.addEventListener("DOMContentLoaded", this.handleLoad);

        if (this.historyApiFallback) {
            window.addEventListener("popstate", this.handleLoad);
            const pushState = window.history.pushState;

            window.history.pushState = function () {
                pushState.apply(this, arguments);
                MDRouter.emit("popstate");
            };
        } else {
            window.addEventListener("hashchange", this.handleLoad);
        }
        this.handleClick = this.handleClick.bind(this);
        window.addEventListener("click", this.handleClick);
    }

    /**
     * Retrieves the flag indicating if history API fallback is used.
     * @returns {boolean} - The flag indicating if history API fallback is used.
     */
    static get historyApiFallback() {
        return this._historyApiFallback;
    }

    /**
     * Sets the flag indicating if history API fallback is used.
     * @param {boolean} value - The value to set for history API fallback.
     */
    static set historyApiFallback(value) {
        this._historyApiFallback = value;
    }

    /**
     * Emits a custom event with the specified type and detail.
     * @private
     * @param {string} type - The type of the custom event.
     * @param {any} detail - The detail object to include in the event.
     */
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }
}
export { MDRouter };
