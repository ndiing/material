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
 * {{desc}}
 */
class MDMediaObserver {
    
    
    /**
     * {{desc}}
     * @param {Any} callback = () => {} - {{desc}}
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }
    
    
    /**
     * {{desc}}
     * @param {Any} items - {{desc}}
     */
    observe(items) {
        const handleChange = () => {
            this.media?.removeEventListener("change", handleChange);
            this.item = null;
            for (let i = 0; i < items.length; i++) {
                if (window.matchMedia(items[i].query).matches) {
                    this.item = items[i];
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
