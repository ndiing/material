import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list.js";

/**
 * MDMenuComponent is a custom element that represents a menu component
 * with integrated virtual scrolling and popper positioning.
 * @element md-menu
 * @extends MDSheetComponent
 * @fires MDMenuComponent#onMenuViewportVirtualScroll - Fired when the virtual scroll position changes.
 * @fires MDMenuComponent#onMenuListItemClick - Fired when a list item in the menu is clicked.
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * Defines the properties of the MDMenuComponent, merging properties
     * from MDSheetComponent and MDListComponent.
     * @property {Number} rowHeight - The height of each row in the virtual list.
     * @property {Number} maxRows - The maximum number of rows to display in the menu.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDListComponent.properties,
        rowHeight: { type: Number },
        maxRows: { type: Number },
    };

    /**
     * Gets the menu list element.
     * @type {HTMLElement}
     */
    get menuList() {
        return this.querySelector(".md-menu__list");
    }

    /**
     * Gets the HTML content of the menu's body, which includes a virtual list component.
     * @type {TemplateResult[]}
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
                        @onListItemSelected="${this.handleMenuListItemSelected}"
                    ></md-list>
                </div>
            </div>
        `];
    }

    /**
     * Sets the HTML content of the menu's body.
     * @param {TemplateResult[]} value - The new content of the menu's body.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Gets the index of the currently selected item in the menu list.
     * @type {Number}
     */
    get selectedIndex() {
        return this.store.docs.findIndex((doc) => doc.selected);
    }

    /**
     * Gets the list of selected items in the menu list.
     * @type {Array}
     */
    get selectedList() {
        return this.store.docs.filter((doc) => doc.selected);
    }

    /**
     * Constructs an instance of MDMenuComponent, initializing the popper controller
     * and setting default values for row height and maximum rows.
     */
    constructor() {
        super();
        this.popper = new MDPopperController(this, {});
        this.rowHeight = 48;
        this.maxRows = 5;
    }

    /**
     * Handles the connection of the component to the DOM, adding necessary CSS classes,
     * initializing the store and virtual controller, and updating the virtual list.
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
     * Handles the disconnection of the component from the DOM.
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Updates the virtual list based on the current filters and store data.
     * @private
     */
    updateVirtualList() {
        const { total, docs } = this.store.getAll({
            filters: this.filters,
        });
        this.storeTotal = total;
        this.storeList = docs;

        this.virtual.options.rowTotal = this.storeTotal;
        this.virtual.options.rowHeight = this.rowHeight;
        this.virtual.options.rowBuffer = 0;

        this.style.height = `${Math.min(this.storeTotal * this.rowHeight, this.maxRows * this.rowHeight) + (this.storeTotal ? 16 : 0)}px`;
    }

    /**
     * Applies a filter to the menu list based on the provided value.
     * @param {String} value - The filter value.
     */
    filter(value) {
        this.filters = [{ name: this.menuList.map.label, value, operator: "_like" }];

        this.updateVirtualList();
        this.virtual.viewport.scrollTop = 0;
        this.virtual.handleVirtualScroll();
    }

    /**
     * Handles virtual scroll events, updating the virtual list and scrollbar position.
     * @private
     * @param {Event} event - The scroll event.
     */
    handleMenuViewportVirtualScroll(event) {
        this.virtualList = this.storeList.slice(this.virtual.rowStart, this.virtual.rowEnd);
        this.requestUpdate();

        // this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        // this.virtual.container.style.transform = `translate3d(0,${this.virtual.translateY}px,0)`;

        this.emit("onMenuViewportVirtualScroll", event);
    }

    /**
     * Handles click events on the menu list items, updating the selected item and
     * closing the menu.
     * @private
     * @param {Event} event - The click event.
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
     * Handles list item selected events.
     * @private
     * @param {Event} event - The selection event.
     */
    handleMenuListItemSelected(event) {
        this.emit("onMenuListItemSelected", event);
    }

    /**
     * Displays the menu as a modal, setting its placement relative to the button.
     * @param {HTMLElement} button - The button that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
     */
    async showModal(button, options) {
        super.showModal();
        this.setPlacement(button, options);
    }

    /**
     * Displays the menu, setting its placement relative to the button.
     * @param {HTMLElement} button - The button that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
     */
    async show(button, options) {
        super.show();
        this.setPlacement(button, options);
    }

    /**
     * Sets the placement of the menu relative to the button based on the provided options.
     * @private
     * @param {HTMLElement} button - The button that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
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
