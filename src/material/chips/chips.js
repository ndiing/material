import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * A container component for displaying a list of chips.
 * @element md-chips
 * @extends MDComponent
 * @fires MDChipsComponent#onChipClick - Event emitted when a chip is clicked.
 */
class MDChipsComponent extends MDComponent {
    /**
     * Defines the properties of the MDChipsComponent.
     * @property {Array} list - The list of chip data objects to render.
     * @property {Boolean} multiSelection - Indicates whether multiple chips can be selected.
     */
    static properties = {
        list: { type: Array },
        multiSelection: { type: Boolean },
    };

    /**
     * Creates an instance of MDChipsComponent.
     */
    constructor() {
        super();
    }

    /**
     * Renders a single chip component.
     * @param {Object} item - The data object for the chip.
     * @private
     */
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

    /**
     * Renders the list of chips.
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.list?.map(item => this.renderChip(item));
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");
    }

    /**
     * Handles the click event on a chip.
     * @param {Event} event - The click event object.
     * @private
     */
    handleChipClick(event) {
        const data = event.currentTarget.data;
        if (this.multiSelection) {
            data.selected = !data.selected;
            this.requestUpdate();
        }
        this.emit("onChipClick", event);
    }

    /**
     * Handles the chip action click event.
     * @param {Event} event - The chip action click event object.
     * @private
     */
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
