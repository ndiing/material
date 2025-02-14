/**
 * @fires Router#onRouterCurrentEntryChange
 * @fires Router#onRouterNavigate
 * @fires Router#onRouterNavigateError
 * @fires Router#onRouterNavigateSuccess
 */
class Router {
    /**
     * @static
     * @readonly
     */
    static params = {};

    /**
     * @private
     * @static
     * @param {String} [pathname=this.pathname] - The current pathname
     * @param {Array} [routes=this.routes] - The available routes
     * @param {String} [parent=null] - The parent route
     * @param {Array} [result=[]] - The accumulated result
     * @returns {Array|undefined} The matching routes
     */
    static get(pathname = this.pathname, routes = this.routes, parent = null, result = []) {
        for (const route of routes) {
            if (!route.regexp) {
                route.parent = parent;
                route.pathname = ((parent?.pathname ?? "") + "/" + route.path).replace(/\/+/g, "/");
                route.regexp = new RegExp("^" + route.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i");
            }
            const matches = pathname.match(route.regexp);
            if (matches) {
                this.params = {
                    ...matches?.groups,
                };
                return [...result, route];
            }
            if (route?.children?.length) {
                const matches = this.get(pathname, route.children, route, [...result, route]);
                if (matches) return matches;
            }
        }
    }

    /**
     * @static
     * @readonly
     * @returns {String} The current pathname
     */
    static get pathname() {
        if (this.options.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?[^\?]+/, "") || "/";
        }
    }

    /**
     * @private
     * @static
     * @async
     * @param {Event} [event] - The navigation event
     * @returns {Promise<void>}
     */
    static async handleNavigation(event) {
        performance.mark("mark-1");
        this.emit("onRouterCurrentEntryChange");
        this.setController();
        const routes = this.get();
        this.emit("onRouterNavigate");
        for (const route of routes ?? []) {
            if (route.beforeLoad) {
                try {
                    await this.handleBeforeLoad(route);
                } catch (error) {
                    this.emit("onRouterNavigateError");
                    break;
                }
            }
            await this.loadComponent(route);
            const container = this.setContainer(route);
            const outlet = await this.getOutlet(container, route);
            this.renderComponent(route, outlet);
            this.removeComponent(routes);
        }
        performance.mark("mark-2");
        performance.measure("measure-1", "mark-1", "mark-2");
        performance.clearMarks("mark-1");
        performance.clearMarks("mark-2");
        performance.clearMeasures("measure-1");
        this.emit("onRouterNavigateSuccess");
    }

    /**
     * @private
     * @static
     * @param {Array} [routes] - The available routes
     * @returns {void}
     */
    static removeComponent(routes) {
        const outlets = Array.from(document.body.querySelectorAll("md-outlet"));
        for (const outlet of outlets) {
            let element = outlet.nextElementSibling;
            while (element) {
                if (!outlets.find((outlet) => outlet === element) && !routes.find((route) => route.component === element)) {
                    element.remove();
                }
                element = element.nextElementSibling;
            }
        }
    }

    /**
     * @private
     * @static
     * @param {Object} [route] - The route object
     * @param {HTMLElement} [outlet] - The outlet element
     * @returns {void}
     */
    static renderComponent(route, outlet) {
        if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    }

    /**
     * @private
     * @static
     * @async
     * @param {HTMLElement} [container] - The container element
     * @param {Object} [route] - The route object
     * @returns {Promise<HTMLElement>} The outlet element
     */
    static async getOutlet(container, route) {
        return await new Promise((resolve) => {
            let observer;
            let outlet;
            let selector = "md-outlet:not([name])";
            let target = container;
            if (route.outlet) {
                selector = `md-outlet[name="${route.outlet}"]`;
                target = document.body;
            }
            const callback = () => {
                outlet = target.querySelector(selector);
                if (outlet) {
                    if (observer) observer.disconnect();
                    resolve(outlet);
                }
            };
            observer = new MutationObserver(callback);
            observer.observe(target, {
                subtree: true,
                childList: true,
            });
            callback();
        });
    }

    /**
     * @private
     * @static
     * @param {Object} [route] - The route object
     * @returns {HTMLElement} The container element
     */
    static setContainer(route) {
        return route.parent?.component || document.body;
    }

    /**
     * @private
     * @static
     * @async
     * @param {Object} [route] - The route object
     * @returns {Promise<void>}
     */
    static async loadComponent(route) {
        if (!route.component) {
            route.component = await route.load();
        }
    }

    /**
     * @private
     * @static
     * @async
     * @param {Object} [route] - The route object
     * @returns {Promise<void>}
     */
    static async handleBeforeLoad(route) {
        await new Promise((resolve, reject) => {
            const callback = (error) => {
                if (error) reject(error);
                else resolve();
            };
            this.controller.signal.addEventListener("abort", callback);
            route.beforeLoad(callback);
        });
    }

    /**
     * @private
     * @static
     * @returns {void}
     */
    static setController() {
        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();
    }

    /**
     * @static
     * @param {String} [url] - The URL to navigate to
     * @returns {void}
     */
    static navigate(url) {
        if (this.options.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * @private
     * @static
     * @param {Event} [event] - The navigate event
     * @returns {void}
     */
    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");
        if (element) {
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    /**
     * @private
     * @static
     * @param {String} [type] - The event type
     * @param {Object} [detail] - The event details
     * @returns {void}
     */
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }
    static routes = [];
    static options = {};

    /**
     * @typedef {Object} RouterUseRoutes
     * @property {String} path - The path of the route
     * @property {HTMLElement} component - The component to load
     * @property {Function} load - The function to load the component
     * @property {Function} beforeLoad - The function to execute before loading the component
     * @property {RouterUseRoutes[]} [children] - The child routes
     */

    /**
     * @typedef {Object} RouterUseOptions
     * @property {Boolean} [historyApiFallback=false] - Whether to use history API fallback
     */

    /**
     * @static
     * @param {RouterUseRoutes[]} [routes=[]] - An array of route objects
     * @param {RouterUseOptions} [options={}] - Options for configuring the router
     * @returns {void}
     */
    static use(routes = [], options = {}) {
        this.routes = routes;
        this.options = {
            historyApiFallback: false,
            ...options,
        };
        window.addEventListener("load", this.handleNavigation.bind(this));
        if (this.options.historyApiFallback) {
            window.addEventListener("popstate", this.handleNavigation.bind(this));
            const pushState = window.history.pushState;

            window.history.pushState = function () {
                pushState.apply(this, arguments);
                Router.emit("popstate");
            };
        } else {
            window.addEventListener("hashchange", this.handleNavigation.bind(this));
        }
        window.addEventListener("click", this.handleNavigate.bind(this));
    }
}
export { Router };
