import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-menu
 * @fires MDMenuComponent#onSheetShow - {{desc}}
 * @fires MDMenuComponent#onSheetClose - {{desc}}
 * @fires MDMenuComponent#onSheetScrimClick - {{desc}}
 * @fires MDMenuComponent#onMenuListSelection - {{desc}}
 * @fires MDMenuComponent#onMenuListItemEnter - {{desc}}
 * @fires MDMenuComponent#onMenuViewportVirtualScroll - {{desc}}
 * @fires MDMenuComponent#onMenuViewportVirtualScrollInitialized - {{desc}}
 * @fires MDMenuComponent#onMenuListItemClick - {{desc}}
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     * @property {Array} list - {{desc}}
     * @property {Object} map - {{desc}}
     * @property {Number} rowHeight - {{desc}}
     * @property {Number} maxRows - {{desc}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDListComponent.properties,
        list: { type: Array },
        map: { type: Object },
        rowHeight: { type: Number },
        maxRows: { type: Number },
    };
    menuList = createRef();

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
                <div class="md-virtual__container">
                    <md-list
                        class="md-menu__list"
                        .list="${ifDefined(this.virtualList)}"
                        .map="${ifDefined(this.map)}"
                        ${ref(this.menuList)}
                        @onListItemClick="${this.handleMenuListItemClick}"
                        @onListItemSelected="${this.handleMenuListItemSelected}"
                    ></md-list>
                </div>
            </div>
        `];
    }

    /**
     * {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.map = { label: "label", value: "value" };
        this.rowHeight = 48;
        this.maxRows = 5;
        this.popper = new MDPopperController(this, {});
        this.store = new MDStore(this.list);
        this.virtual = new MDVirtualController(this);
    }

    /**
     * {{desc}}
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
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("list")) {
            this.store.docs = this.list;
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
        this.storeList = docs;
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
     */
    showModal(button, options) {
        this.show(button, options, true);
    }

    /**
     * {{desc}}
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
     */
    filter(value) {
        this.filters = [{ name: this.map.label, value, operator: "_like" }];
        this.updateStore();
        this.updateVirtual();
        if (this.popperButton && this.popperOptions) {
            this.updatePosition();
        }
    }

    /**
     * {{desc}}
     */
    select(data) {
        this.store.docs.forEach((doc) => {
            doc.selected = doc === data;
        });
    }

    /**
     * {{desc}}
     */
    activate(offset, selected) {
        this.activatedIndex = (this.activatedIndex + this.storeTotal + offset) % this.storeTotal;
        let data = this.storeList[this.activatedIndex];
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
     */
    handleMenuViewportVirtualScroll(event) {
        this.virtualList = this.storeList.slice(this.virtual.rowStart, this.virtual.rowEnd);
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
