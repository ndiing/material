/**
 * Router class responsible for managing client-side routing.
 * @example
 * import { Router } from "./material/router/router";
 *
 * const sessionCheck = (next) => {
 *     if(hasSession){
 *         next()
 *     }else{
 *         Router.navigate('/login')
 *         next('no session')
 *     }
 * }
 *
 * Router.use([
 *     {path:'',component:MainComponent,chidlren:[
 *         {path:'users',beforeLoad:sessionCheck,component:UsersComponent,children:[
 *             {path:':id',component:UserComponent},
 *         ]},
 *     ]},
 *     {path:'*',laod:() => import('./error/error.js').then(m=>m.default)},
 * ])
 */
class Router {
    /**
     * Parameters extracted from the current route.
     * @static
     * @property {Object} event
     */
    static params = {};
    //
    /**
    //  * Retrieves the matching route(s) based on the provided pathname.
    //  * @param {string} [pathname=this.pathname] - The current pathname to match against.
    //  * @param {Array} [routes=this.routes] - The array of routes to search within.
    //  * @param {Object} [parent=null] - The parent route, if any.
    //  * @param {Array} [result=[]] - The accumulated matched routes.
    //  * @returns {Array} The array of matched routes.
    //  */
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
     * Retrieves the current pathname.
     * @static
     * @readonly
     * @returns {string} The current pathname.
     */
    static get pathname() {
        if (this.options.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?[^\?]+/, "") || "/";
        }
    }

    //
    /**
    //  * Handles navigation events, triggering the route change process.
    //  * @static
    //  * @param {Event} event - The navigation event.
    //  */
    static async handleNavigation(event) {
        performance.mark("mark-1");

        /**
         * @event onRouterCurrentEntryChange
         * @property {Object} event
         */
        this.emit("onRouterCurrentEntryChange", {});
        this.setController();
        const routes = this.get();

        /**
         * @event onRouterNavigate
         * @property {Object} event
         */
        this.emit("onRouterNavigate", {});

        for (const route of routes ?? []) {
            if (route.beforeLoad) {
                try {
                    await this.handleBeforeLoad(route);
                } catch (error) {
                    /**
                     * @event onRouterNavigateError
                     * @property {Object} event
                     */
                    this.emit("onRouterNavigateError", {});
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

        /**
         * @event onRouterNavigateSuccess
         * @property {Object} event
         */
        this.emit("onRouterNavigateSuccess", {});
    }

    //
    /**
    //  * Removes components from previous routes that are no longer in use.
    //  * @static
    //  * @param {Array} routes - The array of current routes.
    //  */
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

    //
    /**
    //  * Renders the specified component for the given route into the provided outlet.
    //  * @static
    //  * @param {Object} route - The route object containing the component to render.
    //  * @param {HTMLElement} outlet - The outlet element where the component should be rendered.
    //  */
    static renderComponent(route, outlet) {
        if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    }

    //
    /**
    //  * Retrieves the outlet element for the specified route.
    //  * @static
    //  * @param {HTMLElement} container - The container element where the outlet is located.
    //  * @param {Object} route - The route object containing outlet information.
    //  * @returns {Promise<HTMLElement>} A promise that resolves to the outlet element.
    //  */
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

    //
    /**
    //  * Sets the container for the specified route.
    //  * @static
    //  * @param {Object} route - The route object.
    //  * @returns {HTMLElement} The container element.
    //  */
    static setContainer(route) {
        return route.parent?.component || document.body;
    }

    //
    /**
    //  * Loads the component for the specified route.
    //  * @static
    //  * @param {Object} route - The route object containing load information.
    //  * @returns {Promise<void>}
    //  */
    static async loadComponent(route) {
        if (!route.component) {
            route.component = await route.load();
        }
    }

    //
    /**
    //  * Handles the beforeLoad event for the specified route.
    //  * @static
    //  * @param {Object} route - The route object containing beforeLoad information.
    //  * @returns {Promise<void>}
    //  */
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

    //
    /**
    //  * Sets the AbortController for handling route cancellations.
    //  * @static
    //  */
    static setController() {
        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }
    }

    /**
     * Navigates to the specified URL.
     * @static
     * @param {string} [url] - The URL to navigate to.
     */
    static navigate(url) {
        if (this.options.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    //
    /**
    //  * Handles navigate events triggered by user interactions.
    //  * @static
    //  * @param {Event} event - The navigate event.
    //  */
    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");

        if (element) {
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    //
    /**
    //  * Emits a custom event of the specified type.
    //  * @static
    //  * @param {string} type - The type of event to emit.
    //  * @param {Object} [detail] - The optional event details.
    //  */
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     * The array of defined routes.
     * @static
     * @type {Array}
     */
    static routes = [];
    //
    /**
    //  * The router options.
    //  * @static
    //  * @property {Object} event
    //  */
    static options = {};

    /**
     * @typedef {Object} RouterUseRoutes
     * @property {string} path - The path of the route.
     * @property {HTMLElement} [component] - The component to render for the route.
     * @property {Function} [load] - The function to load the component.
     * @property {Function} [beforeLoad] - The function to call before loading the component.
     * @property {RouterUseRoutes.<Array>} [children] - The child routes.
     */

    /**
     * @typedef {Object} RouterUseOptions
     * @property {boolean} [historyApiFallback=false] - Whether to use the History API for navigation.
     */

    /**
     * Initializes the router with the specified routes and options.
     * @static
     * @param {RouterUseRoutes.<Array>} [routes=[]] - The array of routes.
     * @param {RouterUseOptions} [options={}] - The router options.
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
