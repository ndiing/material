import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MdComponent
 * @fires MdListComponent#onListItemClick
 * @fires MdListComponent#onListItemCheckboxNativeInput
 * @fires MdListComponent#onListItemRadioButtonNativeInput
 * @fires MdListComponent#onListItemSwitchNativeInput
 * @element md-list
 */
class MdListComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {String} [type] - ["single-select","multi-select"]
     * @property {Object} [fieldMap]
     * @property {Object} [rippleOptions]
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
        fieldMap: { type: Object },
        rippleOptions: { type: Object },
    };

    /**
     * @readonly
     */
    types = ["single-select", "multi-select"];

    /**
     *
     */
    constructor() {
        super();
        this.items = [];
        this.type = "single-select";
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
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

    /**
     *
     * @private
     */
    render() {
        return this.items.map((item) => this.renderListItem(item));
    }

    /**
     *
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleListItemClick(event) {
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
        this.emit("onListItemClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onListItemCheckboxNativeInput", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.items.forEach((item) => {
            item.selected = item === data;
        });
        this.requestUpdate();
        this.emit("onListItemRadioButtonNativeInput", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onListItemSwitchNativeInput", { event });
    }
}
customElements.define("md-list", MdListComponent);
export { MdListComponent };
