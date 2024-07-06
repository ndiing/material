import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Represents a segmented button component that extends MDComponent.
 * @extends MDComponent
 * @tagname md-segmented-button
 * @fires MDSegmentedButtonComponent#onSegmentedButtonItemClick - Triggered when a button item in the segmented button is clicked.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * @property {Array} buttons - An array of button items to be rendered in the segmented button.
     * @property {Boolean} singleSelection - Indicates if only one button can be selected at a time.
     * @property {Boolean} multiSelection - Indicates if multiple buttons can be selected simultaneously.
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
