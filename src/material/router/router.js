/**
 * {{desc}}
 * @fires MDRouter#onRouterCurrentEntryChange - {{desc}}
 * @fires MDRouter#onRouterNavigate - {{desc}}
 * @fires MDRouter#onRouterNavigateError - {{desc}}
 * @fires MDRouter#onRouterNavigateSuccess - {{desc}}
 */
class MDRouter {
    static stacks = [];
    static _params = {};
    static controller;
    static route;
    static routes;
    static _historyApiFallback = true;

    /**
     * {{desc}}
     * @param {Any} routes - {{desc}}
     * @param {Any} parent - {{desc}}
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
     * {{desc}}
     */
    static get path() {
        if (this.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?.*$/, "") || "/";
        }
    }

    /**
     * {{desc}}
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
     * {{desc}}
     * @param {Any} path - {{desc}}
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
     * {{desc}}
     * @param {Any} route - {{desc}}
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
     * {{desc}}
     * @param {Any} container - {{desc}}
     * @param {Any} route - {{desc}}
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
     * {{desc}}
     */
    static get params() {
        return this._params;
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    static set params(value) {
        this._params = value;
    }
    /**
     * {{desc}}
     */
    static performanceStart() {
        performance.mark("markRouterStart");
    }
    /**
     * {{desc}}
     */
    static performanceEnd() {
        performance.mark("markRouterEnd");
        performance.measure("measureRouter", "markRouterStart", "markRouterEnd");
        performance.clearMarks("markRouterStart");
        performance.clearMarks("markRouterEnd");
        performance.clearMeasures("measureRouter");
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    static async handleLoad(event) {
        this.performanceStart();
        this.emit("onRouterCurrentEntryChange", event);
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
        this.performanceEnd();
    }

    /**
     * {{desc}}
     * @param {Any} url - {{desc}}
     */
    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} routes - {{desc}}
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
     * {{desc}}
     */
    static get historyApiFallback() {
        return this._historyApiFallback;
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    static set historyApiFallback(value) {
        this._historyApiFallback = value;
    }

    /**
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} detail - {{desc}}
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
