import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDChipSetComponent represents a chip set component.
 *
 * @extends MDComponent
 */
class MDChipSetComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {Array} items - The array of items for the chip set.
     * @property {String} type - The type of the chip set (e.g., "single-select", "multi-select").
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    /**
     * Constructor for MDChipSetComponent.
     */
    constructor() {
        super();

        // default
        this.items = [];
        this.type = "single-select";
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-chip-set' class to the component
        this.classList.add("md-chip-set");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-chip-set' class from the component
        this.classList.remove("md-chip-set");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        // Additional logic if needed
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        // Additional logic if needed
    }

    /**
     * Renders the chip set.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return this.items.map(item => html`
            <md-chip
                .item="${item}"
                .icon="${item.icon}"
                .avatar="${item.avatar}"
                .label="${item.label}"
                .trailingIcon="${item.trailingIcon}"
                .activated="${item.activated}"
                @click="${this.handleChipClick}"
            ></md-chip>
        `);
    }

    /**
     * Event handler for set click events.
     *
     * @param {Event} event - The click event.
     * @fires MDChipSetComponent#onChipClick
     */
    handleChipClick(event) {
        const chip = event.currentTarget;
        const chipItem = chip.item;

        if (this.type === "single-select") {
            for (const item of this.items) {
                item.activated = item === chipItem;
            }
        } else if (this.type === "multi-select") {
            chipItem.activated = !chipItem.activated;
        }

        this.requestUpdate();

        // Emit a custom event when a chip is clicked
        this.emit("onChipClick", { event });
    }
}

// Define the custom element
customElements.define("md-chip-set", MDChipSetComponent);

// Export the component
export { MDChipSetComponent };
