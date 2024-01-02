/**
 * A utility class for implementing virtual scrolling functionality.
 * @author Ridho Prasetya
 */
class VirtualScroll {
    /**
     * Creates an instance of VirtualScroll.
     * @param {Object} [options={}] - Options for configuring the virtual scrolling.
     * @param {HTMLElement} options.viewport - The viewport element.
     * @param {number} [options.total] - Total number of items.
     * @param {HTMLElement} [options.content] - The content element.
     * @param {HTMLElement} [options.scrollbar] - The scrollbar element.
     * @param {HTMLElement} [options.container] - The container element.
     * @param {number} [options.threshold=2] - The threshold value for optimization.
     * @fires options.viewport#onScroll
     */
    constructor(options = {}) {
        this.options = options;

        this.handleScroll = this.handleScroll.bind(this);
        this.requestUpdate = this.handleScroll.bind(this);

        this.init();
    }

    /**
     * Initializes the virtual scrolling by attaching scroll event listener.
     */
    init() {
        this.on("scroll", this.handleScroll);
    }

    /**
     * Destroys the virtual scrolling by removing scroll event listener.
     */
    destroy() {
        this.off("scroll", this.handleScroll);
    }

    /**
     * Adds an event listener to the specified type on the viewport element.
     * @private
     * @param {string} type - The type of event.
     * @param {Function} listener - The event listener function.
     */
    on(type, listener) {
        this.options.viewport.addEventListener(type, listener);
    }

    /**
     * Removes an event listener from the specified type on the viewport element.
     * @private
     * @param {string} type - The type of event.
     * @param {Function} listener - The event listener function.
     */
    off(type, listener) {
        this.options.viewport.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event on the viewport element.
     * @private
     * @param {string} type - The type of event.
     * @param {Object} detail - Details to be included in the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.options.viewport.dispatchEvent(event);
    }

    /**
     * Handles the scroll event and performs virtual scrolling calculations.
     * @private
     * @param {Event} event - The scroll event object.
     */
    handleScroll(event) {
        const { total, content, viewport, threshold = 2, scrollbar, container } = this.options;
        const contentHeight = content?.clientHeight ?? 48;
        const scrollTop = viewport.scrollTop;
        const viewportHeight = viewport.clientHeight;

        const scrollbarHeight = total * contentHeight;

        let start = Math.floor(scrollTop / contentHeight) - threshold;
        start = Math.max(0, start);

        let limit = Math.ceil(viewportHeight / contentHeight) + 2 * threshold;
        limit = Math.min(total - start, limit);

        const translateY = start * contentHeight;

        scrollbar.style.height = scrollbarHeight + "px";
        container.style.transform = "translateY(" + translateY + "px)";

        this.emit("onScroll", {
            scrollbarHeight,
            start,
            limit,
            translateY,
        });
    }
}

export { VirtualScroll };
