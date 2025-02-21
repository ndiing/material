const defaultItems = [
    { name: "expanded", media: window.matchMedia("(min-width: 840px)") },
    { name: "medium", media: window.matchMedia("(min-width: 600px) and (max-width: 839px)") },
    { name: "compact", media: window.matchMedia("(max-width: 599px)") },
];
/**
 * LayoutObserver class responsible for managing layout changes based on media queries.
 */
class LayoutObserver {
    /**
     * Creates an instance of LayoutObserver.
     * @param {Function} callback - The callback function to be executed when the layout changes.
     */
    constructor(callback) {
        this.callback = callback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // /**
    //  * Handles layout change events by destroying the current layout and initializing a new one.
    //  */
    handleChange() {
        this.destroy();
        this.init();
    }

    /**
     * Initializes the layout by finding the matching media query and executing the callback.
     * @param {Array<Object>} [items] - An array of layout items, each containing a name and a media query.
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
     * Destroys the current layout by removing the event listener from the matching media query.
     */
    destroy() {
        this.item.media.removeEventListener("change", this.handleChange);
        this.item = undefined;
    }
}

export { LayoutObserver };
