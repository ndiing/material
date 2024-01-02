/**
 * Class representing a virtual scroll.
 * @author Ridho Prasetya
 */
class VirtualScroll {
    /**
     * Creates an instance of VirtualScroll.
     * @constructor
     * @param {HTMLElement} [root=null] - The root element to attach events to.
     * @param {Object} [options={}] - The options for the virtual scroll.
     */
    constructor(root = null, options = {}) {
        /**
         * The root element to attach events to.
         * @type {HTMLElement}
         */
        this.root = root;

        /**
         * Options for the virtual scroll.
         * @type {Object}
         */
        this.options = options;

        this.init();
    }

    /**
     * Attach an event listener to the root element.
     * @private
     * @param {string} type - The type of event to listen for.
     * @param {EventListener} listener - The callback function to execute when the event is triggered.
     */
    on(type, listener) {
        this.root.addEventListener(type, listener);
    }

    /**
     * Remove an event listener from the root element.
     * @private
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListener} listener - The callback function that was registered.
     */
    off(type, listener) {
        this.root.removeEventListener(type, listener);
    }

    /**
     * Emit a custom event on the root element.
     * @private
     * @param {string} type - The type of event to emit.
     * @param {*} detail - Additional information to pass along with the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.root.dispatchEvent(event);
    }

    /**
     * Initializes the virtual scroll by attaching the scroll event handler.
     */
    init() {
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
     * @fires VirtualScroll#onScroll
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
         * Scroll event data.
         * @typedef {Object} ScrollEventData
         * @property {number} scrollbarHeight - Height of the scrollbar.
         * @property {number} start - Starting index of the visible items.
         * @property {number} limit - Number of items visible in the viewport.
         * @property {number} translateY - Translation value based on scroll.
         */

        // Emit 'onScroll' event with scroll data
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
