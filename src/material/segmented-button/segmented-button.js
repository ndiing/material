import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";

/**
 * Custom segmented button component extending MDComponent.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * Properties for the MDSegmentedButtonComponent.
     * @property {Array} data - The array of data used to populate segmented buttons.
     * @property {string} type - The type of the segmented button ("single-select" or "multi-select").
     */
    static get properties() {
        return {
            data: { type: Array },
            type: { type: String },
        };
    }

    /**
     * Constructor for MDSegmentedButtonComponent.
     */
    constructor() {
        super();
        this.data = [];
        this.type = "single-select";
    }

    /**
     * Renders the MDSegmentedButtonComponent.
     * @returns {TemplateResult} The rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.data.map(doc => html`
                <md-button
                    .doc="${doc}"
                    .icon="${doc.icon}"
                    .label="${doc.label}"
                    .type="${doc.type}"
                    .activated="${doc.activated}"
                    .appearance="${doc.appearance}"
                    @click="${this.handleButtonClick}"
                ></md-button>
            `)}
        `;
    }

    /**
     * Lifecycle method called when the element is attached to the DOM.
     * Initializes the segmented button component.
     * @returns {Promise<void>} A Promise that resolves when initialization is complete.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        // Any additional cleanup logic can be added here if needed.
    }

    /**
     * Lifecycle method called when the element's first update happens.
     * @param {Map<string, unknown>} changedProperties - The properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle method called when the element's properties have been updated.
     * @param {Map<string, unknown>} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        // Logic to handle updates to the component's properties can be added here.
    }

    /**
     * Handles the click event on the segmented button.
     * @param {Event} event - The click event.
     */
    handleButtonClick(event) {
        const button = event.currentTarget;
        if (this.type === "multi-select") {
            button.doc.activated = !button.doc.activated;
        } else {
            this.data.forEach((doc) => (doc.activated = doc === button.doc));
        }
        this.requestUpdate();
    }
}

/**
 * Define the custom element "md-segmented-button".
 */
customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
