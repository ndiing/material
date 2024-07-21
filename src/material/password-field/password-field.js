import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-password-field
 */
class MDPasswordFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "password", icon: this.type === "password" ? "visibility_off" : "visibility" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();
        this.type = "password";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    /**
     * {{desc}}
     */
    async handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        this.type = this.type === "password" ? "text" : "password";
    }
}
customElements.define("md-password-field", MDPasswordFieldComponent);
export { MDPasswordFieldComponent };
