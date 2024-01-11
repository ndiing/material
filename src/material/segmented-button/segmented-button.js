import { html } from "lit";
import { MDComponent } from "../foundation/component";

/**
 * MDSegmentedButtonComponent represents a segmented button element that renders multiple md-button elements.
 * @fires MDSegmentedButtonComponent#onButtonClick - Fires when a button in the segmented button is clicked.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * Defines the properties and their types for MDSegmentedButtonComponent.
     * @property {String} type - The type of segmented button (single-select or multi-select).
     * @property {Array} data - The data array to render buttons.
     * @returns {Object} An object containing property definitions.
     */
    static get properties() {
        return {
            type: { type: String },
            data: { type: Array },
        };
    }

    /**
     * Constructor for MDSegmentedButtonComponent setting default values for 'type' and 'data'.
     */
    constructor() {
        super();
        this.type = "single-select";
        this.data = [];
    }

    /**
     * Renders the HTML template for the MDSegmentedButtonComponent using md-button elements.
     * @returns {HTMLElement} A template result representing the rendered HTML.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.data.map(doc => html`
                <md-button
                    .doc="${doc}"
                    .appearance="${"outlined"}"
                    .type="${doc.type}"
                    .icon="${doc.icon}"
                    .label="${doc.label}"
                    .activated="${doc.activated}"
                    @click="${this.handleButtonClick}"
                ></md-button>
            `)}
        `
    }

    /**
     * Lifecycle method called when the element is added to the DOM.
     * Adds the 'md-segmented-button' class to the component.
     */
    connectedCallback() {
        super.connectedCallback();
        
        this.classList.add("md-segmented-button");
    }

    /**
     * Lifecycle method called when the element is removed from the DOM.
     * Removes the 'md-segmented-button' class from the component.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.classList.remove("md-segmented-button");
    }

    /**
     * Lifecycle method called after the first update of the element.
     * @param {Map<any, any>} _changedProperties - A Map of properties that have changed.
     */
    firstUpdated(_changedProperties) {
        // Implementation specific to first update (if any)
    }

    /**
     * Lifecycle method called when properties are updated.
     * @param {Map<any, any>} _changedProperties - A Map of properties that have changed.
     */
    updated(_changedProperties) {
        // Implementation specific to property updates (if any)
    }

    /**
     * Handles the click event on a button in the segmented button.
     * Toggles activation for multi-select or selects a single button for single-select.
     * @param {Event} event - The click event on the button.
     */
    handleButtonClick(event) {
        const button = event.currentTarget;
        
        if (this.type === "multi-select") {
            button.doc.activated = !button.doc.activated;
        } else {
            for (const doc of this.data) {
                doc.activated = doc === button.doc;
            }
        }
        
        this.requestUpdate();

        /**
         * Event fired when a button in the segmented button is clicked.
         * @event MDSegmentedButtonComponent#onButtonClick
         * @type {object}
         * @property {Event} event - The original click event.
         * @property {HTMLElement} button - The button element that was clicked.
         */
        this.emit("onButtonClick", { event, button });
    }
}
customElements.define("md-segmented-button", MDSegmentedButtonComponent);
export { MDSegmentedButtonComponent };
