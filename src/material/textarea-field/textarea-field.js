import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-textarea-field
 */
class MDTextareaFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.type = "textarea";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-textarea-field");
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }
}
customElements.define("md-textarea-field", MDTextareaFieldComponent);
export { MDTextareaFieldComponent };
