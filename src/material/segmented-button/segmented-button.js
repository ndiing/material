import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Represents a segmented button component.
 * @extends MDComponent
 * @tagname md-segmented-button
 * @fires MDSegmentedButtonComponent#onSegmentedButtonItemClick - Event fired when a segmented button item is clicked.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * @property {Array} buttons - Array of button items to render in the segmented button.
     * @property {Boolean} singleSelection - Flag indicating single selection mode.
     * @property {Boolean} multiSelection - Flag indicating multi-selection mode.
     */
    static properties = {
        ...MDComponent.properties,
        buttons: { type: Array },
        singleSelection: { type: Boolean, attribute: "single-select" },
        multiSelection: { type: Boolean, attribute: "multi-select" },
    };

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

    render() {
        /* prettier-ignore */
        return this.buttons.map(item => this.renderButton(item));
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }

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
