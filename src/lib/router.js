/**
 * A simple router implementation for managing routes.
 * @class
 * @name Router
 * @description This class manages route configurations and navigation within a web application.
 * @author Ridho Prasetya
 */
class Router {
    /**
     * Represents a route configuration object.
     * @typedef {Object} Route
     * @property {string} path - Represents the path of the route.
     * @property {HTMLElement} component - Represents the component associated with the route.
     * @property {function} load - Function to load the route's content.
     * @property {function} beforeLoad - Function executed before loading the route's content.
     * @property {Route[]} children - Represents any child routes associated with this route.
     * @property {string} redirect - Represents the redirect path if needed.
     */

    /**
     * Represents an array of route configuration objects.
     * @type {Route[]}
     */

    /**
     * Add routes to the router configuration.
     * @private
     * @param {Route[] routes - Array of route objects.
     * @param {string} pattern - URL pattern for the routes.
     * @param {Object|null} parent - Parent route object.
     * @returns {Route[]} - Updated routes array.
     */
    static addRoutes(routes = [], pattern = "", parent = null) {
        return routes.reduce((prev, curr) => {
            // Combine the current pattern with the path of the current route, ensuring correct formatting
            curr.pattern = [pattern, curr.path].join("/").replace(/\/+/g, "/");

            // Set the parent of the current route
            curr.parent = parent;

            // Concatenate the current route to the accumulated array
            prev = prev.concat(curr);

            // If the current route has children, recursively add their routes
            if (curr.children) {
                // Recursively call addRoutes with the children, updated pattern, and current route as parent
                prev = prev.concat(this.addRoutes(curr.children, curr.pattern, curr));
            }

            return prev; // Return the accumulated array
        }, []); // Initialize the accumulator as an empty array
    }

    /**
     * Get all routes starting from the provided route.
     * @private
     * @param {Object} route - Route object.
     * @returns {Array<Object>} - All routes from the provided route upwards.
     */
    static getRoutes(route) {
        // Reduce the given route and its parent routes into a flattened array
        return [route].reduce((prev, curr) => {
            // If the current route has a parent route, recursively get its parent routes
            if (curr.parent) {
                prev = prev.concat(this.getRoutes(curr.parent)); // Concatenate parent routes
            }

            // Concatenate the current route to the accumulated array
            prev = prev.concat(curr);

            return prev; // Return the accumulated array
        }, []); // Initialize the accumulator as an empty array
    }

    /**
     * Get query parameters from the URL.
     * @private
     * @returns {Object} - Query parameters object.
     */
    static getQuery() {
        // Create a new object from the query parameters in the current URL
        return Object.fromEntries(new URLSearchParams(window.location.search).entries());
    }

    /**
     * Get the matching route based on the current URL.
     * @private
     * @returns {Object|null} - Matching route object or null if not found.
     */
    static getRoute() {
        // Find a route that matches the current path
        return this._routes.find((route) => {
            // Construct a regular expression pattern based on the route's pattern
            const regexp = new RegExp(
                "^" + // Anchors the pattern to the beginning of the string
                    route.pattern // Uses the route's defined pattern
                        .replace(/\:(\w+)/g, "(?<$1>[^/]+)") // Replaces named parameters with capturing groups
                        .replace(/\*/, "(?:.*)") + // Replaces wildcard '*' with a non-capturing group for any characters
                    "(?:/?$)", // Allows an optional trailing slash at the end
                "i" // Flags: 'i' for case-insensitive matching
            );

            // Attempt to match the path against the constructed regular expression
            const matches = this.path.match(regexp);

            // If a match is found
            if (matches) {
                // Extract named parameters from the match and store them in 'this.params'
                this.params = { ...matches?.groups };
                return matches; // Return the matching route
            }

            return null; // Return null if no match is found
        });
    }

    /**
     * Get the DOM outlet element for a route.
     * @private
     * @param {Object} route - Route object.
     * @returns {Promise<HTMLElement>} - Promise resolving to the outlet element.
     */
    static async getOutlet(route) {
        // Return a promise that resolves once the outlet is found within the container
        return await new Promise((resolve) => {
            let observer; // Initialize a MutationObserver variable

            // Callback function to check for the existence of the outlet
            const callback = () => {
                // Find the outlet element within the route's container
                const outlet = route.container.querySelector("md-outlet");

                // If the outlet element is found
                if (outlet) {
                    // Disconnect the observer (if present) and resolve the promise with the found outlet
                    if (observer) observer.disconnect();
                    resolve(outlet);
                }
            };

            // Call the callback function to check for the outlet's existence
            callback();

            // Create a MutationObserver to watch for changes within the container
            observer = new MutationObserver(callback);
            observer.observe(route.container, {
                childList: true, // Watch for changes in the child nodes of the container
                subtree: true, // Watch for changes in the entire subtree of the container
            });
        });
    }

    /**
     * Emit a custom event.
     * @private
     * @param {string} type - Event type.
     * @param {any} detail - Event detail.
     */
    static emit(type, detail) {
        // Create a new CustomEvent with the provided type and detail
        const event = new CustomEvent(type, {
            bubbles: true, // Allows the event to bubble up through the DOM
            cancelable: true, // Indicates if the event is cancelable
            detail, // Attach the provided detail to the event
        });

        // Dispatch the custom event to the window object
        window.dispatchEvent(event);
    }

    /**
     * Get details of the current router state.
     * @private
     * @returns {Object} - Router details.
     */
    static get detail() {
        // Create and return a new object containing properties from the current Router instance
        return { ...this };
    }

    /**
     * Manages the control and abort functionality for ongoing operations.
     * @type {AbortController|null} An AbortController instance used for controlling ongoing operations.
     */
    static controller = undefined;

    /**
     * Handle navigation events.
     * @private
     * @param {Event} event - Navigation event.
     */
    static async handleNavigation(event) {
        // Update the 'path' variable with the current URL's path
        this.path = window.location.pathname;

        // Reset 'params' to an empty object
        this.params = {};

        // Determine the current route
        this.route = this.getRoute();

        // Get any query parameters from the URL
        this.query = this.getQuery();

        // Retrieve the routes associated with the current route
        this.routes = this.getRoutes(this.route);

        // Emit an "onNavigationStart" event with the provided detail
        this.emit("onNavigationStart", this.detail);

        // Abort any ongoing navigation (if present) and create a new AbortController
        if (this.controller) this.controller.abort();
        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }

        // Loop through the routes
        for (const route of this.routes) {
            // Emit an "onNavigation" event with the provided detail
            this.emit("onNavigation", this.detail);

            // If the route's component hasn't been loaded, load it
            if (!route.component) route.component = await route.load();

            // Determine the container for the route's component
            if (!route.container) route.container = route.parent?.component ?? document.body;

            // Retrieve the outlet for the route
            const outlet = await this.getOutlet(route);

            // Remove unused components from the DOM
            const outlets = document.body.querySelectorAll("md-outlet");
            for (const outlet of outlets) {
                let component = outlet.nextElementSibling;

                while (component) {
                    if (!this.routes.find((route) => route.component === component)) {
                        component.remove();
                    }

                    component = component.nextElementSibling;
                }
            }

            // Execute "beforeLoad" actions for the route, if present
            if (route.beforeLoad) {
                if (!Array.isArray(route.beforeLoad)) route.beforeLoad = [route.beforeLoad];
                try {
                    for (const beforeLoad of route.beforeLoad) {
                        await new Promise((resolve, reject) => {
                            this.controller.signal.addEventListener("abort", reject);
                            beforeLoad(resolve, reject);
                        });
                    }
                } catch (error) {
                    // If an error occurs during "beforeLoad", emit an "onNavigationCancel" event and break the loop
                    this.emit("onNavigationCancel", this.detail);
                    break;
                }
            }

            // If the route's component is not connected to the DOM, insert it into the DOM
            if (!route.component.isConnected) {
                outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
            }
        }

        // Emit an "onNavigationEnd" event with the provided detail
        this.emit("onNavigationEnd", this.detail);
    }

    /**
     * Navigate to a specified URL.
     * @param {string} url - URL to navigate to.
     */
    static navigate(url) {
        // Pushes a new state to the browser's history with the provided URL
        window.history.pushState({}, null, url);
    }

    /**
     * Request navigation based on a triggered event.
     * @private
     * @param {Event} event - Click event triggering navigation.
     */
    static requestNavigation(event) {
        // Find the closest ancestor of the clicked element that has a 'routerLink' attribute
        const target = event.target.closest("[routerLink]");

        // If an element with 'routerLink' attribute is clicked
        if (target) {
            // Get the URL from the 'routerLink' attribute of the clicked element
            const url = target.getAttribute("routerLink");

            // Navigate to the URL obtained from the 'routerLink' attribute
            this.navigate(url);
        }
    }

    /**
     * Initialize the router with provided routes.
     * @param {Route[]} routes - Array of route objects.
     */
    static init(routes = []) {
        // Add the provided routes to the router
        this._routes = this.addRoutes(routes);

        // Listen for the DOMContentLoaded event and call handleNavigation when the DOM is fully loaded
        window.addEventListener("DOMContentLoaded", this.handleNavigation.bind(this));

        // Listen for the popstate event triggered by browser history changes and call handleNavigation
        window.addEventListener("popstate", this.handleNavigation.bind(this));

        // Override the pushState method to intercept history changes and emit a custom "popstate" event
        const pushState = window.history.pushState;
        window.history.pushState = function () {
            // Call the original pushState function
            pushState.apply(this, arguments);

            // Emit the custom "popstate" event through the Router
            Router.emit("popstate");
        };

        // Listen for click events globally and trigger the requestNavigation method
        window.addEventListener("click", this.requestNavigation.bind(this));
    }
}

export { Router };
