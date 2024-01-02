import { Library } from "./library";

/**
 * Class representing a virtual scroll.
 * @extends Library
 * @author Ridho Prasetya
 */
class VirtualScroll extends Library {
    /**
     * Initializes the virtual scroll.
     */
    init() {
        this.handleScroll = this.handleScroll.bind(this);
        this.on("scroll", this.handleScroll);
    }

    /**
     * Destroys the virtual scroll.
     */
    destroy() {
        this.off("scroll", this.handleScroll);
    }

    /**
     * Handles the scroll event.
     * @param {Event} event - The scroll event.
     * @fires root#onScroll
     */
    handleScroll(event) {
        const total = this.options.total; // Total number of items
        const contentHeight = this.options.contentHeight; // Height of each item
        const scrollTop = this.root.scrollTop; // Scroll position
        const threshold = this.options.threshold; // Threshold value
        const viewportHeight = this.root.clientHeight; // Height of the viewport

        const scrollbarHeight = total * contentHeight;

        let start = Math.floor(scrollTop / contentHeight) - threshold;
        start = Math.max(0, start);

        let limit = Math.ceil(viewportHeight / contentHeight) + 2 * threshold;
        limit = Math.min(total - start, limit);

        const translateY = start * contentHeight;

        /**
         * Scroll event data.
         * @typedef {Object} ScrollEventData
         * @property {number} scrollbarHeight - Height of the scrollbar.
         * @property {number} start - Starting index of the visible items.
         * @property {number} limit - Number of items visible in the viewport.
         * @property {number} translateY - Translation value based on scroll.
         */

        this.emit(
            "onScroll",
            /** @type {ScrollEventData} */ ({
                scrollbarHeight,
                start,
                limit,
                translateY,
            })
        );
    }
}

export { VirtualScroll };
