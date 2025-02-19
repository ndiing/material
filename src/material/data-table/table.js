import { Mixins } from "../component/component";
import { Gesture } from "../gesture/gesture";
import { Virtual } from "../virtual/virtual";

/**
 * @extends HTMLTableElement
 */
class MDTableComponent extends Mixins(HTMLTableElement) {
    static observedAttributes = ["now"];
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.instance.virtualize && this.virtual && name === "now") {
            this.virtual.load({ data: this.instance.dataStore });
        }
    }

    handleTableVirtualScroll(event) {
        this.instance.dataVirtual = event.detail.data;

        /**
         * @event handleTableVirtualScroll
         * @type {Object}
         * @property {Object} event
         */
        this.emit("handleTableVirtualScroll", { event });
    }

    connectedCallback() {
        this.handleTableVirtualScroll = this.handleTableVirtualScroll.bind(this);
        this.addEventListener("onVirtualScroll", this.handleTableVirtualScroll);
        this.classList.add("md-data-table__native");

        if (this.instance.virtualize) {
            this.virtual = new Virtual(this, {
                item: "tbody",
            });
            this.virtual.load({ data: this.instance.dataStore });
        }
    }

    disconnectedCallback() {
        if (this.instance.virtualize) {
            this.virtual.destroy();
        }
    }
}

customElements.define("md-table", MDTableComponent, { extends: "table" });

/**
 * @extends HTMLTableCaptionElement
 */
class MDTableCaptionComponent extends Mixins(HTMLTableCaptionElement) {}

customElements.define("md-table-caption", MDTableCaptionComponent, { extends: "caption" });

/**
 * @extends HTMLTableSectionElement
 */
class MDTableSectionComponent extends Mixins(HTMLTableSectionElement) {}

/**
 * @extends MDTableSectionComponent
 */
class MDTableHeadComponent extends MDTableSectionComponent {}

customElements.define("md-table-head", MDTableHeadComponent, { extends: "thead" });

/**
 * @extends MDTableSectionComponent
 */
class MDTableBodyComponent extends MDTableSectionComponent {}

customElements.define("md-table-body", MDTableBodyComponent, { extends: "tbody" });

/**
 * @extends MDTableSectionComponent
 */
class MDTableFooterComponent extends MDTableSectionComponent {}

customElements.define("md-table-footer", MDTableFooterComponent, { extends: "tfoot" });

/**
 * @extends HTMLTableRowElement
 */
class MDTableRowComponent extends Mixins(HTMLTableRowElement) {}

customElements.define("md-table-row", MDTableRowComponent, { extends: "tr" });

/**
 * @extends HTMLTableCellElement
 */
class MDTableCellComponent extends Mixins(HTMLTableCellElement) {}

/**
 * @extends MDTableCellComponent
 */
class MDTableHeaderComponent extends MDTableCellComponent {
    handleTableHeaderResize(event) {
        this.data.width = this.gesture.currentWidth;
        this.style.setProperty("min-width", this.data.width + "px");

        /**
         * @event onTableHeaderResize
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onTableHeaderResize", { event });
    }

    handleTableHeaderDblclick(event) {
        const resizeHandleElement = event.target.closest(".md-resizable__handle");

        if (!resizeHandleElement) return;
        const rowIndex = this.parentElement.rowIndex + 1;
        const cellIndex = this.cellIndex + 1;

        const width = Array.from(this.instance.querySelectorAll(`tr:nth-child(${rowIndex}) td:nth-child(${cellIndex}) .md-data-table__label`)).reduce((prev, curr) => Math.max(prev, curr.scrollWidth), 0) + 16 + 16;
        this.data.width = width;
        this.style.setProperty("min-width", this.data.width + "px");

        /**
         * @event onTableHeaderDblclick
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onTableHeaderDblclick", { event });
    }

    connectedCallback() {
        if (this.data.resizable) {
            this.handleTableHeaderResize = this.handleTableHeaderResize.bind(this);
            this.addEventListener("onResize", this.handleTableHeaderResize);
            this.handleTableHeaderDblclick = this.handleTableHeaderDblclick.bind(this);
            this.addEventListener("dblclick", this.handleTableHeaderDblclick);

            this.gesture = new Gesture(this, {
                resizeHandles: ["e"],
                dragAxis: [],
                updateStyle: false,
            });
        }
    }

    disconnectedCallback() {
        if (this.data.resizable) {
            this.gesture.destroy();
        }
    }
}

customElements.define("md-table-header", MDTableHeaderComponent, { extends: "th" });

/**
 * @extends MDTableCellComponent
 */
class MDTableDataComponent extends MDTableCellComponent {}

customElements.define("md-table-data", MDTableDataComponent, { extends: "td" });

export { MDTableComponent, MDTableCaptionComponent, MDTableSectionComponent, MDTableHeadComponent, MDTableBodyComponent, MDTableFooterComponent, MDTableRowComponent, MDTableCellComponent, MDTableHeaderComponent, MDTableDataComponent };
