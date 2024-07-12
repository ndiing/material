import { stringifyTime } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Custom component for selecting time.
 * @element md-time-field
 * @extends MDTextFieldComponent
 */
class MDTimeFieldComponent extends MDTextFieldComponent {
    /**
     * Retrieves the actions associated with the time field.
     * @returns {Array} Array containing action objects.
     */
    get actions() {
        return [{ icon: "schedule" }];
    }

    /**
     * Setter for the actions associated with the time field.
     * @param {Array} value - Array containing action objects.
     */
    set actions(value) {}

    /**
     * Initializes the component.
     * Sets the type of the component to "time".
     */
    constructor() {
        super();
        this.type = "time";
    }

    /**
     * Callback invoked when the component is added to the document's DOM.
     * Adds necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-time-field");
    }

    /**
     * Handles click events on the native text field.
     * Prevents the default behavior of the event.
     * @param {Event} event - The click event.
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * Handles click events on the icon button associated with the time field.
     * Creates and displays a time picker component.
     * @param {Event} event - The click event.
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.picker = document.createElement("md-time-picker");
        if (this.value) {
            this.picker.value = this.value;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.picker.addEventListener("onTimePickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onTimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onTimePickerButtonOkClick", this.handlePickerButtonOkClick);
        
        const handleSheetClose = () => {
            this.picker.removeEventListener("onTimePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onTimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onTimePickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        
        await this.picker.updateComplete;
        this.picker.showModal(this.textFieldContainer.value);
    }

    /**
     * Handles the selection of a time in the time picker.
     * Updates the value of the text field and dispatches an input event.
     * @private
     */
    handlePickerSelection() {
        const value = stringifyTime(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * Handles click events on the cancel button in the time picker.
     * Closes the time picker dialog.
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * Handles click events on the OK button in the time picker.
     * Updates the value of the text field, dispatches an input event, and closes the dialog.
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyTime(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-time-field", MDTimeFieldComponent);
export { MDTimeFieldComponent };
