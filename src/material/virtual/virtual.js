/**
 * MDVirtualController manages virtual scrolling and emits events related to scroll changes.
 * @fires MDVirtualController#onVirtualScrollChange - Triggered when the virtual scroll range changes.
 * @fires MDVirtualController#onVirtualScroll - Triggered on every virtual scroll event.
 */
class MDVirtualController {
    /**
     * Creates an instance of MDVirtualController.
     * @param {HTMLElement} host - The host element to which the controller is attached.
     * @param {Object} options - Options for configuring the virtual controller.
     * @param {string} [options.viewportSelector=".md-virtual"] - Selector for the viewport element.
     * @param {string} [options.scrollbarSelector=".md-virtual__scrollbar"] - Selector for the scrollbar element.
     * @param {string} [options.containerSelector=".md-virtual__container"] - Selector for the container element.
     * @param {string|null} [options.rowSelector=null] - Selector for identifying rows within the container.
     * @param {string|null} [options.columnSelector=null] - Selector for identifying columns within the container.
     * @param {number} [options.rowTotal=0] - Total number of rows.
     * @param {number} [options.rowHeight=0] - Height of each row.
     * @param {number} [options.buffer=0] - Buffer size for rows.
     * @param {number} [options.rowBuffer=0] - Buffer size specifically for rows.
     * @param {number} [options.columnTotal=0] - Total number of columns.
     * @param {number} [options.columnWidth=0] - Width of each column.
     * @param {number} [options.columnBuffer=0] - Buffer size for columns.
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            viewportSelector: ".md-virtual",
            scrollbarSelector: ".md-virtual__scrollbar",
            containerSelector: ".md-virtual__container",
            rowSelector: null,
            columnSelector: null,

            rowTotal: 0,
            rowHeight: 0,
            buffer: 0,
            rowBuffer: 0,

            columnTotal: 0,
            columnWidth: 0,
            columnBuffer: 0,

            ...options,
        };
        this.cache = null;
    }

    /**
     * Emits a custom event.
     * @param {string} type - The type of event to emit.
     * @param {any} detail - Details to include with the event.
     * @private
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        if (this.viewport) {
            this.viewport.dispatchEvent(event);
        }
    }

    /**
     * Handles the virtual scroll event.
     * @param {Event} [event] - The scroll event object.
     * @private
     */
    async handleVirtualScroll(event) {
        window.requestAnimationFrame(() => {
            if (this.options.rowTotal) {
                let rowHeight;
                rowHeight = rowHeight || this.options.rowHeight;
                this.scrollbarHeight = this.options.rowTotal * rowHeight;
                this.rowStart = Math.floor(this.viewport.scrollTop / rowHeight) - (this.options.rowBuffer || this.options.buffer);
                this.rowStart = Math.max(0, this.rowStart);
                this.rowLimit = Math.ceil(this.viewport.clientHeight / rowHeight) + 2 * (this.options.rowBuffer || this.options.buffer);
                this.rowLimit = Math.min(this.options.rowTotal - this.rowStart, this.rowLimit);
                this.rowEnd = this.rowStart + this.rowLimit;
                this.translateY = this.rowStart * rowHeight;
            }

            if (this.options.columnTotal) {
                let columnWidth;
                columnWidth = columnWidth || this.options.columnWidth;
                this.scrollbarWidth = this.options.columnTotal * columnWidth;
                this.columnStart = Math.floor(this.viewport.scrollLeft / columnWidth) - this.options.columnBuffer;
                this.columnStart = Math.max(0, this.columnStart);
                this.columnLimit = Math.ceil(this.viewport.clientWidth / columnWidth) + 2 * this.options.columnBuffer;
                this.columnLimit = Math.min(this.options.columnTotal - this.columnStart, this.columnLimit);
                this.columnEnd = this.columnStart + this.columnLimit;
                this.translateX = this.columnStart * columnWidth;
            }

            this.emit("onVirtualScroll", event);

            let cache = JSON.stringify([this.rowStart, this.rowEnd, this.columnStart, this.columnEnd]);

            if (this.cache !== cache) {
                this.cache = cache;
                this.emit("onVirtualScrollChange", event);
            }
            

            if (!this.initialized) {
                this.initialized = true;
                this.emit("onVirtualScrollInitialized", event);
            }
            

        });
    }

    /**
     * Initializes the controller when the host element is connected.
     * @private
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.viewport = this.options.viewportSelector ? this.host.querySelector(this.options.viewportSelector) : this.host;

        this.scrollbar = this.options.scrollbarSelector && this.host.querySelector(this.options.scrollbarSelector);

        this.container = this.options.containerSelector && this.host.querySelector(this.options.containerSelector);

        if (this.viewport) {
            this.handleVirtualScroll = this.handleVirtualScroll.bind(this);
            this.viewport.addEventListener("scroll", this.handleVirtualScroll);
            this.handleVirtualScroll();
        }
    }

    /**
     * Cleans up resources when the host element is disconnected.
     * @private
     */
    async hostDisconnected() {
        await this.host.updateComplete;
        if (this.viewport) {
            this.viewport.removeEventListener("scroll", this.handleVirtualScroll);
        }
    }
}

export { MDVirtualController };
