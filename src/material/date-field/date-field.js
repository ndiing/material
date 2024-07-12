import { stringifyDate } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom date field component extending a text field component.
 * @element md-date-field
 * @extends MDTextFieldComponent
 */
class MDDateFieldComponent extends MDTextFieldComponent {
    /**
     * Returns the actions for the date field component.
     * @returns {Array} - An array of action objects.
     */
    get actions() {
        return [{ icon: "today" }];
    }

    /**
     * Sets the actions for the date field component.
     * @param {Array} value - An array of action objects.
     */
    set actions(value) {}

    /**
     * Constructs an instance of MDDateFieldComponent.
     * Initializes the type of the input to "date".
     */
    constructor() {
        super();
        this.type = "date";
    }

    /**
     * Invoked when the component is added to the document's DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-date-field");
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
     * Creates and shows a date picker modal.
     * @private
     * @param {Event} event - The click event.
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.picker = document.createElement("md-date-picker");
        if (this.value) {
            this.picker.value = this.value;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.picker.addEventListener("onDatePickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onDatePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onDatePickerButtonOkClick", this.handlePickerButtonOkClick);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onDatePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onDatePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onDatePickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        await this.picker.updateComplete;
        this.picker.showModal(this.textFieldContainer.value);
    }

    /**
     * Handles the date picker selection event.
     * Updates the text field value with the selected date.
     * @private
     */
    handlePickerSelection() {
        const value = stringifyDate(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * Handles the date picker cancel button click event.
     * Closes the date picker.
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * Handles the date picker OK button click event.
     * Updates the text field value with the selected date and closes the date picker.
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyDate(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}
customElements.define("md-date-field", MDDateFieldComponent);
export { MDDateFieldComponent };
