import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @fires MdChipComponent#onChipClick - {"detail":{"event":{}}}
 */
class MdChipComponent extends MdComponent {
    /**
     * @property {Array} [items]
     * @property {String} [type]
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
     * @private
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
     * @private
     */
    render() {
        return this.items.map((item) => this.renderChip(item));
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");
    }

    /**
     * @private
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
