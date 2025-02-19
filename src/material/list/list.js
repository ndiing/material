import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Store } from "../store/store";
import { Virtual } from "../virtual/virtual";

/**
 * @extends MdComponent
 * @element md-list
 */
class MDListComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {single-select|multi-select} [type]
     * @property {Object} [fieldMap]
     * @property {Object} [rippleOptions]
     * @property {Boolean} [virtualize]
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
        fieldMap: { type: Object },
        rippleOptions: { type: Object },
        virtualize: { type: Boolean },

        itemsStore: { type: Array },
        itemsVirtual: { type: Array },
        now: { type: Number },
    };

    types = ["single-select", "multi-select"];

    constructor() {
        super();
        this.itemsStore = [];
        this.type = "single-select";

        this.storeOptions={}
        this.store=new Store(this.storeOptions)

    }

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

    render() {
        /* prettier-ignore */
        return this.itemsVirtual?.map((item) => this.renderListItem(item))
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.style.setProperty("--md-comp-list-icon-animation", "none");

        if(this.virtualize){
            await this.updateComplete
            this.handleListVirtualScroll=
            this.handleListVirtualScroll.bind(this)
            this.addEventListener('onVirtualScroll',this.handleListVirtualScroll)
            this.virtual = new Virtual(this,{
                item:'md-list-item'
            })
            this.load();
        }
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        if(this.virtualize&&this.virtual){
            this.removeEventListener('onVirtualScroll',this.handleListVirtualScroll)
            this.virtual.destroy()
        }
    }

    async updated(changedProperties) {
        super.updated(changedProperties);
        
        if(changedProperties.has('items')){
            await this.updateComplete

            this.load();
        }
    }

    load() {
        this.store.load(this.items);
        const result = this.store.get(this.storeOptios);
        this.itemsStore = result.data;
        if (this.virtualize) this.virtual.load({ data: this.itemsStore });
        else this.itemsVirtual = this.itemsStore;
    }

    handleListVirtualScroll(event){
        this.itemsVirtual=(event.detail.data)
        // console.log(event)
    }

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
         * @property {Object} event
         */
        this.emit("onListItemClick", { event });
    }

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
