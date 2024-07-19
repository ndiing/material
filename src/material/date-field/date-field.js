import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a date and time picker field.
 * @element md-date-field
 * @extends MDTextFieldComponent
 * @fires MDDateFieldComponent#onDateFieldActionPickerClick - Event fired when the date-time picker icon is clicked.
 * @fires MDDateFieldComponent#onDatePickerButtonCancelClick - Event fired when the cancel button is clicked in the date-time picker.
 * @fires MDDateFieldComponent#onDatePickerButtonOkClick - Event fired when the OK button is clicked in the date-time picker.
 * @fires MDDateFieldComponent#onDatePickerSelection - Event fired when a date-time selection is made in the picker.
 */
class MDDateFieldComponent extends MDTextFieldComponent {

    /**
     * Gets the actions for the date-time field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "today" }];
    }

    /**
     * Sets the actions for the date-time field.
     * @param {Array} value - The new actions for the date-time field.
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "date";
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
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
            this.handleDateFieldActionPickerClick(event);
        }
    }

    /**
     * Handles the click event on the date-time picker action icon.
     * @param {Event} event - The click event.
     * @private
     */
    handleDateFieldActionPickerClick() {
        this.togglePicker();
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
        this.picker = document.createElement("md-date-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleDatePickerButtonCancelClick = this.handleDatePickerButtonCancelClick.bind(this);
        this.handleDatePickerButtonOkClick = this.handleDatePickerButtonOkClick.bind(this);
        this.handleDatePickerSelection = this.handleDatePickerSelection.bind(this);
        this.handleDatePickerDayItemClick = this.handleDatePickerDayItemClick.bind(this);
        this.picker.addEventListener("onDatePickerButtonCancelClick", this.handleDatePickerButtonCancelClick);
        this.picker.addEventListener("onDatePickerButtonOkClick", this.handleDatePickerButtonOkClick);
        this.picker.addEventListener("onDatePickerSelection", this.handleDatePickerSelection);
        this.picker.addEventListener("onDatePickerDayItemClick", this.handleDatePickerDayItemClick);
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
            this.picker.removeEventListener("onDatePickerButtonCancelClick", this.handleDatePickerButtonCancelClick);
            this.picker.removeEventListener("onDatePickerButtonOkClick", this.handleDatePickerButtonOkClick);
            this.picker.removeEventListener("onDatePickerSelection", this.handleDatePickerSelection);
            this.picker.removeEventListener("onDatePickerDayItemClick", this.handleDatePickerDayItemClick);
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
     * Handles the cancel button click event in the date-time picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handleDatePickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * Handles the OK button click event in the date-time picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handleDatePickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * Handles the date-time selection event in the picker.
     * @param {Event} event - The date-time selection event.
     * @private
     */
    handleDatePickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * Handles the date-time selection event in the picker.
     * @param {Event} event - The date-time selection event.
     * @private
     */
    handleDatePickerDayItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-date-field", MDDateFieldComponent);
export { MDDateFieldComponent };
