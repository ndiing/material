import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list.js";

/**
 * Represents a menu component with virtual scrolling, filtering, and item selection capabilities.
 * @element md-menu
 * @extends MDSheetComponent
 * @fires MDMenuComponent#onMenuViewportVirtualScroll - Fired when the virtual viewport scrolls.
 * @fires MDMenuComponent#onMenuListItemClick - Fired when a menu list item is clicked.
 * @fires MDMenuComponent#onMenuListItemSelected - Fired when a menu list item is selected.
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * Properties for the menu component.
     * @property {Number} rowHeight - The height of each row in the menu.
     * @property {Number} maxRows - The maximum number of rows visible in the menu.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDListComponent.properties,
        rowHeight: { type: Number },
        maxRows: { type: Number },
    };

    /**
     * Returns the menu list element.
     * @return {HTMLElement} The menu list element.
     */
    get menuList() {
        return {
            value: this.querySelector(".md-menu__list"),
        };
    }

    /**
     * Returns the body content of the menu.
     * @return {Array} The body content template.
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <div 
                .tabIndex="${0}"
                class="md-virtual"
                @onVirtualScroll="${this.handleMenuViewportVirtualScroll}"
            >
                <div class="md-virtual__scrollbar"></div>
                <div class="md-virtual__container">
                    <md-list
                        class="md-menu__list"
                        .list="${ifDefined(this.virtualList)}"
                        .map="${ifDefined(this.map)}"
                        @onListItemClick="${this.handleMenuListItemClick}"
                        @onListItemSelected="${this.handleMenuListItemSelected}"
                    ></md-list>
                </div>
            </div>
        `];
    }

    /**
     * Sets the body content of the menu.
     * @param {Array} value - The new body content.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Initializes the menu component.
     */
    constructor() {
        super();
        this.popper = new MDPopperController(this, {});
        this.rowHeight = 48;
        this.maxRows = 5;
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.classList.add("md-menu");
        this.store = new MDStore(this.list);
        this.virtual = new MDVirtualController(this);
        this.updateVirtualList();
    }

    /**
     * Called when the component is removed from the DOM.
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Updates the virtual list with the current store data and filters.
     * @private
     */
    async updateVirtualList() {
        const { total, docs } = this.store.getAll({
            filters: this.filters,
        });
        this.storeTotal = total;
        this.storeList = docs;
        this.style.height = `${Math.min(this.storeTotal * this.rowHeight, this.maxRows * this.rowHeight) + (this.storeTotal ? 16 : 0)}px`;
        this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowHeight = this.rowHeight;
        this.virtual.options.rowBuffer = 0;
    }

    /**
     * Filters the menu items based on the provided value.
     * @param {String} value - The value to filter the menu items by.
     */
    filter(value) {
        this.filters = [{ name: this.menuList.value.map.label, value, operator: "_like" }];
        this.updateVirtualList();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
        this.setPlacement();
    }

    /**
     * Handles the virtual scroll event in the menu viewport.
     * @param {Event} event - The scroll event.
     * @private
     */
    async handleMenuViewportVirtualScroll(event) {
        this.virtualList = this.storeList.slice(this.virtual.rowStart, this.virtual.rowEnd);
        this.requestUpdate();
        this.emit("onMenuViewportVirtualScroll", event);
    }

    /**
     * Handles the click event on a menu list item.
     * @param {Event} event - The click event.
     * @private
     */
    handleMenuListItemClick(event) {
        const data = event.detail.currentTarget.data;
        this.store.docs.forEach((doc) => {
            doc.selected = doc === data;
        });
        this.requestUpdate();
        this.emit("onMenuListItemClick", event);
    }

    /**
     * Handles the selection event on a menu list item.
     * @param {Event} event - The selection event.
     * @private
     */
    handleMenuListItemSelected(event) {
        this.emit("onMenuListItemSelected", event);
    }

    /**
     * Shows the menu as a modal.
     * @param {HTMLElement} button - The button element that triggered the menu.
     * @param {Object} options - Additional options for displaying the menu.
     */
    async showModal(button, options) {
        this.setPlacement(button, options);
        super.showModal();
    }

    /**
     * Shows the menu.
     * @param {HTMLElement} button - The button element that triggered the menu.
     * @param {Object} options - Additional options for displaying the menu.
     */
    async show(button, options) {
        this.setPlacement(button, options);
        super.show();
    }

    /**
     * Sets the placement of the menu relative to the provided button.
     * @param {HTMLElement} button - The button element to position the menu relative to.
     * @param {Object} options - Additional options for setting the placement.
     * @private
     */
    setPlacement(button = this.poppperButton, options = this.poppperOptions) {
        this.poppperButton = button;
        this.poppperOptions = options;
        this.popper.setPlacement(button, {
            /* prettier-ignore */
            placements: [
                //
                "below-start", "below-end", "below",
                "above-start", "above-end", "above",
                "after-start", "after-end", "after",
                "top-start", "top-end", "top",
                "before-start", "before-end", "before",
                "bottom-start", "bottom-end", "bottom",
                "left-start", "left-end", "left",
                "right-start", "right-end", "right",
                "center",
            ],
            ...options,
        });
    }
}
customElements.define("md-menu", MDMenuComponent);
export { MDMenuComponent };
