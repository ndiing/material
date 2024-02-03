import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDSegmentedButtonComponent represents a segmented button component.
 *
 * @extends MDComponent
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {Array} items - The array of items for the segmented button.
     * @property {String} type - The type of the segmented button (e.g., "single-select", "multi-select").
     */
    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    /**
     * Constructor for MDSegmentedButtonComponent.
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

        this.classList.add("md-segmented-button");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-segmented-button");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {}

    /**
     * Renders the segmented button.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return this.items.map(item => html`
            <md-button
                .item="${item}"
                .label="${item.label}"
                .icon="${item.icon}"
                .ui="${"outlined"}"
                .activated="${item.activated}"
                @click="${this.handleButtonClick}"
            ></md-button>
        `);
    }

    /**
     * Event handler for button click events.
     *
     * @param {Event} event - The click event.
     * @fires MDSegmentedButtonComponent#onButtonClick
     */
    handleButtonClick(event) {
        const button = event.currentTarget;
        const buttonItem = button.item;

        if (this.type === "single-select") {
            for (const item of this.items) {
                item.activated = item === buttonItem;
            }
        } else if (this.type === "multi-select") {
            buttonItem.activated = !buttonItem.activated;
        }

        this.requestUpdate();

        this.emit("onButtonClick", { event });
    }
}

customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
