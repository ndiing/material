/**
 * Manages routing within a single-page application.
 * @fires MDRouter#onRouterCurrentEntryChange - Event emitted when current route changes.
 * @fires MDRouter#onRouterNavigate - Event emitted before navigating to a new route.
 * @fires MDRouter#onRouterNavigateError - Event emitted if an error occurs during navigation.
 * @fires MDRouter#onRouterNavigateSuccess - Event emitted after successful navigation.
 */
class MDRouter {
    /**
     * Sets routes recursively with parent-child relationships.
     * @param {Array} routes - Array of route configurations.
     * @param {Object} parent - Parent route configuration.
     * @returns {Array} - Flattened array of routes with parent references.
     * @private
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
     * Retrieves the current path using either History API or hash-based routing.
     * @returns {string} - Current path of the application.
     * @private
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
     * @returns {Object} - Query parameters as key-value pairs.
     * @private
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
     * Retrieves the route object that matches the current path.
     * @param {string} path - Current path of the application.
     * @returns {Object} - Route object that matches the current path.
     * @private
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
     * Retrieves all routes from a given route, including its parent routes.
     * @param {Object} route - Current route object.
     * @returns {Array} - Array of all routes, including parent routes.
     * @private
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
     * Retrieves the outlet element where a route's component will be rendered.
     * @param {HTMLElement} container - Container element for the outlet.
     * @param {Object} route - Route object for which the outlet is needed.
     * @returns {Promise<HTMLElement>} - Promise resolving to the outlet element.
     * @private
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
     * Handles loading of a route, including beforeLoad hooks and component rendering.
     * @param {Event} event - Event triggering the route load.
     * @returns {Promise<void>} - Promise resolving once route loading is complete.
     * @private
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
     * Navigates to a new URL using either History API or hash-based routing.
     * @param {string} url - URL to navigate to.
     * @returns {void}
     */
    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Handles click events on elements with the `[routerLink]` attribute to navigate.
     * @param {Event} event - Click event triggering the navigation.
     * @returns {void}
     * @private
     */
    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     * Initializes the router with the provided routes configuration.
     * @param {Array} routes - Array of route configurations.
     * @returns {void}
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
     * Indicates whether to use the History API for routing (default: true).
     * @type {boolean}
     */
    static historyApiFallback = true;

    /**
     * Emits a custom event with optional detail data.
     * @param {string} type - Type of event to emit.
     * @param {*} detail - Optional detail data to include with the event.
     * @returns {void}
     * @private
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
