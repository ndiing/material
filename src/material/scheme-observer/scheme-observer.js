const defaultItems = [
    { name: "light", media: window.matchMedia("(prefers-color-scheme: light)") },
    { name: "dark", media: window.matchMedia("(prefers-color-scheme: dark)") },
];

/**
 * SchemeObserver class responsible for managing color scheme changes based on media queries.
 */
class SchemeObserver {
    /**
     * Creates an instance of the SchemeObserver class.
     * @param {Function} callback - The callback function to be executed when the color scheme changes.
     */
    constructor(callback) {
        this.callback = callback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // /**
    //  * Handles color scheme change events by destroying the current scheme and initializing a new one.
    //  */
    handleChange() {
        this.destroy();
        this.init();
    }

    /**
     * Initializes the color scheme by finding the matching media query and executing the callback.
     * @param {Array<Object>} [items=defaultItems] - The array of scheme items, each containing a name and a media query.
     */
    init(items = defaultItems) {
        if (!this.items) {
            this.items = items;
        }
        this.item = this.items.find((item) => item.media.matches);
        this.callback(this.item);
        this.item.media.addEventListener("change", this.handleChange);
    }

    /**
     * Destroys the current scheme by removing the event listener from the matching media query.
     */
    destroy() {
        this.item.media.removeEventListener("change", this.handleChange);
        this.item = undefined;
    }
}

export { SchemeObserver };
