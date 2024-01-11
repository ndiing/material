/**
 * Overrides the window.history.pushState method to dispatch a "popstate" event after pushing a state.
 * @function
 * @name pushStateOverride
 * @param {...*} args - Arguments to be passed to the original pushState method.
 * @returns {void}
 */
const pushState = window.history.pushState;
window.history.pushState = function () {
    pushState.apply(this, arguments);
    window.dispatchEvent(new CustomEvent("popstate"));
};

/**
 * MDNavigation class for managing client-side navigation.
 * @class
 * @fires MDNavigation#onCurrententrychange
 * @fires MDNavigation#onNavigate
 * @fires MDNavigation#onNavigateerror
 * @fires MDNavigation#onNavigatesuccess
 */
class MDNavigation {
    /**
     * Sets entries for navigation.
     * @static
     * @private
     * @param {Array} entries - Array of navigation entries.
     * @param {Object|null} parent - Parent entry.
     * @returns {Array} - Flattened array of entries.
     */
    static setEntries(entries = [], parent = null) {
        return entries.reduce((p, c) => {
            c.parent = parent;
            c.pattern = [c.parent?.pattern, c.path].join("/").replace(/\/+/g, "/");
            p = p.concat(c);
            if (c.children && c.children.length) p = p.concat(this.setEntries(c.children, c));
            return p;
        }, []);
    }

    /**
     * Gets the query parameters from the current URL.
     * @static
     * @private
     * @returns {Object} - Query parameters as key-value pairs.
     */
    static getQuery() {
        return Object.fromEntries(new URLSearchParams(window.location.search).entries());
    }

    /**
     * Gets the current entry based on the URL.
     * @static
     * @private
     * @returns {Object|null} - Current navigation entry.
     */
    static getEntry() {
        return this.entries.find((entry) => {
            const regexp = new RegExp(
                "^" + //
                    entry.pattern //
                        .replace(/\:(\w+)/g, "(?<$1>[^/]+)")
                        .replace(/\*/, "(?:.*)") +
                    "(?:/?$)",
                "i"
            ); //
            const matches = this.path.match(regexp);
            if (matches) {
                this.params = { ...matches?.groups };
                return matches;
            }
            return null;
        });
    }

    /**
     * Gets all entries in the hierarchy for a given entry.
     * @static
     * @private
     * @param {Object} entry - Current navigation entry.
     * @returns {Array} - Array of entries in the hierarchy.
     */
    static getEntries(entry) {
        return [entry].reduce((p, c) => {
            if (c.parent) p = p.concat(this.getEntries(c.parent));
            p = p.concat(c);
            return p;
        }, []);
    }

    /**
     * Gets a placeholder for a given entry.
     * @static
     * @private
     * @param {Object} entry - Current navigation entry.
     * @returns {Promise<Element>} - Promise resolving to the placeholder element.
     */
    static async getPlaceholder(entry) {
        return await new Promise((resolve) => {
            let placeholder;
            let observer;
            const callback = () => {
                placeholder = entry.container.querySelector("md-placeholder");
                if (placeholder) {
                    if (observer) observer.disconnect();
                    resolve(placeholder);
                }
            };
            callback();
            if (!placeholder) {
                observer = new MutationObserver(callback);
                observer.observe(entry.container, {
                    childList: true,
                    subtree: true,
                });
            }
        });
    }

    /**
     * Emits a custom event with the specified type and detail.
     * @static
     * @private
     * @param {string} type - Type of the custom event.
     * @param {Object} detail - Details to be included in the event.
     * @returns {void}
     */
    static emit(type, detail = {}) {
        detail = {
            ...this,
            ...detail,
        };
        window.dispatchEvent(
            new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            })
        );
    }

    /**
     * Renders the navigation based on the current URL.
     * @static
     * @private
     * @param {Event} event - Event triggering the render.
     * @returns {void}
     */
    static async render(event) {
        this.emit("onCurrententrychange");

        if (this.controller && !this.controller.signal.aborted) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) this.controller = new AbortController();

        this.path = window.location.pathname;
        this.query = this.getQuery();
        this.params = {};

        const entry = this.getEntry();
        const entries = this.getEntries(entry);

        for (const entry of entries) {
            this.emit("onNavigate");

            if (!entry.beforeLoad) entry.beforeLoad = (resolve) => resolve();
            try {
                await new Promise((resolve, reject) => {
                    this.controller.signal.addEventListener("abort", reject);
                    entry.beforeLoad(resolve, reject);
                });
            } catch (error) {
                this.emit("onNavigateerror");
                break;
            }

            if (!entry.component) entry.component = await entry.load();
            if (!entry.container) entry.container = entry.parent?.component ?? document.body;

            const placeholder = await MDNavigation.getPlaceholder(entry);

            if (!entry.component.isConnected) placeholder.parentElement.insertBefore(entry.component, placeholder.nextElementSibling);

            const placeholders = document.body.querySelectorAll("md-placeholder");
            for (const placeholder of placeholders) {
                let nextElement = placeholder.nextElementSibling;
                while (nextElement) {
                    if (!entries.find((entry) => entry.component === nextElement)) nextElement.remove();
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }

        this.emit("onNavigatesuccess");
    }

    /**
     * Navigates to the specified URL.
     * @static
     * @param {string} url - URL to navigate to.
     * @returns {void}
     */
    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    /**
     * Handles the click event for elements with the "navigate" attribute.
     * @static
     * @private
     * @param {Event} event - Click event.
     * @returns {void}
     */
    static change(event) {
        const navigate = event.target.closest("[navigate]");
        if (navigate) {
            const url = navigate.getAttribute("navigate");
            this.navigate(url);
        }
    }

    /**
     * Initializes the MDNavigation class with the provided entries.
     * @static
     * @param {Array} entries - Array of navigation entries.
     * @property {string} path - The URL path for the navigation entry.
     * @property {Element} component - The component associated with the navigation entry.
     * @property {NavigationEntry[]} children - An array of child navigation entries.
     * @property {Function} load - A function to load the component associated with the entry.
     * @property {Function} beforeLoad - A function called before loading the entry, with resolve and reject parameters.
     * @returns {void}
     * @example
     * MDNavigation.load([
     *   {path:'',component:MainComponent,children:[
     *       {path:'users',beforeLoad,load:() => import("./navigation/users.js").then(m=>m.default),children:[
     *           {path:':_id',load:() => import("./navigation/user.js").then(m=>m.default),children:[]},
     *       ]},
     *       {path:'blogs',load:() => import("./navigation/blogs.js").then(m=>m.default),children:[
     *           {path:':_id',load:() => import("./navigation/blog.js").then(m=>m.default),children:[]},
     *       ]},
     *   ]},
     *   {path:'login',component:LoginComponent,children:[]},
     *   {path:'*',component:ErrorComponent,children:[]},
     * ])
     */
    static load(entries = []) {
        this.entries = this.setEntries(entries);

        window.addEventListener("DOMContentLoaded", this.render.bind(this));
        window.addEventListener("popstate", this.render.bind(this));

        window.addEventListener("click", this.change.bind(this));
    }
}

export { MDNavigation };
