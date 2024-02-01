import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * `MDChipSetComponent` is a custom web component representing a set of chips.
 * @extends MDComponent
 */
class MDChipSetComponent extends MDComponent {
    /**
     * Properties for MDChipSetComponent.
     * @static
     * @type {object}
     * @property {Array} items - The array of chip items to be displayed in the set.
     * @property {String} type - The type attribute for the chip set.
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    /**
     * Constructs an instance of MDChipSetComponent.
     */
    constructor() {
        super();

        // default
        this.items = [];
        // this.type=""
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip-set");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-chip-set");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Renders an individual chip item.
     * @param {Object} item - The chip item object.
     * @returns {TemplateResult} The lit-html template result for the chip item.
     */
    renderItem(item = {}) {
        // prettier-ignore
        return html`
            <md-chip
                .item="${item}"
                .leadingIcon="${item.leadingIcon}"
                .avatar="${item.avatar}"
                .trailingIcon="${item.trailingIcon}"
                .label="${item.label}"
                .activated="${item.activated}"
                @click="${this.handleChipClick}"
            ></md-chip>
        `;
    }

    /**
     * Renders the content of the MDChipSetComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return this.items.map(item => this.renderItem(item));
    }

    /**
     * Handles the chip click event.
     * @param {Event} event - The click event.
     * @fires MDChipSetComponent#onChipClick
     */
    handleChipClick(event) {
        const chip = event.currentTarget;

        // multi-select
        chip.item.activated = !chip.item.activated;

        this.requestUpdate();

        /**
         * Emitted when a chip in the set is clicked.
         * @event MDChipSetComponent#onChipClick
         * @type {object}
         * @property {Event} event - The original click event.
         */
        this.emit("onChipClick", { event });
    }
}

/**
 * Define the custom element "md-chip-set" with MDChipSetComponent.
 */
customElements.define("md-chip-set", MDChipSetComponent);

export { MDChipSetComponent };
