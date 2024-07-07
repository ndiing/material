/**
 * Manages virtual scrolling for a host element.
 * @fires MDVirtualController#onVirtualScrollChange - Fired when the virtual scroll position changes.
 * @fires MDVirtualController#onVirtualScroll - Fired during virtual scrolling.
 */
class MDVirtualController {
    /**
     * Initializes the virtual scrolling controller.
     * @param {*} host - The host element that this controller is associated with.
     * @param {*} options - Configuration options for virtual scrolling.
     * @property {String} options.viewportSelector - CSS selector for the viewport element.
     * @property {String} options.scrollbarSelector - CSS selector for the scrollbar element.
     * @property {String} options.containerSelector - CSS selector for the container element.
     * @property {Number} options.rowTotal - Total number of rows.
     * @property {Number} options.rowHeight - Height of each row.
     * @property {Number} options.buffer - Buffer size for pre-rendering rows.
     * @property {Number} options.columnTotal - Total number of columns.
     * @property {Number} options.columnWidth - Width of each column.
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            viewportSelector: '.md-virtual',
            scrollbarSelector: '.md-virtual__scrollbar',
            containerSelector: '.md-virtual__container',
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

    async hostDisconnected() {
        await this.host.updateComplete;
        if (this.viewport) {
            this.viewport.removeEventListener("scroll", this.handleVirtualScroll);
        }
    }

    handleVirtualScroll(event) {
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

            let cache = JSON.stringify([this.rowStart, this.rowEnd, this.columnStart, this.columnEnd]);

            if (this.cache !== cache) {
                this.cache = cache;
                this.emit("onVirtualScrollChange", event);
            }

            this.emit("onVirtualScroll", event);
        });
    }
}

export { MDVirtualController };
