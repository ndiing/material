import { stringifyDatetimeLocal } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom datetime field component extending a text field component.
 * @element md-datetime-field
 * @extends MDTextFieldComponent
 */
class MDDatetimeFieldComponent extends MDTextFieldComponent {
    /**
     * Returns the actions for the datetime field component.
     * @returns {Array} - An array of action objects.
     */
    get actions() {
        return [{ icon: "calendar_clock" }];
    }

    /**
     * Sets the actions for the datetime field component.
     * @param {Array} value - An array of action objects.
     */
    set actions(value) {}

    /**
     * Constructs an instance of MDDatetimeFieldComponent.
     * Initializes the type of the input to "datetime-local".
     */
    constructor() {
        super();
        this.type = "datetime-local";
    }

    /**
     * Invoked when the component is added to the document's DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-datetime-field");
    }

    /**
     * Handles the native click event on the text field.
     * Prevents the default action and calls the parent method.
     * @private
     * @param {Event} event - The click event.
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * Handles the icon button click event on the text field.
     * Creates and shows a datetime picker modal.
     * @private
     * @param {Event} event - The click event.
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.picker = document.createElement("md-datetime-picker");
        if (this.value) {
            this.picker.value = this.value;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.picker.addEventListener("onDatetimePickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onDatetimePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        await this.picker.updateComplete;
        this.picker.showModal(this.textFieldContainer.value);
    }

    /**
     * Handles the datetime picker selection event.
     * Updates the text field value with the selected datetime.
     * @private
     */
    handlePickerSelection() {
        const value = stringifyDatetimeLocal(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * Handles the datetime picker cancel button click event.
     * Closes the datetime picker.
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * Handles the datetime picker OK button click event.
     * Updates the text field value with the selected datetime and closes the datetime picker.
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyDatetimeLocal(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}
customElements.define("md-datetime-field", MDDatetimeFieldComponent);
export { MDDatetimeFieldComponent };
