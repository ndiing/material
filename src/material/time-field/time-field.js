import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a time and time picker field.
 * @element md-time-field
 * @extends MDTextFieldComponent
 * @fires MDTimeFieldComponent#onTimeFieldActionPickerClick - Event fired when the time-time picker icon is clicked.
 * @fires MDTimeFieldComponent#onTimePickerButtonCancelClick - Event fired when the cancel button is clicked in the time-time picker.
 * @fires MDTimeFieldComponent#onTimePickerButtonOkClick - Event fired when the OK button is clicked in the time-time picker.
 * @fires MDTimeFieldComponent#onTimePickerSelection - Event fired when a time-time selection is made in the picker.
 */
class MDTimeFieldComponent extends MDTextFieldComponent {
    /**
     * Gets the actions for the time-time field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "schedule" }];
    }

    /**
     * Sets the actions for the time-time field.
     * @param {Array} value - The new actions for the time-time field.
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "time";
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-field");
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
            this.handleTimeFieldActionPickerClick(event);
        }
    }

    /**
     * Handles the click event on the time-time picker action icon.
     * @param {Event} event - The click event.
     * @private
     */
    handleTimeFieldActionPickerClick() {
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
     * Displays the time-time picker.
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-time-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleTimePickerButtonCancelClick = this.handleTimePickerButtonCancelClick.bind(this);
        this.handleTimePickerButtonOkClick = this.handleTimePickerButtonOkClick.bind(this);
        this.handleTimePickerSelection = this.handleTimePickerSelection.bind(this);
        this.handleTimePickerMinuteItemClick = this.handleTimePickerMinuteItemClick.bind(this);
        this.picker.addEventListener("onTimePickerButtonCancelClick", this.handleTimePickerButtonCancelClick);
        this.picker.addEventListener("onTimePickerButtonOkClick", this.handleTimePickerButtonOkClick);
        this.picker.addEventListener("onTimePickerSelection", this.handleTimePickerSelection);
        this.picker.addEventListener("onTimePickerMinuteItemClick", this.handleTimePickerMinuteItemClick);
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
            this.picker.removeEventListener("onTimePickerButtonCancelClick", this.handleTimePickerButtonCancelClick);
            this.picker.removeEventListener("onTimePickerButtonOkClick", this.handleTimePickerButtonOkClick);
            this.picker.removeEventListener("onTimePickerSelection", this.handleTimePickerSelection);
            this.picker.removeEventListener("onTimePickerMinuteItemClick", this.handleTimePickerMinuteItemClick);
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
     * Handles the cancel button click event in the time-time picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handleTimePickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * Handles the OK button click event in the time-time picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handleTimePickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * Handles the time-time selection event in the picker.
     * @param {Event} event - The time-time selection event.
     * @private
     */
    handleTimePickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * Handles the time-time selection event in the picker.
     * @param {Event} event - The time-time selection event.
     * @private
     */
    handleTimePickerMinuteItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-time-field", MDTimeFieldComponent);
export { MDTimeFieldComponent };
