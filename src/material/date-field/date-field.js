import { stringifyDate } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-date-field
 * @extends MDTextFieldComponent
 */
class MDDateFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "today" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "date";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-date-field");
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

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

        await this.picker.updateComplete;
        this.picker.showModal(this.textFieldContainer.value);
    }

    /**
     * @private
     */
    handlePickerSelection() {
        const value = stringifyDate(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * @private
     */
    handlePickerButtonOkClick() {
        const value = stringifyDate(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-date-field", MDDateFieldComponent);

export { MDDateFieldComponent };
