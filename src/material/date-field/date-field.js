import { stringifyDate } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * Represents a date field component extending MDTextFieldComponent.
 * @extends MDTextFieldComponent
 * @tagname md-date-field
 */
class MDDateFieldComponent extends MDTextFieldComponent {
    /**
     * Defines the actions associated with the date field.
     * @returns {Array} An array of actions, each defined by an icon.
     */
    get actions() {
        return [{ icon: "today" }];
    }

    /**
     * Sets the actions associated with the date field.
     * @param {Array} value - An array of actions.
     */
    set actions(value) {}

    constructor() {
        super();

        // Set the input type to date for the date field.
        this.type = "date";
    }

    connectedCallback() {
        super.connectedCallback();

        // Add specific CSS classes to style the date field.
        this.classList.add("md-text-field");
        this.classList.add("md-date-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        // Create a date picker component and handle its events.
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

        window.requestAnimationFrame(() => {
            this.picker.showModal(this.container);
        });
    }

    handlePickerSelection() {
        // Handle selection from the date picker and update the date field value.
        const value = stringifyDate(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
    }

    handlePickerButtonCancelClick() {
        // Handle cancel button click on the date picker.
        this.picker.close();
    }

    handlePickerButtonOkClick() {
        // Handle OK button click on the date picker.
        const value = stringifyDate(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-date-field", MDDateFieldComponent);

export { MDDateFieldComponent };
