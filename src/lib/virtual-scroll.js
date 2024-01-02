import { Library } from "./library.js";

/**
 * A utility class extending Library for implementing virtual scrolling functionality.
 * @extends Library
 * @author Ridho Prasetya
 */
class VirtualScroll extends Library {
    /**
     * Creates an instance of VirtualScroll.
     * @constructor
     * @param {HTMLElement} [root=null] - The root element for the virtual scroll.
     * @param {Object} [options={}] - Options for configuring the virtual scrolling.
     * @param {HTMLElement} options.viewport - The viewport element.
     * @param {number} [options.total] - Total number of items.
     * @param {HTMLElement} [options.content] - The content element.
     * @param {HTMLElement} [options.scrollbar] - The scrollbar element.
     * @param {HTMLElement} [options.container] - The container element.
     * @param {number} [options.threshold=2] - The threshold value for optimization.
     * @fires root#onScroll
     */
    constructor(root = null, options = {}) {
        super(root, options);
    }

    /**
     * Initializes the virtual scrolling by attaching scroll event listener.
     * @override
     */
    init() {
        this.handleScroll = this.handleScroll.bind(this);

        this.on("scroll", this.handleScroll);
    }

    /**
     * Destroys the virtual scrolling by removing scroll event listener.
     * @override
     */
    destroy() {
        this.off("scroll", this.handleScroll);
    }

    /**
     * Handles the scroll event and performs virtual scrolling calculations.
     * @private
     * @param {Event} event - The scroll event object.
     */
    handleScroll(event) {
        const { total, content, threshold = 2, scrollbar, container } = this.options;
        const contentHeight = content?.clientHeight ?? 48;
        const scrollTop = this.root.scrollTop;
        const viewportHeight = this.root.clientHeight;

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
