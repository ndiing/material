import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a week and time picker field.
 * @element md-week-field
 * @extends MDTextFieldComponent
 * @fires MDWeekFieldComponent#onWeekFieldActionPickerClick - Event fired when the week-time picker icon is clicked.
 * @fires MDWeekFieldComponent#onWeekPickerButtonCancelClick - Event fired when the cancel button is clicked in the week-time picker.
 * @fires MDWeekFieldComponent#onWeekPickerButtonOkClick - Event fired when the OK button is clicked in the week-time picker.
 * @fires MDWeekFieldComponent#onWeekPickerSelection - Event fired when a week-time selection is made in the picker.
 */
class MDWeekFieldComponent extends MDTextFieldComponent {

    /**
     * Gets the actions for the week-time field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "date_range" }];
    }

    /**
     * Sets the actions for the week-time field.
     * @param {Array} value - The new actions for the week-time field.
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "week";
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-week-field");
    }
    togglePicker() {
        if (this.pickerOpen) {
            this.picker.close();
        } else {
            this.showPicker();
        }
    }

    /**
     * Displays the week-time picker.
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-week-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleWeekPickerButtonCancelClick = this.handleWeekPickerButtonCancelClick.bind(this);
        this.handleWeekPickerButtonOkClick = this.handleWeekPickerButtonOkClick.bind(this);
        this.handleWeekPickerSelection = this.handleWeekPickerSelection.bind(this);
        this.handleWeekPickerDayItemClick = this.handleWeekPickerDayItemClick.bind(this);
        this.picker.addEventListener("onWeekPickerButtonCancelClick", this.handleWeekPickerButtonCancelClick);
        this.picker.addEventListener("onWeekPickerButtonOkClick", this.handleWeekPickerButtonOkClick);
        this.picker.addEventListener("onWeekPickerSelection", this.handleWeekPickerSelection);
        this.picker.addEventListener("onWeekPickerDayItemClick", this.handleWeekPickerDayItemClick);
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
            this.picker.removeEventListener("onWeekPickerButtonCancelClick", this.handleWeekPickerButtonCancelClick);
            this.picker.removeEventListener("onWeekPickerButtonOkClick", this.handleWeekPickerButtonOkClick);
            this.picker.removeEventListener("onWeekPickerSelection", this.handleWeekPickerSelection);
            this.picker.removeEventListener("onWeekPickerDayItemClick", this.handleWeekPickerDayItemClick);
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
            this.handleWeekFieldActionPickerClick(event);
        }
    }

    /**
     * Handles the click event on the week-time picker action icon.
     * @param {Event} event - The click event.
     * @private
     */
    handleWeekFieldActionPickerClick() {
        this.togglePicker();
    }

    /**
     * Handles the week-time selection event in the picker.
     * @param {Event} event - The week-time selection event.
     * @private
     */
    handleWeekPickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * Handles the week-time selection event in the picker.
     * @param {Event} event - The week-time selection event.
     * @private
     */
    handleWeekPickerDayItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * Handles the cancel button click event in the week-time picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handleWeekPickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * Handles the OK button click event in the week-time picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handleWeekPickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-week-field", MDWeekFieldComponent);
export { MDWeekFieldComponent };
