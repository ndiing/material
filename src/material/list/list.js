import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";
import { Virtual } from "../virtual/virtual";
/**
 * MDListComponent class responsible for displaying a list.
 * @extends MdComponent
 * @element md-list
 */
class MDListComponent extends MdComponent {
    /**
     * The properties of the component.
     * @property {Array} [items=[]] - The items to display in the list.
     * @property {string} [type="single-select"] - The selection type: "single-select" or "multi-select".
     * @property {Object} [fieldMap={}] - The field mapping for the items.
     * @property {Object} [rippleOptions={}] - The ripple options for the list items.
     * @property {Object} [virtualOptions={}] - The virtual options for the list items.
     * @property {boolean} [virtualize=false] - Indicates if the list should use virtualization.
     */

    static properties = {
        type: { type: String },
        items: { type: Array },
        rippleOptions: { type: Object },
        fieldMap: { type: Object },
        storeOptions: { type: Object },
        itemsStore: { type: Array },
        virtualize: { type: Boolean },
        virtualOptions: { type: Object },
        itemsVirtual: { type: Array },
    };
    /**
     * The available selection types.
     * @type {Array<string>}
     */

    types = ["single-select", "multi-select"];
    /**
     * Creates an instance of the MDListComponent class.
     */

    constructor() {
        super();
        this.type = "single-select";
        this.fieldMap = {};
        this.storeOptions = {};
        this.virtualOptions = {
            item: "md-list-item",
        };
    }

    getValue(item, name) {
        return item[this.fieldMap[name] || name];
    }
    // /**
    //  * Renders a list item.
    //  * @param {Object} item - The item data.
    //  * @returns {TemplateResult} The rendered template for the list item.
    //  */

    renderListItem(item) {
        return html`
            <md-list-row>
                <md-list-item
                    .data="${item}"
                    .avatar="${ifDefined(this.getValue(item, "avatar"))}"
                    .image="${ifDefined(this.getValue(item, "image"))}"
                    .video="${ifDefined(this.getValue(item, "video"))}"
                    .icon="${ifDefined(this.getValue(item, "icon"))}"
                    .label="${ifDefined(this.getValue(item, "label"))}"
                    .sublabel="${ifDefined(this.getValue(item, "sublabel"))}"
                    .text="${ifDefined(this.getValue(item, "text"))}"
                    .leadingCheckbox="${ifDefined(this.getValue(item, "leadingCheckbox"))}"
                    .leadingRadioButton="${ifDefined(this.getValue(item, "leadingRadioButton"))}"
                    .leadingSwitch="${ifDefined(this.getValue(item, "leadingSwitch"))}"
                    .trailingCheckbox="${ifDefined(this.getValue(item, "trailingCheckbox"))}"
                    .trailingRadioButton="${ifDefined(this.getValue(item, "trailingRadioButton"))}"
                    .trailingSwitch="${ifDefined(this.getValue(item, "trailingSwitch"))}"
                    .selected="${ifDefined(this.getValue(item, "selected"))}"
                    .disabled="${ifDefined(this.getValue(item, "disabled"))}"
                    .routerLink="${ifDefined(this.getValue(item, "routerLink"))}"
                    .rippleOptions="${ifDefined(item.rippleOptions || this.rippleOptions)}"
                    .badge="${ifDefined(this.getValue(item, "badge"))}"
                    @click="${this.handleListItemClick}"
                    @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                    @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                    @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                ></md-list-item>
            </md-list-row>
        `;
    }
    // /**
    //  * Renders the list.
    //  * @returns {TemplateResult} The rendered template for the list.
    //  */

    render() {
        /* prettier-ignore */
        return this.itemsVirtual?.map((item) => this.renderListItem(item))
    }
    // /**
    //  * Called when the element is connected to the DOM.
    //  * Adds the 'md-list' class and initializes virtual scrolling if enabled.
    //  */

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.style.setProperty("--md-comp-list-icon-animation", "none");
        this.store = new Store();
        if (this.virtualize) {
            this.handleListVirtualScroll = this.handleListVirtualScroll.bind(this);
            this.addEventListener("onVirtualScroll", this.handleListVirtualScroll);
            this.virtual = new Virtual(this, this.virtualOptions);
            if (this.hasConnected) this.load();
        }
    }
    // /**
    //  * Called when the element is disconnected from the DOM.
    //  * Removes the virtual scrolling event listener and destroys the virtual instance if enabled.
    //  */

    async disconnectedCallback() {
        super.disconnectedCallback();
        if (this.virtualize) {
            this.removeEventListener("onVirtualScroll", this.handleListVirtualScroll);
            this.virtual.destroy();
        }
        this.hasConnected = true;
    }
    // /**
    //  * Called when the properties of the component are updated.
    //  * @param {Map} changedProperties - The properties that changed.
    //  */

    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("items")) {
            await this.updateComplete;
            this.load();
        }
    }

    load() {
        this.store.load(this.items);
        const result = this.store.get(this.storeOptions);
        this.itemsStore = result.data;
        if (this.virtualize) {
            this.virtualOptions.data = this.itemsStore;
            this.virtual.load(this.virtualOptions);
        } else {
            this.itemsVirtual = this.itemsStore;
        }
    }

    handleListVirtualScroll(event) {
        this.itemsVirtual = event.detail.data;
    }
    // /**
    //  * Handles the click event on a list item.
    //  * @param {Event} event - The click event.
    //  */

    handleListItemClick(event) {
        const action = event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch");
        if (action) return;
        this.style.removeProperty("--md-comp-list-icon-animation");
        const data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.itemsStore.forEach((item) => {
                item.selected = item === data;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        /**
         * @event onListItemClick
         * @property {Object} event - The list item click event.
         */
        this.emit("onListItemClick", { event });
    }
    // /**
    //  * Handles the native input event on a list item checkbox.
    //  * @param {Event} event - The native input event.
    //  */

    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        /**
         * @event onListItemCheckboxNativeInput
         * @property {Object} event
         */
        this.emit("onListItemCheckboxNativeInput", { event });
    }
    // /**
    //  *
    //  * @param {*} event
    //  */

    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.itemsStore.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        /**
         * @event onListItemRadioButtonNativeInput
         * @property {Object} event
         */
        this.emit("onListItemRadioButtonNativeInput", { event });
    }
    // /**
    //  *
    //  * @param {*} event
    //  */

    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        /**
         * @event onListItemSwitchNativeInput
         * @property {Object} event
         */
        this.emit("onListItemSwitchNativeInput", { event });
    }
}

customElements.define("md-list", MDListComponent);

export { MDListComponent };
