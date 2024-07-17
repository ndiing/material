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
     * Gets the viewport element.
     * @returns {HTMLElement} The viewport element.
     */
    get viewport() {
        return this._viewport;
    }

    /**
     * Sets the viewport element.
     * @param {HTMLElement|string} value - The viewport element or its selector.
     */
    set viewport(value) {
        if (this._viewport !== value) {
            if (value) {
                if (typeof value === "string") {
                    this._viewport = this.host.querySelector(value);
                } else {
                    this._viewport = value;
                }
            } else {
                this._viewport = this.host;
            }
        }
    }

    /**
     * Gets the scrollbar element.
     * @returns {HTMLElement} The scrollbar element.
     */
    get scrollbar() {
        return this._scrollbar;
    }

    /**
     * Sets the scrollbar element.
     * @param {HTMLElement|string} value - The scrollbar element or its selector.
     */
    set scrollbar(value) {
        if (this._scrollbar !== value) {
            if (value) {
                if (typeof value === "string") {
                    this._scrollbar = this.host.querySelector(value);
                } else {
                    this._scrollbar = value;
                }
            }
        }
    }

    /**
     * Gets the container element.
     * @returns {HTMLElement} The container element.
     */
    get container() {
        return this._container;
    }

    /**
     * Sets the container element.
     * @param {HTMLElement|string} value - The container element or its selector.
     */
    set container(value) {
        if (this._container !== value) {
            if (value) {
                if (typeof value === "string") {
                    this._container = this.host.querySelector(value);
                } else {
                    this._container = value;
                }
            }
        }
    }

    /**
     * Gets the total number of rows.
     * @returns {number} The total number of rows.
     */
    get rowTotal() {
        return this._rowTotal;
    }

    /**
     * Sets the total number of rows.
     * @param {number} value - The total number of rows.
     */
    set rowTotal(value) {
        if (this._rowTotal !== value) {
            this._rowTotal = value;
        }
    }

    /**
     * Gets the height of each row.
     * @returns {number} The height of each row.
     */
    get rowHeight() {
        return this._rowHeight;
    }

    /**
     * Sets the height of each row.
     * @param {number} value - The height of each row.
     */
    set rowHeight(value) {
        if (this._rowHeight !== value) {
            this._rowHeight = value;
        }
    }

    /**
     * Gets the number of buffer rows.
     * @returns {number} The number of buffer rows.
     */
    get rowBuffer() {
        return this._rowBuffer;
    }

    /**
     * Sets the number of buffer rows.
     * @param {number} value - The number of buffer rows.
     */
    set rowBuffer(value) {
        if (this._rowBuffer !== value) {
            this._rowBuffer = value;
        }
    }

    /**
     * Gets the total number of columns.
     * @returns {number} The total number of columns.
     */
    get columnTotal() {
        return this._columnTotal;
    }

    /**
     * Sets the total number of columns.
     * @param {number} value - The total number of columns.
     */
    set columnTotal(value) {
        if (this._columnTotal !== value) {
            this._columnTotal = value;
        }
    }

    /**
     * Gets the width of each column.
     * @returns {number} The width of each column.
     */
    get columnWidth() {
        return this._columnWidth;
    }

    /**
     * Sets the width of each column.
     * @param {number} value - The width of each column.
     */
    set columnWidth(value) {
        if (this._columnWidth !== value) {
            this._columnWidth = value;
        }
    }

    /**
     * Gets the number of buffer columns.
     * @returns {number} The number of buffer columns.
     */
    get columnBuffer() {
        return this._columnBuffer;
    }

    /**
     * Sets the number of buffer columns.
     * @param {number} value - The number of buffer columns.
     */
    set columnBuffer(value) {
        if (this._columnBuffer !== value) {
            this._columnBuffer = value;
        }
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

        this.viewport = this.options.viewport;
        this.scrollbar = this.options.scrollbar;
        this.container = this.options.container;

        this.rowTotal = this.options.rowTotal;
        this.rowHeight = this.options.rowHeight;
        this.rowBuffer = this.options.rowBuffer;

        this.columnTotal = this.options.columnTotal;
        this.columnWidth = this.options.columnWidth;
        this.columnBuffer = this.options.columnBuffer;

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
        if (this.rowTotal) {
            this.scrollbarHeight = this.rowTotal * this.rowHeight;
            this.rowStart = Math.floor(this.viewport.scrollTop / this.rowHeight) - this.rowBuffer;
            this.rowStart = Math.max(0, this.rowStart);
            this.rowLimit = Math.ceil(this.viewport.clientHeight / this.rowHeight) + 2 * this.rowBuffer;
            this.rowLimit = Math.min(this.rowTotal - this.rowStart, this.rowLimit);
            this.rowEnd = this.rowStart + this.rowLimit;
            this.translateY = this.rowStart * this.rowHeight;
        }

        if (this.columnTotal) {
            this.scrollbarWidth = this.columnTotal * this.columnWidth;
            this.columnStart = Math.floor(this.viewport.scrollLeft / this.columnWidth) - this.columnBuffer;
            this.columnStart = Math.max(0, this.columnStart);
            this.columnLimit = Math.ceil(this.viewport.clientWidth / this.columnWidth) + 2 * this.columnBuffer;
            this.columnLimit = Math.min(this.columnTotal - this.columnStart, this.columnLimit);
            this.columnEnd = this.columnStart + this.columnLimit;
            this.translateX = this.columnStart * this.columnWidth;
        }

        this.scrollbar.style.width = `${this.scrollbarWidth || 1}px`;
        this.scrollbar.style.height = `${this.scrollbarHeight || 1}px`;
        this.container.style.transform = `translate3d(${this.translateX || 0}px,${this.translateY || 0}px,0)`;
        this.emit("onVirtualScroll", event);
    }
}

export { MDVirtualController };
