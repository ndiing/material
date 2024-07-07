import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-chips
 * @fires MDChipsComponent#onChipClick - {{desc}}
 */
class MDChipsComponent extends MDComponent {
    /**
     * @property {Array} list - {{desc}}
     * @property {Boolean} multiSelection - {{desc}}
     */
    static properties = {
        list: { type: Array },
        multiSelection: { type: Boolean },
    };

    constructor() {
        super();
    }

    renderChip(item) {
        /* prettier-ignore */
        return html`
            <md-chip
                .data="${item}"
                .variant="${ifDefined(item.variant)}"
                .avatar="${ifDefined(item.avatar)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .action="${ifDefined(item.action)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleChipClick}"
                @onChipActionClick="${this.handleChipActionClick}"
            ></md-chip>
        `;
    }

    render() {
        /* prettier-ignore */
        return this.list?.map(item => this.renderChip(item));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chips");
    }

    handleChipClick(event) {
        const data = event.currentTarget.data;

        if (this.multiSelection) {
            data.selected = !data.selected;

            this.requestUpdate();
        }

        this.emit("onChipClick", event);
    }

    handleChipActionClick(event) {
        const data = event.currentTarget.data;

        const index = this.list.indexOf(data);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        this.requestUpdate();
    }
}

customElements.define("md-chips", MDChipsComponent);

export { MDChipsComponent };
