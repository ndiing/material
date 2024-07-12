import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Password field component for handling password input with visibility toggle.
 * @element md-password-field
 * @extends MDTextFieldComponent
 */
class MDPasswordFieldComponent extends MDTextFieldComponent {
    /**
     * Defines the actions available for the password field.
     * @returns {Object[]} Array of action objects.
     */
    get actions() {
        return [{ name: "password", icon: this.type === "password" ? "visibility_off" : "visibility" }];
    }

    /**
     * Setter for actions (no operation).
     * @param {Object[]} value - The value to set.
     */
    set actions(value) {}

    /**
     * Initializes MDPasswordFieldComponent with default type as "password".
     */
    constructor() {
        super();
        this.type = "password";
    }

    /**
     * Adds CSS classes to the component on connection.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-password-field");
    }

    /**
     * Prevents default behavior on text field click.
     * @private
     * @param {MouseEvent} event - The click event.
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * Toggles the visibility of the password text on icon button click.
     * @private
     * @param {MouseEvent} event - The click event on the icon button.
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.type = this.type === "password" ? "text" : "password";
    }
}

customElements.define("md-password-field", MDPasswordFieldComponent);
export { MDPasswordFieldComponent };
