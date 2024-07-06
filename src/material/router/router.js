/**
 * Router for managing client-side navigation and routing.
 * @fires MDRouter#onRouterCurrentEntryChange - Triggered when the current route changes.
 * @fires MDRouter#onRouterNavigate - Triggered when navigating to a new route.
 * @fires MDRouter#onRouterNavigateError - Triggered when an error occurs during navigation.
 * @fires MDRouter#onRouterNavigateSuccess - Triggered when navigation to a route is successful.
 */
class MDRouter {
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
     * Gets the current path of the router.
     * @returns {string} The current path.
     */
    static get path() {
        if (this.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?.*$/, "") || "/";
        }
    }

    /**
     * Gets the current query parameters as an object.
     * @returns {Object} The current query parameters.
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
     * Finds and returns a route that matches the given path.
     * @param {string} path - The path to match.
     * @returns {Object} The matched route.
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
     * Gets all routes from the root to the specified route.
     * @param {Object} route - The route to start from.
     * @returns {Array} An array of routes.
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
     * Finds and returns the outlet element for a given route.
     * @param {HTMLElement} container - The container element to search within.
     * @param {Object} route - The route to find the outlet for.
     * @returns {Promise<HTMLElement>} A promise that resolves to the outlet element.
     */
    static getOutlet(container, route) {
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
     * Navigates to a new URL, updating browser history.
     * @param {String} url - URL to navigate to.
     */
    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    static historyApiFallback = true;

    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     * Initializes the router with provided route configurations.
     * @param {Array} routes - List of route configurations.
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
}

export { MDRouter };
