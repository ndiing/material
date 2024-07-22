
/**
 * {{desc}}
 * @fires MDVirtualController#onVirtualScroll - {{desc}}
 */
class MDVirtualController {
    
    /**
     * {{desc}}
     * @param {Any} host - {{desc}}
     * @param {Any} options - {{desc}}
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
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} detail - {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    async hostDisconnected() {
        await this.host.updateComplete;
        this.viewport.removeEventListener("scroll", this.handleVirtualScroll);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
        }
        this.scrollbar.style.width = `${this.scrollbarWidth || 1}px`;
        this.scrollbar.style.height = `${this.scrollbarHeight || 1}px`;
        this.container.style.transform = `translate3d(${this.translateX || 0}px,${this.translateY || 0}px,0)`;
        this.emit("onVirtualScroll", event);
    }
}
export { MDVirtualController };
