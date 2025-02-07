import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";
/**
 * @extends MdComponent
 * @fires onChipClick
 */
class MdChipComponent extends MdComponent {
    /**
     * @property {Array} items
     * @property {String} type
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
    };
    types = ["single-select", "multi-select"];

    /**
     */
    constructor() {
        super();
        this.type = "single-select";
    }

    /**
     * @param {String} [item]
     */
    renderChip(item) {
        return html`
            <md-chip
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .avatar="${ifDefined(item.avatar)}"
                .label="${ifDefined(item.label)}"
                .action="${ifDefined(item.action)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleChipClick}"
            ></md-chip>
        `;
    }

    /**
     */
    render() {
        return this.items.map((item) => this.renderChip(item));
    }

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");
    }

    /**
     * @param {Object} [event]
     */
    handleChipClick(event) {
        const data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.items.forEach((item) => {
                item.selected = data === item;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        this.emit("onChipClick", { event });
    }
}
customElements.define("md-chips", MdChipComponent);
export { MdChipComponent };
