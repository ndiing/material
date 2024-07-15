import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Represents a segmented button component that allows single or multiple selection of its items.
 * @element md-segmented-button
 * @extends MDComponent
 * @fires MDSegmentedButtonComponent#onSegmentedButtonItemClick - Triggered when a segmented button item is clicked.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * @property {Array} buttons - Array of button items to render.
     * @property {Boolean} singleSelection - Indicates single selection mode.
     * @property {Boolean} multiSelection - Indicates multiple selection mode.
     */
    static properties = {
        ...MDComponent.properties,
        buttons: { type: Array },
        singleSelection: { type: Boolean },
        multiSelection: { type: Boolean },
    };

    constructor() {
        super();
        // this.buttons=[]
    }

    /**
     * Renders a single segmented button item.
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
     * Renders the segmented button component.
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.buttons.map(item => this.renderButton(item));
    }

    /**
     * Enhances connectedCallback to add specific CSS classes for segmented button styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    /**
     * Handles the click event on segmented button items to toggle selection based on mode.
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
