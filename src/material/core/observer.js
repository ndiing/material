class MediaObserver {
    constructor(callback = () => {}, list) {
        this.callback = callback;
        this.list = list;
        this.observe = this.observe.bind(this);
    }
    observe(list) {
        if (!this.list) {
            this.list = list;
        }
        this.disconnect();
        this.item = this.list.find((item) => {
            item.mql = window.matchMedia(item.query);
            return item.mql.matches;
        });
        this.callback(this.item);
        this.item.mql.addEventListener("change", this.observe);
    }
    disconnect() {
        if (this.item?.mql) {
            this.item.mql.removeEventListener("change", this.observe);
        }
    }
}

export { MediaObserver };
