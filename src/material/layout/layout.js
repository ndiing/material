/**
 */
class Layout {
    items = [
        { name: "expanded", media: window.matchMedia("(min-width: 840px)") },
        { name: "medium", media: window.matchMedia("(min-width: 600px) and (max-width: 839px)") },
        { name: "compact", media: window.matchMedia("(max-width: 599px)") },
    ];

    /**
     * @param {Any} [callback]
     */
    constructor(callback) {
        this.callback = callback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     */
    handleChange() {
        this.destroy();
        this.init();
    }

    /**
     */
    init() {
        this.item = this.items.find((item) => item.media.matches);
        this.callback(this.item);
        this.item.media.addEventListener("change", this.handleChange);
    }

    /**
     */
    destroy() {
        this.item.media.removeEventListener("change", this.handleChange);
        this.item = undefined;
    }
}
export { Layout };
