import { MDCDK } from "./cdk";

/**
 * Represents a virtual scrolling functionality using Material Design components.
 * @extends MDCDK
 */
class MDVirtualScroll extends MDCDK {
    /**
     * @typedef {Object} ScrollDetail - Represents the details of the scroll event.
     * @property {number} scrollbarHeight - Total height of the scrollable content.
     * @property {number} start - Index of the first visible node in the viewport.
     * @property {number} limit - Number of visible nodes in the viewport.
     * @property {number} translateY - Offset of the first visible node from the top of the viewport.

     */

    /**
     * Creates an instance of MDVirtualScroll.
     * @param {HTMLElement} root - The root element to apply virtual scrolling.
     * @param {Object} [options={}] - Additional options for virtual scrolling.
     * @param {number} [options.total=0] - Total number of items.
     * @param {number} [options.contentHeight=48] - Height of each item.
     * @param {number} [options.threshold=2] - Threshold for preloading items.
     * @fires root#onScroll
     */
    constructor(root, options = {}) {
        super(root, options);
    }

    /**
     * Initializes the MDVirtualScroll instance.
     * Binds the scroll event handler and sets up required parameters.
     */
    init() {
        this.handleScroll = this.handleScroll.bind(this);
        this.on("scroll", this.handleScroll);
    }

    /**
     * Destroys the MDVirtualScroll instance.
     * Removes the scroll event listener.
     */
    destroy() {
        this.off("scroll", this.handleScroll);
    }

    /**
     * Handles the scroll event and calculates parameters for virtual scrolling.
     * Emits the "onScroll" event with calculated parameters.
     * @private
     * @fires MDVirtualScroll#onScroll
     */
    handleScroll() {
        const total = this.options.total || 0;
        const contentHeight = this.options.contentHeight || 48;
        const scrollTop = this.root.scrollTop;
        const threshold = this.options.threshold || 2;
        const viewportHeight = this.root.clientHeight;

        const scrollbarHeight = total * contentHeight;

        let start = Math.floor(scrollTop / contentHeight) - threshold;
        start = Math.max(0, start);

        let limit = Math.ceil(viewportHeight / contentHeight) + 2 * threshold;
        limit = Math.min(total - start, limit);

        const translateY = start * contentHeight;

        const detail = {
            scrollbarHeight,
            start,
            limit,
            translateY,
        };

        this.emit("onScroll", detail);
    }
}

export { MDVirtualScroll };
