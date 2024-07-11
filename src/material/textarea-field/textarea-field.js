import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-textarea-field
 * @extends MDTextFieldComponent
 */
class MDTextareaFieldComponent extends MDTextFieldComponent {
    constructor() {
        super();
        this.type = "textarea";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-textarea-field");
    }
}
customElements.define("md-textarea-field", MDTextareaFieldComponent);
export { MDTextareaFieldComponent };
