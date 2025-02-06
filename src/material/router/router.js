/**
 */
class Router {
    static params = {};

    /**
     * @param {undefined} [pathname=this.pathname]
     * @param {undefined} [routes=this.routes]
     * @param {String} [parent=null]
     * @param {Array} [result=[]]
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
     * @async
     * @param {Object} [event]
     */
    static async handleNavigation(event) {
        this.emit("onRouterCurrentEntryChange");
        this.setController();
        const routes = this.get();
        this.emit("onRouterNavigate");
        for (const route of routes) {
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
     * @param {String} [routes]
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
     * @param {String} [route]
     * @param {String} [outlet]
     */
    static renderComponent(route, outlet) {
        if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    }

    /**
     * @async
     * @param {String} [container]
     * @param {String} [route]
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
     * @param {String} [route]
     */
    static setContainer(route) {
        return route.parent?.component || document.body;
    }

    /**
     * @async
     * @param {String} [route]
     */
    static async loadComponent(route) {
        if (!route.component) route.component = await route.load();
    }

    /**
     * @private
     * @async
     * @param {String} [route]
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
     */
    static setController() {
        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();
    }

    /**
     * @param {String} [url]
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
     * @param {Object} [event]
     */
    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");
        if (element) {
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    /**
     * @param {String} [type]
     * @param {String} [detail]
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
     * @param {Array} [routes=[]]
     * @param {Object} [options={}]
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
