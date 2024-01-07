// const route = {
//     path: String,
//     component: HTMLElement,
//     load: () => import("../../dev/router/main").then((m) => m.default),
//     beforeLoad: (resolve, reject) => resolve(),
//     children: [],
// };
// const routes = [route, route, route];

/**
 * Class representing a simple router.
 * @fires window#onCurrentEntryChange - Triggered when the current entry changes.
 * @fires window#onNavigate - Triggered when navigation starts.
 * @fires window#onNavigateError - Triggered when there's an error during navigation.
 * @fires window#onNavigateSuccess - Triggered when navigation is successful.
 */
class MDRouter {
    /**
     * Emits a custom event.
     * @private
     * @param {string} type - The type of the event.
     * @param {Object} [detail={ ...this }] - Additional details to include in the event.
     *                                      Defaults to the current instance of the class.
     */
    static emit(type, detail = { ...this }) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     * Recursively adds routes to the router.
     * @private
     * @param {Array} routes - The routes to be added.
     * @param {Object} [parent=null] - The parent route object.
     * @returns {Array} - The modified routes array.
     */
    static addRoutes(routes = [], parent = null) {
        return routes.reduce((p, c) => {
            c.parent = parent;
            c.pattern = [c.parent?.pattern ?? "", c.path].join("/").replace(/\/+/g, "/");
            p = p.concat(c);
            if (c.children) {
                p = p.concat(this.addRoutes(c.children, c));
            }
            return p;
        }, []);
    }

    /**
     * Retrieves the stack of routes.
     * @private
     * @param {Object} route - The route object.
     * @returns {Array} - The stack of routes.
     */
    static getStack(route) {
        return [route].reduce((p, c) => {
            if (c.parent) p = p.concat(this.getStack(c.parent));
            p = p.concat(c);
            return p;
        }, []);
    }

    /**
     * Handles the loading of routes and manages the navigation lifecycle.
     * @private
     * @param {Event} event - The load event.
     */
    static async handleLoad(event) {
        this.emit("onCurrentEntryChange");

        this.path = window.location.pathname;
        this.params = {};
        this.route = this.routes.find((route) => {
            const regexp = new RegExp("^" + route.pattern.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i");
            const matches = this.path.match(regexp);
            if (matches) {
                this.params = { ...matches?.groups };
                return matches;
            }
            return null;
        });
        this.query = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        this.stack = this.getStack(this.route);

        if (this.controller) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();

        for (const route of this.stack) {
            this.emit("onNavigate");

            if (!route.beforeLoad) route.beforeLoad = (resolve) => resolve();
            try {
                await new Promise((resolve, reject) => {
                    this.controller.signal.addEventListener("abort", reject);
                    route.beforeLoad(resolve, reject);
                });
            } catch (error) {
                this.emit("onNavigateError");

                break;
            }

            if (!route.component) route.component = await route.load();
            if (!route.container) route.container = route.parent?.component ?? document.body;

            const outlet = await new Promise((resolve) => {
                let observer;
                let outlet;
                const callback = () => {
                    outlet = route.container.querySelector("md-outlet");
                    if (outlet) {
                        if (observer) observer.disconnect();
                        resolve(outlet);
                    }
                };
                callback();
                if (!outlet) {
                    observer = new MutationObserver(callback);
                    observer.observe(route.container, {
                        childList: true,
                        subtree: true,
                    });
                }
            });

            if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);

            const outlets = document.body.querySelectorAll("md-outlet");
            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;
                while (nextElement) {
                    let component = this.stack.find((route) => route.component === nextElement);
                    if (!component) nextElement.remove();
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
        this.emit("onNavigateSuccess");
    }

    /**
     * Navigates to a specified URL.
     * @param {string} url - The URL to navigate to.
     */
    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    /**
     * Handles click events for navigation.
     * @private
     * @param {Event} event - The click event.
     */
    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     * Initializes the router with provided routes.
     * @param {Route[]} routes - An array of route objects representing the application routes.
     * @property {string} [routes[0].path=String] - The path for the route.
     * @property {HTMLElement} [routes[0].component=HTMLElement] - The HTML element associated with the route.
     * @property {Promise<Object>} [routes[0].load=Promise] - A function that returns a Promise, typically used to dynamically import a module.
     * @property {Promise<Object>} [routes[0].beforeLoad=Promise] - A function that runs before loading the route, typically used for resolving or rejecting promises.
     * @property {Route[]} [routes[0].children=[Route]] - An array containing child routes.
     */
    static init(routes = []) {
        const pushState = window.history.pushState;
        window.history.pushState = function () {
            pushState.apply(this, arguments);

            MDRouter.emit("popstate");
        };

        this.routes = this.addRoutes(routes);

        window.addEventListener("DOMContentLoaded", this.handleLoad.bind(this));
        window.addEventListener("popstate", this.handleLoad.bind(this));

        window.addEventListener("click", this.handleClick.bind(this));
    }
}

export { MDRouter };
