import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Menu component that extends MDSheetComponent to provide additional functionalities for displaying and managing menu items.
 * @element md-menu
 * @extends MDSheetComponent
 * @fires MDMenuComponent#onMenuViewportVirtualScroll - Event fired when the menu's virtual viewport scrolls.
 * @fires MDMenuComponent#onMenuListItemClick - Event fired when a menu list item is clicked.
 * @fires MDMenuComponent#onMenuListItemSelected - Event fired when a menu list item is selected.
 */
class MDMenuComponent extends MDSheetComponent {
    /**
     * Properties of the MDMenuComponent.
     * @property {Array} list - Array of items to be displayed in the menu.
     * @property {Object} map - Mapping configuration for the menu items.
     * @property {Number} rowHeight - Height of each row in the menu.
     * @property {Number} maxRows - Maximum number of rows to display in the menu.
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
     * Gets the child nodes for the menu component.
     * @returns {Array} - Template result containing the virtual scroll and list elements.
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
     * Sets the child nodes for the menu component.
     * @param {Array} value - Template result to set as child nodes.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Constructor for the MDMenuComponent.
     * Initializes properties and controllers for popper, store, and virtual scrolling.
     */
    constructor() {
        super();
        this.list = [];
        this.map = { label: "label", value: "value" };
        this.rowHeight = 48;
        this.maxRows = 5;
        this.popper = new MDPopperController(this, {});
        this.store = new MDStore(this.list);
        this.virtual = new MDVirtualController(this);
    }

    /**
     * Updates the store with the current list and applies filters.
     * @private
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
     * Updates the virtual scrolling options and viewport.
     * @private
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
     * Callback for when the component is connected to the DOM.
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.updateStore();
        this.updateVirtual();
    }

    /**
     * Callback for when the component is disconnected from the DOM.
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Callback for when the component is updated.
     * Updates the store and virtual scrolling when the list property changes.
     * @private
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
     * Handles the virtual scroll event for the menu viewport.
     * @param {Event} event - The virtual scroll event.
     * @private
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
     * Handles the click event on a menu list item.
     * @param {Event} event - The click event.
     * @private
     */
    handleMenuListItemClick(event) {
        const data = event.detail.currentTarget.data;
        this.select(data);
        this.requestUpdate();
        this.emit("onMenuListSelection", event);
        this.emit("onMenuListItemClick", event);
    }

    /**
     * Shows the menu as a modal.
     * @param {HTMLElement} button - The button that triggers the menu.
     * @param {Object} options - Options for showing the modal.
     */
    showModal(button, options) {
        this.show(button, options, true);
    }

    /**
     * Shows the menu.
     * @param {HTMLElement} button - The button that triggers the menu.
     * @param {Object} options - Options for showing the menu.
     * @param {Boolean} modal - Flag to indicate if the menu is modal.
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
     * Updates the position of the menu based on the trigger button and options.
     * @param {HTMLElement} button - The button that triggers the menu.
     * @param {Object} options - Options for positioning the menu.
     * @private
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
     * Applies a filter to the menu items.
     * @param {string} value - The value to filter the menu items by.
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
     * Selects a menu item.
     * @param {Object} data - The data of the menu item to select.
     */
    select(data) {
        this.store.docs.forEach((doc) => {
            doc.selected = doc === data;
        });
    }

    /**
     * Activates a menu item based on an offset and optionally selects it.
     * @param {number} offset - The offset to move the activation.
     * @param {boolean} [selected] - Whether to select the activated item.
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
}
customElements.define("md-menu", MDMenuComponent);
export { MDMenuComponent };
