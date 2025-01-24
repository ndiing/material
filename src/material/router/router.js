/**
 * @class Router
 * @fires onRouterCurrentEntryChange
 * @fires onRouterNavigate
 * @fires onRouterNavigateError
 * @fires onRouterNavigateSuccess
 * @example
 * import { Router } from "../material/router/router";
 *
 * import DemoMain from'./main/main.js'
 * const DemoUsers = () => import( './users/users.js').then(m=>m.default)
 * const DemoUser = () => import( './user/user.js').then(m=>m.default)
 * const DemoBlogs = () => import( './blogs/blogs.js').then(m=>m.default)
 * const DemoBlog = () => import( './blog/blog.js').then(m=>m.default)
 * const DemoError = () => import( './error/error.js').then(m=>m.default)
 *
 * const beforeLoad = (next) => {
 *     next()
 * }
 *
 * Router.use([
 *     {path:'',component:DemoMain,children:[
 *         {path:'users',beforeLoad,load:DemoUsers,children:[
 *             {path:':id',outlet:'user',load:DemoUser,children:[]},
 *         ]},
 *         {path:'blogs',load:DemoBlogs,children:[
 *             {path:':id',load:DemoBlog,children:[]},
 *         ]},
 *     ]},
 *     {path:'*',load:DemoError,children:[]},
 * ])
 */
class Router {
    /**
     *
     */
    static params = {};

    /**@private*/
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

    static get pathname() {
        return window.location.pathname;
    }

    /**@private*/
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

    /**@private*/
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

    /**@private*/
    static renderComponent(route, outlet) {
        if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
    }

    /**@private*/
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

    /**@private*/
    static setContainer(route) {
        return route.parent?.component || document.body;
    }

    /**@private*/
    static async loadComponent(route) {
        if (!route.component) route.component = await route.load();
    }

    /**@private*/
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

    /**@private*/
    static setController() {
        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();
    }

    /**
     *
     * @param {String} url
     */
    static navigate(url) {
        window.history.pushState({}, "", url);
    }

    /**@private*/
    static handleNavigate(event) {
        const element = event.target.closest("[routerLink]");

        if (element) {
            const url = element.getAttribute("routerLink");
            Router.navigate(url);
        }
    }

    /**@private*/
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }
    /**@private*/
    static routes = [];

    /**@private*/
    static options = {};

    /**
     * @typedef {Array} RouterRoutes
     * @property {String} path
     * @property {HTMLElement} component
     * @property {Function} load
     * @property {Function} [beforeLoad]
     * @property {String} [outlet]
     * @property {Array} [children]
     */

    /**
     * @typedef {Object} RouterOptions
     * @property {Boolean} [historyApiFallback=true]
     */

    /**
     *
     * @param {RouterRoutes} routes
     * @param {RouterOptions} options
     */
    static use(routes = [], options = {}) {
        this.routes = routes;
        this.options = {
            historyApiFallback: true,
            ...options,
        };
        window.addEventListener("load", this.handleNavigation.bind(this));
        window.addEventListener("popstate", this.handleNavigation.bind(this));
        const pushState = window.history.pushState;

        window.history.pushState = function () {
            pushState.apply(this, arguments);
            Router.emit("popstate");
        };
        window.addEventListener("click", this.handleNavigate.bind(this));
    }
}

export { Router };
