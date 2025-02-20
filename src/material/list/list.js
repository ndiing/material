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
        items: { type: Array },
        type: { type: String },
        fieldMap: { type: Object },
        rippleOptions: { type: Object },
        virtualOptions: { type: Object },
        virtualize: { type: Boolean },

        itemsStore: { type: Array },
        itemsVirtual: { type: Array },
        now: { type: Number },
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
        this.itemsStore = [];
        this.type = "single-select";

        this.storeOptions = {};
        this.store = new Store(this.storeOptions);

        this.virtualOptions = {};
    }

    // /**
    //  * Renders a list item.
    //  * @param {Object} item - The item data.
    //  * @returns {TemplateResult} The rendered template for the list item.
    //  */
    renderListItem(item) {
        if (this.fieldMap) {
            for (const name in this.fieldMap) {
                const value = this.fieldMap[name];
                item[name] = item[value];
            }
        }
        return html`
            <md-list-row>
                <md-list-item
                    .data="${item}"
                    .avatar="${ifDefined(item.avatar)}"
                    .image="${ifDefined(item.image)}"
                    .video="${ifDefined(item.video)}"
                    .icon="${ifDefined(item.icon)}"
                    .label="${ifDefined(item.label)}"
                    .sublabel="${ifDefined(item.sublabel)}"
                    .text="${ifDefined(item.text)}"
                    .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                    .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                    .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                    .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                    .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                    .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                    .selected="${ifDefined(item.selected)}"
                    .disabled="${ifDefined(item.disabled)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .rippleOptions="${ifDefined(item.rippleOptions || this.rippleOptions)}"
                    .badge="${ifDefined(item.badge)}"
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

        if (this.virtualize) {
            await this.updateComplete;
            this.handleListVirtualScroll = this.handleListVirtualScroll.bind(this);
            this.addEventListener("onVirtualScroll", this.handleListVirtualScroll);
            this.virtual = new Virtual(this, {
                item: "md-list-item",
                ...this.virtualOptions,
            });
            this.load();
        }
    }

    // /**
    //  * Called when the element is disconnected from the DOM.
    //  * Removes the virtual scrolling event listener and destroys the virtual instance if enabled.
    //  */
    async disconnectedCallback() {
        super.disconnectedCallback();
        if (this.virtualize && this.virtual) {
            this.removeEventListener("onVirtualScroll", this.handleListVirtualScroll);
            this.virtual.destroy();
        }
    }

    // /**
    //  * Called when the properties of the component are updated.
    //  * @param {Map} changedProperties - The properties that changed.
    //  */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (
            changedProperties.has("items")
            // &&changedProperties.get("items")
        ) {
            await this.updateComplete;

            this.load();
        }
    }

    /**
     * Loads the items into the store and updates the virtual list if enabled.
     */
    load() {
        this.store.load(this.items);
        
        const result = this.store.get(this.storeOptios);
        this.itemsStore = result.data;
        
        if (this.virtualize) this.virtual.load({ data: this.itemsStore });
        else this.itemsVirtual = this.itemsStore;
    }

    // /**
    //  * Handles the virtual scroll event.
    //  * @param {Event} event - The virtual scroll event.
    //  */
    handleListVirtualScroll(event) {
        this.itemsVirtual = event.detail.data;
        // console.log(event)
    }

    // /**
    //  * Handles the click event on a list item.
    //  * @param {Event} event - The click event.
    //  */
    handleListItemClick(event) {
        this.style.removeProperty("--md-comp-list-icon-animation");
        const action = event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch");

        if (action) return;
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
