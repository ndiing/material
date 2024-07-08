const schemes = [
    { name: "light", query: "(prefers-color-scheme: light)" },
    { name: "dark", query: "(prefers-color-scheme: dark)" },
];

const breakpoints = [
    { name: "compact", query: "(max-width: 599px)" },
    { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
    { name: "expanded", query: "(min-width: 840px)" },
];

/**
 * Defines media query observer for handling changes based on provided list.
 * This class allows monitoring changes in media queries and triggering a callback function.
 */
class MDObserver {
    /**
     * Creates an instance of MDObserver.
     * @param {Function} [callback=() => {}] - Optional callback function triggered on query change.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Observes changes in media queries based on the provided list.
     * @param {Array<Object>} list - List of objects containing 'name' and 'query' properties.
     * This method sets up event listeners for each media query in the list, triggering the callback function when a match is found.
     */
    observe(list) {
        const handleChange = () => {
            this.media?.removeEventListener("change", handleChange);

            this.item = null;
            for (let i = 0; i < list.length; i++) {
                if (window.matchMedia(list[i].query).matches) {
                    this.item = list[i];
                    break;
                }
            }

            if (this.item) {
                this.media = window.matchMedia(this.item.query);
                this.callback(this.item);
                this.media.addEventListener("change", handleChange);
            }
        };

        handleChange();
    }
}

export { schemes, breakpoints, MDObserver };
