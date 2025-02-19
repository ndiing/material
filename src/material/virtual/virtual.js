/**
 * Virtual class responsible for managing virtual scrolling of a list.
 */
class Virtual {
    /**
     * @typedef {Object} VirtualOptions
     * @property {string} [track=".md-virtual__track"] - The selector for the track element.
     * @property {string} [item=".md-virtual__item"] - The selector for the item elements.
     * @property {number} [rowHeight=56] - The height of each row/item in pixels.
     * @property {number} [nodePadding=2] - The number of nodes to pad above and below the visible area.
     * @property {Array} [data=[]] - The initial data for the list.
     */

    /**
     * Creates an instance of the Virtual class.
     * @param {HTMLElement} host - The host element containing the virtual scrollable list.
     * @param {VirtualOptions} [options] - Additional options for the virtual scroll.
     */
    constructor(host, options) {
        this.host = host;
        this.options = {
            item: ".md-virtual__item",
            rowHeight: 56,
            nodePadding: 2,
            data: [],
            ...options,
        };

        this.init();
    }

    // /**
    //  * Debounces the handling of virtual scroll events.
    //  */
    handleVirtualScrollDebounce() {
        const { rowHeight, total } = this.updateTrackHeight();
        const { start, end } = this.updateItemsPosition(rowHeight, total);
        const data = this.options.data.slice(start, end);
        const cache = [rowHeight, total, start, end, data, this.now].toString();

        if (this.cache !== cache) {
            this.cache = cache;

            if (document.activeElement !== document.body) {
                document.activeElement.blur();
            }

            /**
             * @event onVirtualScroll
             * @type {Object}
             * @property {number} rowHeight - The height of each row/item in pixels.
             * @property {number} total - The total number of items in the list.
             * @property {number} start - The start index of the visible items.
             * @property {number} end - The end index of the visible items.
             * @property {Array} data - The data for the visible items.
             */
            this.emit("onVirtualScroll", { rowHeight, total, start, end, data });
        }
    }

    // /**
    //  * Updates the position of the items based on the scroll position.
    //  * @param {number} rowHeight - The height of each row/item in pixels.
    //  * @param {number} total - The total number of items in the list.
    //  * @returns {Object} An object containing the start and end indices of the visible items.
    //  */
    updateItemsPosition(rowHeight, total) {
        const scrollTop = this.host.scrollTop;
        const nodePadding = this.options.nodePadding;
        const viewportHeight = this.host.clientHeight;
        const start = Math.max(0, Math.floor(scrollTop / rowHeight) - nodePadding);
        const limit = Math.min(total - start, Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding);
        const end = start + limit;
        const translateY = start * rowHeight;
        this.items = this.host.querySelectorAll(this.options.item);

        this.items.forEach((item) => {
            item.style.setProperty("transform", "translate3d(0," + translateY + "px,0)");
            // if(this.options.rowHeight!==item.clientHeight){
            //     this.options.rowHeight=item.clientHeight
            // }
        });
        return { start, end };
    }

    // /**
    //  * Updates the height of the track element.
    //  * @returns {Object} An object containing the rowHeight and total number of items.
    //  */
    updateTrackHeight() {
        const total = this.options.data.length;
        const rowHeight = this.options.rowHeight;
        const trackHeight = total * rowHeight;
        this.track.style.setProperty("height", trackHeight + "px");
        return { rowHeight, total };
    }

    // /**
    //  * Handles the virtual scroll event.
    //  */
    handleVirtualScroll() {
        window.requestAnimationFrame(this.handleVirtualScrollDebounce);
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
     * Loads the specified options into the virtual scroll instance.
     * @param {VirtualOptions} [options={}] - The options to load.
     */
    load(options = {}) {
        for (const name in options) {
            const value = options[name];

            if (value === undefined || this.options[name] === value) continue;
            this.options[name] = value;
        }
        this.now = performance.now();
        this.handleVirtualScroll();
    }

    /**
     * Initializes the virtual scroll functionality by adding event listeners and setting initial styles.
     */
    init() {
        this.host.classList.add("md-virtual");
        this.track = document.createElement("div");
        this.track.classList.add("md-virtual__track");
        this.host.prepend(this.track);
        this.handleVirtualScroll = this.handleVirtualScroll.bind(this);
        this.handleVirtualScrollDebounce = this.handleVirtualScrollDebounce.bind(this);
        this.host.addEventListener("scroll", this.handleVirtualScroll);
    }

    /**
     * Destroys the virtual scroll functionality by removing event listeners and resetting styles.
     */
    destroy() {
        this.host.classList.remove("md-virtual");
        this.track.remove();
        this.host.removeEventListener("scroll", this.handleVirtualScroll);
    }
}

export { Virtual };
