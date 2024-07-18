import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a month and time picker field.
 * @element md-month-field
 * @extends MDTextFieldComponent
 * @fires MDMonthFieldComponent#onMonthFieldActionPickerClick - Event fired when the month-time picker icon is clicked.
 * @fires MDMonthFieldComponent#onMonthPickerButtonCancelClick - Event fired when the cancel button is clicked in the month-time picker.
 * @fires MDMonthFieldComponent#onMonthPickerButtonOkClick - Event fired when the OK button is clicked in the month-time picker.
 * @fires MDMonthFieldComponent#onMonthPickerSelection - Event fired when a month-time selection is made in the picker.
 */
class MDMonthFieldComponent extends MDTextFieldComponent {
    /**
     * Gets the actions for the month-time field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "calendar_month" }];
    }

    /**
     * Sets the actions for the month-time field.
     * @param {Array} value - The new actions for the month-time field.
     */
    set actions(value) {}

    constructor() {
        super();
        this.type = "month";
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
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
            this.handleMonthFieldActionPickerClick(event);
        }
    }

    /**
     * Handles the click event on the month-time picker action icon.
     * @param {Event} event - The click event.
     * @private
     */
    handleMonthFieldActionPickerClick() {
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
     * Displays the month-time picker.
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-month-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleMonthPickerButtonCancelClick = this.handleMonthPickerButtonCancelClick.bind(this);
        this.handleMonthPickerButtonOkClick = this.handleMonthPickerButtonOkClick.bind(this);
        this.handleMonthPickerSelection = this.handleMonthPickerSelection.bind(this);
        this.handleMonthPickerMonthItemClick = this.handleMonthPickerMonthItemClick.bind(this);
        this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handleMonthPickerButtonCancelClick);
        this.picker.addEventListener("onMonthPickerButtonOkClick", this.handleMonthPickerButtonOkClick);
        this.picker.addEventListener("onMonthPickerSelection", this.handleMonthPickerSelection);
        this.picker.addEventListener("onMonthPickerMonthItemClick", this.handleMonthPickerMonthItemClick);

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
            this.picker.removeEventListener("onMonthPickerButtonCancelClick", this.handleMonthPickerButtonCancelClick);
            this.picker.removeEventListener("onMonthPickerButtonOkClick", this.handleMonthPickerButtonOkClick);
            this.picker.removeEventListener("onMonthPickerSelection", this.handleMonthPickerSelection);
            this.picker.removeEventListener("onMonthPickerMonthItemClick", this.handleMonthPickerMonthItemClick);
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
     * Handles the cancel button click event in the month-time picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handleMonthPickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * Handles the OK button click event in the month-time picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handleMonthPickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * Handles the month-time selection event in the picker.
     * @param {Event} event - The month-time selection event.
     * @private
     */
    handleMonthPickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * Handles the month-time selection event in the picker.
     * @param {Event} event - The month-time selection event.
     * @private
     */
    handleMonthPickerMonthItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-month-field", MDMonthFieldComponent);
export { MDMonthFieldComponent };
