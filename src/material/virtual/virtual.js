/**
 * Controller for managing virtual scrolling functionality.
 * @fires MDVirtualController#onVirtualScroll - Emitted during virtual scrolling.
 */
class MDVirtualController {
    /**
     * Creates an instance of MDVirtualController.
     * @param {HTMLElement} host - The host element to which the controller is attached.
     * @param {Object} options - Configuration options for the virtual controller.
     * @property {string} [options.viewport=".md-virtual"] - Selector for the viewport element.
     * @property {string} [options.scrollbar=".md-virtual__scrollbar"] - Selector for the scrollbar element.
     * @property {string} [options.container=".md-virtual__container"] - Selector for the container element.
     * @property {number} [options.rowTotal=0] - Total number of rows.
     * @property {number} [options.rowHeight=0] - Height of each row.
     * @property {number} [options.rowBuffer=0] - Number of buffer rows.
     * @property {number} [options.columnTotal=0] - Total number of columns.
     * @property {number} [options.columnWidth=0] - Width of each column.
     * @property {number} [options.columnBuffer=0] - Number of buffer columns.
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            viewport: ".md-virtual",
            scrollbar: ".md-virtual__scrollbar",
            container: ".md-virtual__container",
            rowTotal: 0,
            rowHeight: 0,
            rowBuffer: 0,
            columnTotal: 0,
            columnWidth: 0,
            columnBuffer: 0,
            ...options,
        };
    }

    /**
     * Emits a custom event.
     * @private
     * @param {string} type - The type of event.
     * @param {Object} detail - The detail of the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.viewport.dispatchEvent(event);
    }

    /**
     * Handles the connection of the host element.
     * @private
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.viewport = this.host;
        if (typeof this.options.viewport === "string") {
            this.viewport = this.host.querySelector(this.options.viewport);
        } else {
            this.viewport = this.options.viewport;
        }

        if (typeof this.options.scrollbar === "string") {
            this.scrollbar = this.host.querySelector(this.options.scrollbar);
        } else {
            this.scrollbar = this.options.scrollbar;
        }

        if (typeof this.options.container === "string") {
            this.container = this.host.querySelector(this.options.container);
        } else {
            this.container = this.options.container;
        }

        this.handleVirtualScroll = this.handleVirtualScroll.bind(this);
        this.viewport.addEventListener("scroll", this.handleVirtualScroll);
        this.handleVirtualScroll();
    }

    /**
     * Handles the disconnection of the host element.
     * @private
     */
    async hostDisconnected() {
        await this.host.updateComplete;

        this.viewport.removeEventListener("scroll", this.handleVirtualScroll);
    }

    /**
     * Handles the virtual scrolling logic.
     * @private
     * @param {Event} event - The scroll event.
     */
    async handleVirtualScroll(event) {
        if (this.options.rowTotal) {
            this.scrollbarHeight = this.options.rowTotal * this.options.rowHeight;
            this.rowStart = Math.floor(this.viewport.scrollTop / this.options.rowHeight) - this.options.rowBuffer;
            this.rowStart = Math.max(0, this.rowStart);
            this.rowLimit = Math.ceil(this.viewport.clientHeight / this.options.rowHeight) + 2 * this.options.rowBuffer;
            this.rowLimit = Math.min(this.options.rowTotal - this.rowStart, this.rowLimit);
            this.rowEnd = this.rowStart + this.rowLimit;
            this.translateY = this.rowStart * this.options.rowHeight;
        }

        if (this.options.columnTotal) {
            this.scrollbarWidth = this.options.columnTotal * this.options.columnWidth;
            this.columnStart = Math.floor(this.viewport.scrollLeft / this.options.columnWidth) - this.options.columnBuffer;
            this.columnStart = Math.max(0, this.columnStart);
            this.columnLimit = Math.ceil(this.viewport.clientWidth / this.options.columnWidth) + 2 * this.options.columnBuffer;
            this.columnLimit = Math.min(this.options.columnTotal - this.columnStart, this.columnLimit);
            this.columnEnd = this.columnStart + this.columnLimit;
            this.translateX = this.columnStart * this.options.columnWidth;

            // console.log(this)
        }

        this.scrollbar.style.width = `${this.scrollbarWidth || 1}px`;
        this.scrollbar.style.height = `${this.scrollbarHeight || 1}px`;
        this.container.style.transform = `translate3d(${this.translateX || 0}px,${this.translateY || 0}px,0)`;
        this.emit("onVirtualScroll", event);
    }
}

export { MDVirtualController };
