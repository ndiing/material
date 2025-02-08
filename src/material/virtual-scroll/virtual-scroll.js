/**
 * @class VirtualScroll
 * @extends undefined
 * @fires onVirtualScroll
 */
class VirtualScroll {
    /**
     * @param {String} [host]
     * @param {Object} [options]
     */
    constructor(host, options) {
        this.host = host;
        this.options = {
            total: undefined,
            rowHeight: 56,
            nodePadding: 2,
            viewportHeight: undefined,
            track: ".md-virtual-scroll__track",
            item: ".md-virtual-scroll__item",
            ...options,
        };
        this.init();
    }

    /**
     * @param {Object} [event]
     */
    handleScroll(event) {
        const total = this.options.total;
        const rowHeight = this.options.rowHeight;
        const scrollTop = this.host.scrollTop;
        const nodePadding = this.options.nodePadding;
        const viewportHeight = this.options.viewportHeight ?? this.host.clientHeight;

        const trackHeight = total * rowHeight;

        let start = Math.floor(scrollTop / rowHeight) - nodePadding;
        start = Math.max(0, start);

        let end = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
        end = Math.min(total - start, end);
        end = end + start;

        const translateY = start * rowHeight;

        this.track.style.setProperty("height", trackHeight + "px");

        this.host.querySelectorAll(this.options.item).forEach((item) => {
            item.style.setProperty("transform", "translate3d(0," + translateY + "px,0)");
        });

        this.emit("onVirtualScroll", {
            start,
            end,
        });
    }

    /**
     * @param {String} [type]
     * @param {Object} [detail]
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     */
    init() {
        this.host.classList.add("md-virtual-scroll");

        this.track = this.host.querySelector(this.options.track);

        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    }

    /**
     */
    destroy() {}
}
export { VirtualScroll };
