import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * {{description}}
 * @element md-segmented-button
 * @extends MDComponent
 * @fires MDSegmentedButtonComponent#onSegmentedButtonItemClick - {{description}}
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * {{description}}
     * @property {Array} buttons - {{description}}
     * @property {Boolean} singleSelection - {{description}}
     * @property {Boolean} multiSelection - {{description}}
     */
    static properties = {
        ...MDComponent.properties,
        buttons: { type: Array },
        singleSelection: { type: Boolean, attribute: "single-select" },
        multiSelection: { type: Boolean, attribute: "multi-select" },
    };

    /**
     * @private
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                class="md-segmented-button__item"
                .data="${item}"
                .name="${ifDefined(item.name)}"
                .variant="${item.variant ?? "outlined"}"
                .type="${ifDefined(item.type)}"
                .icon="${ifDefined(item.selected ? "check" : item.icon)}"
                .label="${ifDefined(item.label)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleSegmentedButtonItemClick}"
            ></md-button>
        `;
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.buttons.map(item => this.renderButton(item));
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }

    /**
     * @private
     */
    handleSegmentedButtonItemClick(event) {
        if (this.multiSelection || this.singleSelection) {
            const data = event.currentTarget.data;

            if (this.multiSelection) {
                data.selected = !data.selected;
            } else if (this.singleSelection) {
                for (let i = 0; i < this.buttons.length; i++) {
                    let item = this.buttons[i];
                    item.selected = item === data;
                }
            }

            this.requestUpdate();
        }

        this.emit("onSegmentedButtonItemClick", event);
    }
}

customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
