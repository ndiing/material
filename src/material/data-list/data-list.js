import { html } from "lit";
import { MDCardComponent } from "../card/card.js";
import { MDListComponent } from "../list/list.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { ifDefined } from "lit/directives/if-defined.js";


/**
 * {{description}}
 * @element md-data-list
 * @extends MDCardComponent
 * @fires MDDataListComponent#onDataListViewportVirtualScroll - {{description}}
 * @fires MDDataListComponent#onDataListItemClick - {{description}}
 * @fires MDDataListComponent#onDataListItemSelected - {{description}}
 */
class MDDataListComponent extends MDCardComponent {
    
    /**
     * {{description}}
     */
    static properties = {
        ...MDCardComponent.properties,
        ...MDListComponent.properties,
    };

    
    /**
     * {{description}}
     */
    get body() {
        /* prettier-ignore */
        return [this.renderViewport()];
    }

    
    /**
     * {{description}}
     */
    set body(value) {}

    constructor() {
        super();
    }

    
    /**
     * @private
     */
    renderList() {
        /* prettier-ignore */
        return html`
            <md-list
                class="md-data-list__list"
                .list="${ifDefined(this.virtualList)}"
                .map="${ifDefined(this.map)}"
                .format="${ifDefined(this.format)}"
                .selection="${ifDefined(this.selection)}"
                .rangeSelection="${ifDefined(this.rangeSelection)}"
                .multiSelection="${ifDefined(this.multiSelection)}"
                .singleSelection="${ifDefined(this.singleSelection)}"
                .allSelection="${ifDefined(this.allSelection)}"
                @onListItemClick="${this.handleDataListItemClick}"
                @onListItemSelected="${this.handleDataListItemSelected}"
            ></md-list>
        `
    }

    
    /**
     * @private
     */
    renderViewport() {
        /* prettier-ignore */
        return html`
            <div 
                class="md-virtual"
                @onVirtualScroll="${this.handleDataListViewportVirtualScroll}"
            >
                <div class="md-virtual__scrollbar"></div>
                <div class="md-virtual__container">${this.renderList()}</div>
            </div>
        `
    }

    
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-list");

        this.store = new MDStore(this.list);
        this.virtual = new MDVirtualController(this, {});

        this.updateVirtualList();
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    
    /**
     * {{description}}
     */
    updateVirtualList() {
        const { total, docs } = this.store.getAll({
            filters: this.filters,
        });
        this.storeTotal = total;
        this.storeList = docs;

        this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowHeight = 56;
        this.virtual.options.rowBuffer = 0;
    }

    
    /**
     * @private
     */
    handleDataListViewportVirtualScroll(event) {
        this.virtualList = this.storeList.slice(this.virtual.rowStart, this.virtual.rowEnd);
        this.requestUpdate();

        this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        this.virtual.container.style.transform = `translate3d(0,${this.virtual.translateY}px,0)`;

        this.emit("onDataListViewportVirtualScroll", event);
    }

    
    /**
     * {{description}}
     */
    get selectedIndex() {
        return this.store.docs.findIndex((item) => item.selected);
    }

    
    /**
     * {{description}}
     */
    get selectedList() {
        return this.store.docs.filter((item) => item.selected);
    }

    
    /**
     * @private
     */
    handleDataListItemClick(event) {
        const data = event.detail.currentTarget.data;
        this.store.docs.forEach((item) => {
            item.selected = item == data;
        });

        this.requestUpdate();
        this.filter("");

        this.emit("onDataListItemClick", event);
    }

    
    /**
     * @private
     */
    handleDataListItemSelected(event) {
        const index = this.selectedIndex;

        if (this.index !== index) {
            this.index = index;

            this.emit("onDataListItemSelected", event);
        }
    }

    
    /**
     * {{description}}
     */
    filter(value) {
        this.filters = [{ name: this.map.label, value, operator: "_like" }];

        this.updateVirtualList();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
    }

    
    /**
     * {{description}}
     */
    load(docs) {
        this.store.docs = docs;

        this.updateVirtualList();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
    }
}

customElements.define("md-data-list", MDDataListComponent);

export { MDDataListComponent };
