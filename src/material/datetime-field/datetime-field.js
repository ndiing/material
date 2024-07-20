import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a date and time picker field.
 * @element md-datetime-field
 * @extends MDTextFieldComponent
 * @fires MDDatetimeFieldComponent#onDatetimeFieldActionPickerClick - Event fired when the date-time picker icon is clicked.
 * @fires MDDatetimeFieldComponent#onDatetimePickerButtonCancelClick - Event fired when the cancel button is clicked in the date-time picker.
 * @fires MDDatetimeFieldComponent#onDatetimePickerButtonOkClick - Event fired when the OK button is clicked in the date-time picker.
 * @fires MDDatetimeFieldComponent#onDatetimePickerSelection - Event fired when a date-time selection is made in the picker.
 */
class MDDatetimeFieldComponent extends MDTextFieldComponent {

    /**
     * Gets the actions for the date-time field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "calendar_clock" }];
    }

    /**
     * Sets the actions for the date-time field.
     * @param {Array} value - The new actions for the date-time field.
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "datetime-local";
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }
    togglePicker() {
        if (this.pickerOpen) {
            this.picker.close();
        } else {
            this.showPicker();
        }
    }

    /**
     * Displays the date-time picker.
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-datetime-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleDatetimePickerButtonCancelClick = this.handleDatetimePickerButtonCancelClick.bind(this);
        this.handleDatetimePickerButtonOkClick = this.handleDatetimePickerButtonOkClick.bind(this);
        this.handleDatetimePickerSelection = this.handleDatetimePickerSelection.bind(this);
        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimePickerButtonCancelClick);
        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimePickerButtonOkClick);
        this.picker.addEventListener("onDatetimePickerSelection", this.handleDatetimePickerSelection);
        const handleScroll = () => {
            this.picker.close();
            this.boundary.removeEventListener("scroll", handleScroll);
        };
        const handleClick = (event) => {
            let current = event.target;
            let matches;
            while (current) {
                matches = matches || current === this || current === this.picker;
                current = current.parentElement;
            }
            if (!matches) {
                this.picker.close();
                this.boundary.removeEventListener("click", handleClick);
            }
        };
        const handleSheetClose = () => {
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimePickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handleDatetimePickerButtonOkClick);
            this.picker.removeEventListener("onDatetimePickerSelection", this.handleDatetimePickerSelection);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.boundary.removeEventListener("scroll", handleScroll);
            this.boundary.removeEventListener("click", handleClick);
            this.pickerOpen = false;
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);
        this.boundary = getBoundary(this);
        this.boundary.addEventListener("scroll", handleScroll);
        this.boundary.addEventListener("click", handleClick);
        await this.picker.updateComplete;
        this.picker.show(this.textFieldContainer.value);
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    /**
     * Handles the click event on the text field action icon.
     * @param {Event} event - The click event.
     * @private
     */
    handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        if (event.currentTarget.name === "picker") {
            this.handleDatetimeFieldActionPickerClick(event);
        }
    }

    /**
     * Handles the click event on the date-time picker action icon.
     * @param {Event} event - The click event.
     * @private
     */
    handleDatetimeFieldActionPickerClick() {
        this.togglePicker();
    }

    /**
     * Handles the date-time selection event in the picker.
     * @param {Event} event - The date-time selection event.
     * @private
     */
    handleDatetimePickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * Handles the cancel button click event in the date-time picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handleDatetimePickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * Handles the OK button click event in the date-time picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handleDatetimePickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-datetime-field", MDDatetimeFieldComponent);
export { MDDatetimeFieldComponent };
