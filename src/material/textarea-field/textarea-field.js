import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Custom component for textarea input.
 * @element md-textarea-field
 * @extends MDTextFieldComponent
 */
class MDTextareaFieldComponent extends MDTextFieldComponent {
    /**
     * Initializes the component.
     * Sets the type of the component to "textarea".
     */
    constructor() {
        super();
        this.type = "textarea";
    }

    /**
     * Callback invoked when the component is added to the document's DOM.
     * Adds necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-textarea-field");
    }
}
customElements.define("md-textarea-field", MDTextareaFieldComponent);
export { MDTextareaFieldComponent };
