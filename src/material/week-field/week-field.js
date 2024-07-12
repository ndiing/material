import { stringifyWeek } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Custom component for selecting a week.
 * @element md-week-field
 * @extends MDTextFieldComponent
 */
class MDWeekFieldComponent extends MDTextFieldComponent {
    /**
     * Gets the actions for the week field.
     * @returns {Array} Array containing action objects.
     */
    get actions() {
        return [{ icon: "date_range" }];
    }

    /**
     * Sets the actions for the week field.
     * This setter is intentionally left empty.
     * @param {Array} value - The new actions.
     */
    set actions(value) {}

    /**
     * Constructs an instance of MDWeekFieldComponent.
     * Sets the input type to "week".
     */
    constructor() {
        super();
        this.type = "week";
    }

    /**
     * Invoked when the component is added to the document's DOM.
     * Adds the necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-week-field");
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
     * Creates and shows the week picker.
     * @private
     * @param {Event} event - The click event.
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.picker = document.createElement("md-week-picker");
        if (this.value) {
            this.picker.value = this.value;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.picker.addEventListener("onWeekPickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onWeekPickerButtonOkClick", this.handlePickerButtonOkClick);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onWeekPickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        await this.picker.updateComplete;
        this.picker.showModal(this.textFieldContainer.value);
    }

    /**
     * Handles the selection event from the week picker.
     * Sets the selected value to the native text field.
     * @private
     */
    handlePickerSelection() {
        const value = stringifyWeek(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * Handles the cancel button click event on the week picker.
     * Closes the picker.
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * Handles the OK button click event on the week picker.
     * Sets the selected value to the native text field and closes the picker.
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyWeek(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-week-field", MDWeekFieldComponent);
export { MDWeekFieldComponent };
