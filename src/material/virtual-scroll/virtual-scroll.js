/**
 * VirtualScroll class responsible for managing virtual scrolling of a list.
 */
class VirtualScroll {
    /**
     * @typedef {Object} VirtualScrollOptions
     * @param {number} [total] - The total number of items in the list.
     * @param {number} [rowHeight=56] - The height of each row/item in pixels.
     * @param {number} [nodePadding=2] - The number of nodes to pad above and below the visible area.
     * @param {number} [viewportHeight] - The height of the viewport in pixels.
     * @param {string} [track=".md-virtual-scroll__track"] - The selector for the track element.
     * @param {string} [item=".md-virtual-scroll__item"] - The selector for the item elements.
     */
    /**
     * Creates an instance of the VirtualScroll class.
     * @param {HTMLElement} host - The host element containing the virtual scrollable list.
     * @param {VirtualScrollOptions} [options] - Additional options for the virtual scroll.
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
     * Loads the specified options into the virtual scroll instance.
     * @param {Object} [options={}] - The options to load.
     */
    load(options = {}) {
        for (const name in options) {
            const value = options[name];
            this.options[name] = value;
        }
        this.handleScroll();
    }

    // /**
    //  * Handles the scroll event, updating the visible items in the virtual scroll.
    //  * @param {Event} [event] - The scroll event.
    //  */
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
        /**
         * @event onVirtualScroll
         * @property {number} start - The start index of the visible items.
         * @property {number} end - The end index of the visible items.
         */
        this.emit("onVirtualScroll", {
            start,
            end,
        });
    }

    // /**
    //  * Emits a custom event from the host element.
    //  * @param {string} type - The type of event to emit.
    //  * @param {Object} [detail] - The event detail.
    //  */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     * Initializes the virtual scroll functionality by adding event listeners and setting initial styles.
     */
    init() {
        this.host.classList.add("md-virtual-scroll");
        this.track = this.host.querySelector(this.options.track);
        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    }

    /**
     * Destroys the virtual scroll functionality by removing event listeners and resetting styles.
     */
    destroy() {
        this.host.classList.remove("md-virtual-scroll");
        this.host.removeEventListener("scroll", this.handleScroll);
        this.track = null;
        this.handleScroll = null;
    }
}
export { VirtualScroll };
