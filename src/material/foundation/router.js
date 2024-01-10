/**
 * MDRouter is a class for managing routing and navigation within the application.
 */
class MDRouter {
    /**
     * Emits a custom event from the window object.
     * @param {string} type - The type of the custom event.
     * @param {*} detail - Any data to be sent as the event's `detail` property.
     */
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     * Sets routes recursively for the application.
     * @param {Array<Object>} routes - The array of route objects.
     * @param {Object} [parent=null] - The parent route object.
     * @returns {Array<Object>} An array of all route objects.
     */
    static setRoutes(routes = [], parent = null) {
        return routes.reduce((p, c) => {
            c.parent = parent;
            c.pattern = [c.parent?.pattern ?? "", c.path].join("/").replace(/\/+/g, "/");
            p = p.concat(c);
            if (c.children && c.children.length) p = p.concat(this.setRoutes(c.children, c));
            return p;
        }, []);
    }

    /**
     * Retrieves the query parameters from the URL.
     * @returns {Object} An object containing the query parameters.
     */
    static getQuery() {
        return Object.fromEntries(new URLSearchParams(window.location.search).entries());
    }

     /**
     * Retrieves the matching route based on the URL path.
     * @returns {Object} The matched route object.
     */
    static getRoute() {
        return this.routes.find((route) => {
            const regexp = new RegExp("^" + route.pattern.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i");
            const matches = this.path.match(regexp);
            if (matches) {
                this.params = { ...matches?.groups };
                return matches;
            }
            return null;
        });
    }

    /**
     * Retrieves all routes including parent routes recursively.
     * @param {Object} route - The route object to start the recursive search from.
     * @returns {Array<Object>} An array containing all route objects.
     */
    static getRoutes(route) {
        return [route].reduce((p, c) => {
            if (c.parent) p = p.concat(this.getRoutes(c.parent));
            p = p.concat(c);
            return p;
        }, []);
    }

     /**
     * Asynchronously retrieves the outlet element for a given route.
     * @param {Object} route - The route object for which the outlet element is retrieved.
     * @returns {Promise<HTMLElement>} A promise that resolves to the outlet HTMLElement.
     */
    static async getOutlet(route) {
        return await new Promise((resolve) => {
            let outlet;
            let observer;
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
    }

    /**
     * Handles the loading of routes, components, and their placement within the application.
     * @param {Event} event - The event that triggers the route handling (e.g., 'popstate').
     */
    static async handleLoad(event) {
        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();
        this.path = window.location.pathname;
        this.query = this.getQuery();
        this.params = {};
        this.route = this.getRoute();
        this.entries = this.getRoutes(this.route);

        for (const route of this.entries) {
            if (!route.beforeLoad) route.beforeLoad = (resolve) => resolve();
            try {
                await new Promise((resolve, reject) => {
                    this.controller.signal.addEventListener("abort", reject);
                    route.beforeLoad(resolve, reject);
                });
            } catch (error) {
                break;
            }
            if (!route.component) route.component = await route.load();
            if (!route.container) route.container = route.parent?.component ?? document.body;

            const outlet = await this.getOutlet(route);

            if (!route.component.isConnected) outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);

            const outlets = document.querySelectorAll("md-outlet");
            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;
                while (nextElement) {
                    if (!this.entries.find((route) => route.component === nextElement)) nextElement.remove();
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
    }

    /**
     * Navigates to a specified URL using HTML5 History API.
     * @param {string} url - The URL to navigate to.
     */
    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    /**
     * Handles click events on anchor elements and navigates to their respective URLs.
     * @param {MouseEvent} event - The click event triggered by the user.
     */
    static handleClick(event) {
        const anchor = event.target.closest("[href]");
        if (anchor) {
            event.preventDefault();
            const url = anchor.getAttribute("href");
            this.navigate(url);
        }
    }

    /**
     * Initializes the router with provided routes.
     * @param {Array<Object>} routes - The array of route objects.
     */
    static init(routes = []) {
        const pushState = window.history.pushState;
        window.history.pushState = function () {
            pushState.apply(this, arguments);
            MDRouter.emit("popstate");
        };

        this.routes = this.setRoutes(routes);

        this.handleLoad = this.handleLoad.bind(this);

        window.addEventListener("DOMContentLoaded", this.handleLoad);
        window.addEventListener("popstate", this.handleLoad);

        this.handleClick = this.handleClick.bind(this);
        window.addEventListener("click", this.handleClick);
    }
}

export { MDRouter };
