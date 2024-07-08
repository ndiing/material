import { MDTextFieldComponent } from "../text-field/text-field.js";


/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @tagname md-password-field
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

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-password-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        this.type = this.type === "password" ? "text" : "password";
    }
}

customElements.define("md-password-field", MDPasswordFieldComponent);

export { MDPasswordFieldComponent };
