import { Mixins } from "../component/component";
import { Gesture } from "../gesture/gesture";
import { Virtual } from "../virtual/virtual";

/**
 * @extends HTMLTableElement
 */
class MDDataTableNativeComponent extends Mixins(HTMLTableElement) {
    static observedAttributes = ["now"];
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.instance.virtualize && this.virtual && name === "now") {
            this.virtual.load({ data: this.instance.dataStore });
        }
    }

    handleDataTableNativeVirtualScroll(event) {
        this.instance.dataVirtual = event.detail.data;

        /**
         * @event handleDataTableNativeVirtualScroll
         * @type {Object}
         * @property {Object} event
         */
        this.emit("handleDataTableNativeVirtualScroll", { event });
    }

    connectedCallback() {
        this.handleDataTableNativeVirtualScroll = this.handleDataTableNativeVirtualScroll.bind(this);
        this.addEventListener("onVirtualScroll", this.handleDataTableNativeVirtualScroll);
        this.classList.add("md-data-table__native");

        if (this.instance.virtualize) {
            this.virtual = new Virtual(this, {
                item: "tbody",
            });
            if (this.hasConnected) this.virtual.load({ data: this.instance.dataStore });
        }
    }

    disconnectedCallback() {
        if (this.instance.virtualize) {
            this.virtual.destroy();
        }
        this.hasConnected = true;
    }
}

customElements.define("md-data-table-native", MDDataTableNativeComponent, { extends: "table" });

/**
 * @extends HTMLTableCaptionElement
 */
class MDDataTableNativeCaptionComponent extends Mixins(HTMLTableCaptionElement) {}

customElements.define("md-data-table-native-caption", MDDataTableNativeCaptionComponent, { extends: "caption" });

/**
 * @extends HTMLTableSectionElement
 */
class MDDataTableNativeSectionComponent extends Mixins(HTMLTableSectionElement) {}

/**
 * @extends MDDataTableNativeSectionComponent
 */
class MDDataTableNativeHeadComponent extends MDDataTableNativeSectionComponent {}

customElements.define("md-data-table-native-head", MDDataTableNativeHeadComponent, { extends: "thead" });

/**
 * @extends MDDataTableNativeSectionComponent
 */
class MDDataTableNativeBodyComponent extends MDDataTableNativeSectionComponent {}

customElements.define("md-data-table-native-body", MDDataTableNativeBodyComponent, { extends: "tbody" });

/**
 * @extends MDDataTableNativeSectionComponent
 */
class MDDataTableNativeFooterComponent extends MDDataTableNativeSectionComponent {}

customElements.define("md-data-table-native-footer", MDDataTableNativeFooterComponent, { extends: "tfoot" });

/**
 * @extends HTMLTableRowElement
 */
class MDDataTableNativeRowComponent extends Mixins(HTMLTableRowElement) {}

customElements.define("md-data-table-native-row", MDDataTableNativeRowComponent, { extends: "tr" });

/**
 * @extends HTMLTableCellElement
 */
class MDDataTableNativeCellComponent extends Mixins(HTMLTableCellElement) {}

/**
 * @extends MDDataTableNativeCellComponent
 */
class MDDataTableNativeHeaderComponent extends MDDataTableNativeCellComponent {
    handleDataTableNativeHeaderResize(event) {
        this.data.width = this.gesture.currentWidth;
        this.style.setProperty("min-width", this.data.width + "px");

        /**
         * @event onTableHeaderResize
         * @type {Object}
         * @property {Object} event
         */
        this.emit("onTableHeaderResize", { event });
    }

    handleDataTableNativeHeaderDblclick(event) {
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
            this.handleDataTableNativeHeaderResize = this.handleDataTableNativeHeaderResize.bind(this);
            this.addEventListener("onResize", this.handleDataTableNativeHeaderResize);
            this.handleDataTableNativeHeaderDblclick = this.handleDataTableNativeHeaderDblclick.bind(this);
            this.addEventListener("dblclick", this.handleDataTableNativeHeaderDblclick);

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

customElements.define("md-data-table-native-header", MDDataTableNativeHeaderComponent, { extends: "th" });

/**
 * @extends MDDataTableNativeCellComponent
 */
class MDDataTableNativeDataComponent extends MDDataTableNativeCellComponent {}

customElements.define("md-data-table-native-data", MDDataTableNativeDataComponent, { extends: "td" });

export { MDDataTableNativeComponent, MDDataTableNativeCaptionComponent, MDDataTableNativeSectionComponent, MDDataTableNativeHeadComponent, MDDataTableNativeBodyComponent, MDDataTableNativeFooterComponent, MDDataTableNativeRowComponent, MDDataTableNativeCellComponent, MDDataTableNativeHeaderComponent, MDDataTableNativeDataComponent };
