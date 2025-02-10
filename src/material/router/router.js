/**
 *
 * @fires onRouterCurrentEntryChange
 * @fires onRouterNavigate
 * @fires onRouterNavigateError
 * @fires onRouterNavigateSuccess
 */
class Router {
    static params = {};

    /**
     * @private
     * @static
     * @param {Any} [pathname=this.pathname]
     * @param {Any} [routes=this.routes]
     * @param {Any} [parent=null]
     * @param {Any} [result=[]]
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
     *
     * @static
     * @readonly
     */
    static get pathname() {
        if (this.options.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?[^\?]+/, "") || "/";
        }
    }

    /**
     *
     * @private
     * @static
     * @async
     * @param {Any} [event]
     */
    static async handleNavigation(event) {
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
        this.emit("onRouterNavigateSuccess");
    }

    /**
     * @private
     * @static
     * @param {Any} [routes]
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
     *
     * @private
     * @static
     * @param {Any} [route]
     * @param {Any} [outlet]
     */
    static renderComponent(route, outlet) {
        if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    }

    /**
     * @private
     * @static
     * @async
     * @param {Any} [container]
     * @param {Any} [route]
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
     * @param {Any} [route]
     */
    static setContainer(route) {
        return route.parent?.component || document.body;
    }

    /**
     * @private
     * @static
     * @async
     * @param {Any} [route]
     */
    static async loadComponent(route) {
        if (!route.component) {
            route.component = await route.load();
        }
    }

    /**
     *
     * @private
     * @static
     * @async
     * @param {Any} [route]
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
     */
    static setController() {
        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();
    }

    /**
     *
     * @static
     * @param {Any} [url]
     */
    static navigate(url) {
        if (this.options.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     *
     * @private
     * @static
     * @param {Any} [event]
     */
    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");
        if (element) {
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    /**
     *
     * @private
     * @static
     * @param {Any} [type]
     * @param {Any} [detail]
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
     * @property {String} path
     * @property {Function} load - use `import('./my.js').then(m=>m.default)` for lazy load
     * @property {Function} beforeLoad
     * @property {HTMLElement} component
     * @property {RouterUseRoutes} children
     */
    /**
     * @typedef {Object} RouterUseOptions
     * @property {Boolean} [historyApiFallback=false] - use hash / history
     */

    /**
     *
     * @static
     * @param {RouterUseRoutes} [routes=[]]
     * @param {RouterUseOptions} [options={}]
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

            /**
             *
             */
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
