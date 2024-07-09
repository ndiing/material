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
 * MDObserver observes media queries and triggers a callback when a matching query is found.
 */
class MDObserver {
    /**
     * Creates an instance of MDObserver.
     * @param {Function} [callback=() => {}] - The callback function to be called when a media query matches.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Observes a list of media query configurations and triggers the callback when a matching query is found.
     * @param {Object[]} list - The list of media query configurations to observe.
     * Each object in the list should have a `name` (string) and `query` (string) property.
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
