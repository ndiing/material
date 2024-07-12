import { stringifyMonth } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Custom component for selecting a month.
 * @element md-month-field
 * @extends MDTextFieldComponent
 */
class MDMonthFieldComponent extends MDTextFieldComponent {
    /**
     * Gets the actions for the month field.
     * @returns {Array} Array containing action objects.
     */
    get actions() {
        return [{ icon: "calendar_month" }];
    }

    /**
     * Sets the actions for the month field.
     * This setter is intentionally left empty.
     * @param {Array} value - The new actions.
     */
    set actions(value) {}

    /**
     * Constructs an instance of MDMonthFieldComponent.
     * Sets the input type to "month".
     */
    constructor() {
        super();
        this.type = "month";
    }

    /**
     * Invoked when the component is added to the document's DOM.
     * Adds the necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-month-field");
    }

    /**
     * Handles click events on the native text field.
     * Prevents the default action and calls the superclass method.
     * @private
     * @param {Event} event - The click event.
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * Handles click events on the icon button.
     * Creates and shows the month picker.
     * @private
     * @param {Event} event - The click event.
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.picker = document.createElement("md-month-picker");
        if (this.value) {
            this.picker.value = this.value;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.picker.addEventListener("onMonthPickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onMonthPickerButtonOkClick", this.handlePickerButtonOkClick);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onMonthPickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onMonthPickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onMonthPickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        await this.picker.updateComplete;
        this.picker.showModal(this.textFieldContainer.value);
    }

    /**
     * Handles the selection event from the month picker.
     * Sets the selected value to the native text field.
     * @private
     */
    handlePickerSelection() {
        const value = stringifyMonth(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * Handles the cancel button click event on the month picker.
     * Closes the picker.
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * Handles the OK button click event on the month picker.
     * Sets the selected value to the native text field and closes the picker.
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyMonth(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}
customElements.define("md-month-field", MDMonthFieldComponent);
export { MDMonthFieldComponent };
