// VirtualScrollController

/**
 * @fires VirtualScroll#onVirtualScroll - {"detail":{"containerHeight":{},"start":{},"end":{},"translateY":{},"":{}}}
 */
class VirtualScroll {
    /**
     * @param {String} [host]
     * @param {String} [options]
     */
    constructor(host, options) {
        this.host = host;
        // (this.host=host).addController(this)
        this.options = {
            total: undefined,
            rowHeight: 56,
            nodePadding: 2,
            viewportHeight: undefined,
            ...options,
        };
        this.init();
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleScroll(event) {
        const total = this.options.total;
        const rowHeight = this.options.rowHeight;
        const scrollTop = this.host.scrollTop;
        const nodePadding = this.options.nodePadding;
        const viewportHeight = this.options.viewportHeight ?? this.host.clientHeight;
        const containerHeight = total * rowHeight;
        let start = Math.floor(scrollTop / rowHeight) - nodePadding;
        start = Math.max(0, start);
        let end = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
        end = Math.min(total - start, end);
        const translateY = start * rowHeight;
        this.track.style.setProperty("height", containerHeight + "px");
        this.host.querySelectorAll(".md-virtual-scroll__item").forEach((item) => {
            item.style.setProperty("transform", "translate3d(0," + translateY + "px,0)");
        });
        this.emit("onVirtualScroll", {
            containerHeight,
            start,
            end,
            translateY,
        });
    }

    /**
     * @param {String} [type]
     * @param {String} [detail]
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
        // console.log(this)
        this.host.classList.add("md-virtual-scroll");
        this.track = document.createElement("div");
        this.track.classList.add("md-virtual-scroll__track");
        this.host.append(this.track);
        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    }
    destroy() {}
    // hostConnected
    // hostDisconnected
}
export { VirtualScroll };
