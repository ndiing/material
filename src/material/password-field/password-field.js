import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-password-field
 * @extends MDTextFieldComponent
 */
class MDPasswordFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ name: "password", icon: this.type === "password" ? "visibility_off" : "visibility" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "password";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-password-field");
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.type = this.type === "password" ? "text" : "password";
    }
}
customElements.define("md-password-field", MDPasswordFieldComponent);
export { MDPasswordFieldComponent };
