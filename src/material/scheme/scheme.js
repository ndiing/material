const defaultItems = [
    { name: "light", media: window.matchMedia("(prefers-color-scheme: light)") },
    { name: "dark", media: window.matchMedia("(prefers-color-scheme: dark)") },
];

class Scheme {
    constructor(callback) {
        this.callback = callback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.destroy();
        this.init();
    }

    init(items = defaultItems) {
        if (!this.items) this.items = items;
        this.item = this.items.find((item) => item.media.matches);
        this.callback(this.item);
        this.item.media.addEventListener("change", this.handleChange);
    }

    destroy() {
        this.item.media.removeEventListener("change", this.handleChange);
        this.item = undefined;
    }
}
export { Scheme };
