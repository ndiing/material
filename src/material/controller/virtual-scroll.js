class VirtualScrollController {
    constructor(host, options = {}) {
        this.host = host;

        this.setOptions(options);

        if (this.register) {
            (this.host = host).addController(this);
        }

        this._handleScroll = this._handleScroll.bind(this);
        this._handleResizeObserver = this._handleResizeObserver.bind(this);
    }

    setOptions(options) {
        this.viewport = options.viewport ?? this.viewport ?? this.host;
        this.itemCount = options.itemCount ?? this.itemCount ?? 0;
        this.rowHeight = options.rowHeight ?? this.rowHeight ?? 56;
        this.nodePadding = options.nodePadding ?? this.nodePadding ?? 2;
        this.onUpdate = options.onUpdate ?? this.onUpdate ?? (() => {});
        this.register = options.register ?? this.register ?? true;
    }

    _update() {
        this.startNode = Math.max(0, Math.floor(this.viewport.scrollTop / this.rowHeight) - this.nodePadding);

        this.visibleNodesCount = Math.min(this.itemCount - this.startNode, Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.nodePadding);

        this.endNode = this.startNode + this.visibleNodesCount;

        this.offsetY = this.startNode * this.rowHeight;
        this.viewport.style.setProperty("--md-comp-virtual-scroll-content-translate-y", `${this.offsetY}px`);

        this.onUpdate({ controller: this });
    }

    _updateViewportHeight() {
        this.viewportHeight = this.viewport.clientHeight;
    }

    _updateTotalContentHeight() {
        this.totalContentHeight = this.itemCount * this.rowHeight;
        this.viewport.style.setProperty("--md-comp-virtual-scroll-total-content-height", `${this.totalContentHeight}px`);
    }

    _saveScrollPosition() {
        this.scrollTop = this.viewport.scrollTop;
    }

    _restoreScrollPosition() {
        if (this.scrollTop) {
            this.viewport.scrollTo({ top: this.scrollTop });
        }
    }

    _handleScroll() {
        this._saveScrollPosition();

        window.requestAnimationFrame(() => {
            this._update();
        });
    }

    _handleResizeObserver(entries) {
        window.requestAnimationFrame(() => {
            this._updateViewportHeight();
            this._update();
        });
    }

    /**
     *
     * @param {*} index
     * @param {*} options
     * @param {*} options.behavior auto | smooth
     * @param {*} options.align auto | center | start | end
     * @returns
     */
    scrollTo(index, options = {}) {
        const { behavior = "auto", align = "auto", offset = 0 } = options;

        const viewportHeight = this.viewportHeight || this.viewport.clientHeight;
        if (!viewportHeight) return;

        const rowTop = this.rowHeight * index;
        const rowBottom = rowTop + this.rowHeight;
        const viewportTop = this.viewport.scrollTop;
        const viewportBottom = viewportTop + viewportHeight;

        let top = null;

        if (align === "center") {
            top = rowTop - viewportHeight / 2;
        } else if (align === "start") {
            top = rowTop;
        } else if (align === "end") {
            top = rowBottom - viewportHeight;
        } else {
            if (rowTop <= viewportTop) {
                top = rowTop;
            } else if (rowBottom >= viewportBottom) {
                top = rowBottom - viewportHeight;
            }
        }

        if (top !== null) {
            top += offset;
            this.viewport.scrollTo({ top, behavior });
        }
    }

    async init() {
        await this.viewport.updateComplete;

        this.viewport.classList.add("md-virtual-scroll");

        this._updateViewportHeight();
        this._updateTotalContentHeight();
        this._restoreScrollPosition();

        this.viewport.addEventListener("scroll", this._handleScroll);

        this.resizeObserver = new ResizeObserver(this._handleResizeObserver);
        this.resizeObserver.observe(this.viewport);
    }

    async destroy() {
        await this.viewport.updateComplete;

        this.resizeObserver.disconnect();

        this.viewport.removeEventListener("scroll", this._handleScroll);

        this.viewport.style.removeProperty("--md-comp-virtual-scroll-total-content-height");

        this.viewport.classList.remove("md-virtual-scroll");
    }

    async reinit(options) {
        this.setOptions(options);
        await this.destroy();
        await this.init();
    }

    async hostConnected() {
        await this.init();
    }

    async hostDisconnected() {
        await this.destroy();
    }
}

export { VirtualScrollController };
