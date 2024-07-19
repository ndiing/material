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
 * Class for observing media queries and executing callbacks on changes.
 */
class MDMediaObserver {

    /**
     * Creates an instance of MDMediaObserver.
     * @param {Function} [callback=() => {}] - The callback function to execute when conditions change.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Observes the provided list of media queries and triggers the callback on changes.
     * @param {Array} list - List of objects containing `name` and `query` properties.
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
export { schemes, breakpoints, MDMediaObserver };
