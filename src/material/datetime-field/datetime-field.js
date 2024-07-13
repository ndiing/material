import { MDComponent } from "../component/component.js";
import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a date and time picker field.
 * @element md-datetime-field
 * @extends MDTextFieldComponent
 * @fires MDDateTimeFieldComponent#onDatetimeFieldActionPickerClick - Event fired when the date-time picker icon is clicked.
 * @fires MDDateTimeFieldComponent#onDatetimePickerButtonCancelClick - Event fired when the cancel button is clicked in the date-time picker.
 * @fires MDDateTimeFieldComponent#onDatetimePickerButtonOkClick - Event fired when the OK button is clicked in the date-time picker.
 * @fires MDDateTimeFieldComponent#onDatetimePickerSelection - Event fired when a date-time selection is made in the picker.
 */
class MDDateTimeFieldComponent extends MDTextFieldComponent {
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
    handleDatetimeFieldActionPickerClick(event) {
        this.showPicker();
        this.emit("onDatetimeFieldActionPickerClick", event);
    }

    /**
     * Displays the date-time picker.
     */
    showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-datetime-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);
        this.picker.addEventListener("onDatetimePickerSelection", this.handlePickerSelection);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);
            this.picker.removeEventListener("onDatetimePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.boundary.addEventListener("scroll", handleScroll);
            this.boundary.addEventListener("click", handleClick);
            this.pickerOpen = false;
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        this.boundary = getBoundary(this);

        const handleScroll = () => {
            this.picker.close();
            this.boundary.removeEventListener("scroll", handleScroll);
        };
        this.boundary.addEventListener("scroll", handleScroll);

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
        this.boundary.addEventListener("click", handleClick);

        this.picker.show(this.textFieldContainer.value);
    }

    /**
     * Handles the cancel button click event in the date-time picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handlePickerButtonCancelClick(event) {
        this.textFieldNative.value.value = this.defaultValue;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
        this.emit("onDatetimePickerButtonCancelClick", event);
    }

    /**
     * Handles the OK button click event in the date-time picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handlePickerButtonOkClick(event) {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
        this.emit("onDatetimePickerButtonOkClick", event);
    }

    /**
     * Handles the date-time selection event in the picker.
     * @param {Event} event - The date-time selection event.
     * @private
     */
    handlePickerSelection(event) {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.emit("onDatetimePickerSelection", event);
    }
}
customElements.define("md-datetime-field", MDDateTimeFieldComponent);
export { MDDateTimeFieldComponent };
