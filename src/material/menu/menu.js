import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list.js";

/**
 * {{description}}
 * @element md-menu
 * @extends MDSheetComponent
 * @fires MDMenuComponent#onMenuListItemClick - {{description}}
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * {{description}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDListComponent.properties,
        rowHeight: { type: Number },
        maxRows: { type: Number },
    };

    get menuList() {
        return this.querySelector(".md-menu__list");
    }

    /**
     * {{description}}
     */
    get body() {
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
                        .variant="${"plain"}"
                        .list="${ifDefined(this.virtualList)}"
                        .map="${ifDefined(this.map)}"
                        @onListItemClick="${this.handleMenuListItemClick}"
                    ></md-list>
                </div>
            </div>
        `];
    }

    /**
     * {{description}}
     */
    set body(value) {
        this._body = value;
    }

    /**
     * {{description}}
     */
    constructor() {
        super();
        this.popper = new MDPopperController(this, {});
        this.rowHeight = 48;
        this.maxRows = 5;
    }

    /**
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-menu");

        this.store = new MDStore(this.list);
        this.virtual = new MDVirtualController(this);

        this.updateVirtualList();

        await this.updateComplete;
        await new Promise((resolve) => window.requestAnimationFrame(resolve));
        const delta = Math.floor((this.maxRows - 1) / 2);

        this.virtual.viewport.scrollTop = (this.selectedIndex - delta) * this.rowHeight;
    }

    updateVirtualList() {
        const { total, docs } = this.store.getAll({
            filters: this.filters,
        });
        this.storeTotal = total;
        this.storeList = docs;

        this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowHeight = this.rowHeight;
        this.virtual.options.rowBuffer = 0;

        this.style.height = `${Math.min(this.storeTotal * this.rowHeight, this.maxRows * this.rowHeight) + (this.storeTotal?16:0)}px`;
    }

    filter(value) {
        this.filters = [{ name: this.menuList.map.label, value, operator: "_like" }];

        this.updateVirtualList();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    get selectedIndex() {
        return this.store.docs.findIndex((doc) => doc.selected);
    }

    get selectedList() {
        return this.store.docs.filter((doc) => doc.selected);
    }

    /**
     * @private
     */
    handleMenuViewportVirtualScroll(event) {
        this.virtualList = this.storeList.slice(this.virtual.rowStart, this.virtual.rowEnd);
        this.requestUpdate();

        this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        this.virtual.container.style.transform = `translate3d(0,${this.virtual.translateY}px,0)`;

        this.emit("onDataTableViewportVirtualScroll", event);
    }

    /**
     * @private
     */
    handleMenuListItemClick(event) {
        const data = event.detail.currentTarget.data;
        this.store.docs.forEach((doc) => {
            doc.selected = doc === data;
        });
        this.requestUpdate();
        this.close();
        this.emit("onMenuListItemClick", event);
    }

    /**
     * {{description}}
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * {{description}}
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * {{description}}
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            /* prettier-ignore */
            placements: [
                "top-start", "top-end", "top", 
                "below-start", "below-end", "below", 
                "bottom-start", "bottom-end", "bottom", 
                "above-start", "above-end", "above", 
                "left-start", "left-end", "left", 
                "after-start", "after-end", "after", 
                "right-start", "right-end", "right", 
                "before-start", "before-end", "before", 
                "center"
            ],
            ...options,
        });
    }
}

customElements.define("md-menu", MDMenuComponent);

export { MDMenuComponent };
