import { MdLibrary } from "../library/library.js";

/**
 * Class representing a virtual scroll functionality that extends a MdLibrary.
 * @extends MdLibrary
 * @author Ridho Prasetya
 */
class MdVirtualScroll extends MdLibrary {
    /**
     * Initializes the virtual scroll by attaching the scroll event handler.
     */
    init() {
        /**
         * Event handler for scroll events.
         * @type {EventListener}
         * @private
         */
        this.handleScroll = this.handleScroll.bind(this);
        this.on("scroll", this.handleScroll);
    }

    /**
     * Destroys the virtual scroll by removing the scroll event handler.
     */
    destroy() {
        this.off("scroll", this.handleScroll);
    }

    /**
     * Handles the scroll event and emits 'onScroll' event with relevant scroll data.
     * @param {Event} event - The scroll event.
     * @fires MdVirtualScroll#onScroll
     */
    handleScroll(event) {
        // Retrieve necessary parameters
        const { total, contentHeight, threshold } = this.options;
        const { scrollTop, clientHeight } = this.root;

        // Calculate scrollbar height
        const scrollbarHeight = total * contentHeight;

        // Calculate start and limit for visible items
        let start = Math.max(0, Math.floor(scrollTop / contentHeight) - threshold);
        let limit = Math.min(total - start, Math.ceil(clientHeight / contentHeight) + 2 * threshold);

        // Calculate translateY for the scroll
        const translateY = start * contentHeight;

        /**
         * Data emitted on the 'onScroll' event.
         * @typedef {Object} ScrollEventData
         * @property {number} scrollbarHeight - Height of the scrollbar.
         * @property {number} start - Starting index of the visible items.
         * @property {number} limit - Number of items visible in the viewport.
         * @property {number} translateY - Translation value based on scroll.
         */

        // Emit 'onScroll' event with scroll data
        this.emit(
            "onScroll",
            /** @type {ScrollEventData} */
            ({
                scrollbarHeight,
                start,
                limit,
                translateY,
            })
        );
    }
}

export { MdVirtualScroll };
