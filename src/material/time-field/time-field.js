import { stringifyTime } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-time-field
 * @extends MDTextFieldComponent
 */
class MDTimeFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "schedule" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "time";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.classList.add("md-time-field");
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
        this.picker = document.createElement("md-time-picker");
        if (this.value) {
            this.picker.value = this.value;
        }
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);
        this.picker.addEventListener("onTimePickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onTimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onTimePickerButtonOkClick", this.handlePickerButtonOkClick);
        const handleSheetClose = () => {
            this.picker.removeEventListener("onTimePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onTimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onTimePickerButtonOkClick", this.handlePickerButtonOkClick);
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
        const value = stringifyTime(this.picker.selection);
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
        const value = stringifyTime(this.picker.selection);
        this.textFieldNative.value.value = value;
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}
customElements.define("md-time-field", MDTimeFieldComponent);
export { MDTimeFieldComponent };
