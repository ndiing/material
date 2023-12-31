/**
 * A virtual scroll utility class that manages scrolling behavior.
 * @author Ridho Prasetya
 */
class VirtualScroll {
    /**
     * Creates an instance of VirtualScroll.
     * @param {Object} options - The options for the VirtualScroll.
     * @param {number} [options.total] - The total number of items.
     * @param {number} [options.contentHeight=48] - The height of each content item.
     * @param {HTMLElement} options.viewport - The viewport element.
     * @param {number} [options.threshold=2] - The threshold for preloading content.
     * @fires viewport#onScroll
     */
    constructor(options = {}) {
        this.options = options;

        this.on('scroll', this.handleScroll.bind(this));
        this.handleScroll();
    }

    /**
     * Handles the scroll event and emits 'onScroll' with relevant details.
     * @private
     * @param {Event} [event] - The scroll event.
     */
    handleScroll(event) {
        const total = this.options.total;
        const contentHeight = this.options.contentHeight ?? 48;
        const scrollTop = this.options.viewport.scrollTop;
        const threshold = this.options.threshold ?? 2;
        const viewportHeight = this.options.viewport.clientHeight;

        const containerHeight = total * contentHeight;

        let start = Math.floor(scrollTop / contentHeight) - threshold;
        start = Math.max(0, start);

        let limit = Math.ceil(viewportHeight / contentHeight) + 2 * threshold;
        limit = Math.min(total - start, limit);

        const translateY = start * contentHeight;

        this.emit('onScroll', {
            containerHeight,
            start,
            limit,
            translateY,
        });
    }

    /**
     * Registers an event listener for a given type.
     * @private
     * @param {string} type - The event type.
     * @param {EventListener} listener - The event listener function.
     */
    on(type, listener) {
        this.options.viewport.addEventListener(type, listener);
    }

    /**
     * Emits a custom event with the given type and detail.
     * @private
     * @param {string} type - The event type to dispatch.
     * @param {any} detail - The event details to include.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.options.viewport.dispatchEvent(event);
    }
}

export { VirtualScroll };
