import { html } from "lit";
import { MDPopperController } from "../popper/popper.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { MDListComponent } from "../list/list.js";
import { renderList } from "../template/template.js";
import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-menu
 * @fires MDMenuComponent#onScrimClick - {{desc}}
 * @fires MDMenuComponent#onMenuListSelection - {{desc}}
 * @fires MDMenuComponent#onMenuListItemEnter - {{desc}}
 * @fires MDMenuComponent#onMenuViewportVirtualScroll - {{desc}}
 * @fires MDMenuComponent#onMenuViewportVirtualScrollInitialized - {{desc}}
 * @fires MDMenuComponent#onMenuListItemClick - {{desc}}
 */
class MDMenuComponent extends MDPaneComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} subhead - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     * @property {Array} items - {{desc}}
     * @property {Number} rowHeight - {{desc}}
     * @property {Number} maxRows - {{desc}}
     */
    static properties = {
        ...MDPaneComponent.properties,
        ...MDListComponent.properties,
        items: { type: Array },
        rowHeight: { type: Number },
        maxRows: { type: Number },
    };

    /**
     * {{desc}}
     */
    get menuList() {
        return this.querySelector(".md-menu__list");
    }

    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <div 
                class="md-virtual"
                @onVirtualScroll="${this.handleMenuViewportVirtualScroll}"
            >
                <div class="md-virtual__scrollbar"></div>
                <div class="md-virtual__container">${renderList({
                    classMap:{'md-menu__list':true},
                    items: this.vitualItems,
                    rangeSelection: this.rangeSelection,
                    multiSelection: this.multiSelection,
                    singleSelection: this.singleSelection,
                    allSelection: this.allSelection,
                    onListItemClick: this.handleMenuListItemClick,
                })}</div>
            </div>
        `];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.rowHeight = 48;
        this.maxRows = 5;
        this.popper = new MDPopperController(this, {});
        this.store = new MDStore(this.items);
        this.virtual = new MDVirtualController(this);
    }

    /**
     * {{desc}}
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.updateStore();
        this.updateVirtual();
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            this.store.docs = this.items;
            this.updateStore();
            this.updateVirtual();
        }
    }

    /**
     * {{desc}}
     */
    async updateStore() {
        const { total, docs } = this.store.getAll({
            filters: this.filters,
        });
        this.storeTotal = total;
        this.storeItems = docs;
        this.style.setProperty("max-height", `${Math.min(this.storeTotal * this.rowHeight, this.maxRows * this.rowHeight) + (this.storeTotal ? 16 : 0)}px`);
    }

    /**
     * {{desc}}
     */
    updateVirtual() {
        this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowHeight = this.rowHeight;
        this.virtual.options.rowBuffer = this.maxRows;
        if (this.virtual.viewport) {
            this.virtual.viewport.scrollTop = 0;
            this.virtual.handleVirtualScroll();
        }
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     */
    showModal(button, options) {
        this.show(button, options, true);
    }

    /**
     * {{desc}}
     * @param {Any} button - {{desc}}
     * @param {Any} options - {{desc}}
     * @param {Any} modal - {{desc}}
     */
    async show(button, options, modal) {
        this.activatedIndex = this.store.docs.findIndex((doc) => doc.selected);
        if (this.activatedIndex === -1) {
            this.activatedIndex = 0;
        }
        this.activate(0);
        const handleKeydown = (event) => {
            if (event.key === "ArrowUp") {
                event.preventDefault();
                this.activate(-1);
            } else if (event.key === "ArrowDown") {
                event.preventDefault();
                this.activate(1);
            } else if (event.key === "Enter") {
                event.preventDefault();
                this.activate(0, true);
                this.emit("onMenuListSelection", event);
                this.emit("onMenuListItemEnter", event);
            }
        };
        let activeElement = document.activeElement;
        activeElement.addEventListener("keydown", handleKeydown);
        const handleSheetClose = () => {
            activeElement.removeEventListener("keydown", handleKeydown);
            this.removeEventListener("onSheetClose", handleSheetClose);
        };
        this.addEventListener("onSheetClose", handleSheetClose);
        this.updatePosition(button, options);
        super.show(modal);
    }

    /**
     * {{desc}}
     * @param {Any} button = this.popperButton - {{desc}}
     * @param {Any} options = this.popperOptions - {{desc}}
     */
    updatePosition(button = this.popperButton, options = this.popperOptions) {
        this.popperButton = button;
        this.popperOptions = {
            /* prettier-ignore */
            placements: [
                "below-start","below-end","below",
                "above-start","above-end","above",
                "before-start","before-end","before",
                "after-start","after-end","after",
                "top-start","top-end","top",
                "bottom-start","bottom-end","bottom",
                "left-start","left-end","left",
                "right-start","right-end","right",
            ],
            ...options,
        };
        this.popper.setPosition(this.popperButton, this.popperOptions);
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    filter(value) {
        this.filters = [{ name: "headline", value, operator: "_like" }];
        this.updateStore();
        this.updateVirtual();
        if (this.popperButton && this.popperOptions) {
            this.updatePosition();
        }
    }

    /**
     * {{desc}}
     * @param {Any} data - {{desc}}
     */
    select(data) {
        this.store.docs.forEach((doc) => {
            doc.selected = doc === data;
        });
    }

    /**
     * {{desc}}
     * @param {Any} offset - {{desc}}
     * @param {Any} selected - {{desc}}
     */
    activate(offset, selected) {
        this.activatedIndex = (this.activatedIndex + this.storeTotal + offset) % this.storeTotal;
        let data = this.storeItems[this.activatedIndex];
        this.store.docs.forEach((doc) => {
            doc.activated = doc === data;
            if (selected) {
                doc.selected = doc === data;
            }
        });
        const delta = Math.floor((this.maxRows - 1) / 2);
        this.virtual.viewport.scrollTop = (this.activatedIndex - delta) * this.rowHeight;
        this.virtual.handleVirtualScroll();
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    handleMenuViewportVirtualScroll(event) {
        this.vitualItems = this.storeItems.slice(this.virtual.rowStart, this.virtual.rowEnd);
        this.requestUpdate();
        this.emit("onMenuViewportVirtualScroll", event);
        if (!this.initialized) {
            this.initialized = true;
            this.updateComplete.then(() => {
                this.emit("onMenuViewportVirtualScrollInitialized", event);
            });
        }
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    handleMenuListItemClick(event) {
        const data = event.detail.currentTarget.data;
        this.select(data);
        this.requestUpdate();
        this.emit("onMenuListSelection", event);
        this.emit("onMenuListItemClick", event);
    }
}
customElements.define("md-menu", MDMenuComponent);
export { MDMenuComponent };
