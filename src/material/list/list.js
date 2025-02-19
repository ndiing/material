import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

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
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
        fieldMap: { type: Object },
        rippleOptions: { type: Object },
    };

    types = ["single-select", "multi-select"];

    constructor() {
        super();
        this.items = [];
        this.type = "single-select";
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
        return html`

            ${this.items.map((item) => this.renderListItem(item))}
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.style.setProperty("--md-comp-list-icon-animation", "none");


    }

    handleListItemClick(event) {
        
        this.style.removeProperty("--md-comp-list-icon-animation");
        const action = event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch");

        if (action) return;
        const data = event.currentTarget.data;

        if (this.type === "single-select") {
            this.items.forEach((item) => {
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

        this.items.forEach((item) => {
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
