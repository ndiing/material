import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Custom component for number input fields.
 * @element md-number-field
 * @extends MDTextFieldComponent
 */
class MDNumberFieldComponent extends MDTextFieldComponent {
    /**
     * Defines the actions for the number field component.
     * @returns {Array<Object>} Actions array with name and icon properties.
     */
    get actions() {
        return [
            { name: "subtract", icon: "remove" },
            { name: "add", icon: "add" },
        ];
    }

    /**
     * Setter for the actions property.
     * @param {Array<Object>} value - New value for actions.
     */
    set actions(value) {}

    /**
     * Initializes the number field component.
     * Sets the type of the input field to "number".
     */
    constructor() {
        super();
        this.type = "number";
    }

    /**
     * Callback when the component is connected to the DOM.
     * Adds necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-number-field");
    }

    /**
     * Handles clicks on the native input field.
     * Prevents the default action to manage custom behavior.
     * @param {Event} event - Click event on the native input field.
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * Handles clicks on the icon buttons associated with the number field.
     * Adjusts the value of the input field based on the button clicked.
     * @param {Event} event - Click event on the icon buttons.
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        const name = event.currentTarget.name;
        if (name === "subtract") {
            this.textFieldNative.value = parseFloat(this.textFieldNative.value) - 1;
        } else if (name === "add") {
            this.textFieldNative.value = parseFloat(this.textFieldNative.value) + 1;
        }
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }
}

customElements.define("md-number-field", MDNumberFieldComponent);
export { MDNumberFieldComponent };
