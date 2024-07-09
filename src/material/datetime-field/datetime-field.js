import { stringifyDatetimeLocal } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-datetime-field
 * @extends MDTextFieldComponent
 */
class MDDatetimeFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "calendar_clock" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "datetime-local";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-datetime-field");
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

        this.picker = document.createElement("md-datetime-picker");
        if (this.value) {
            this.picker.value = this.value;
        }

        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);

        this.picker.addEventListener("onDatetimePickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);

        const handleSheetClose = () => {
            this.picker.removeEventListener("onDatetimePickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handlePickerButtonOkClick);

            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        await this.picker.updateComplete;
        this.picker.showModal(this.container);
    }

    /**
     * @private
     */
    handlePickerSelection() {
        const value = stringifyDatetimeLocal(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
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
        const value = stringifyDatetimeLocal(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
    }
}

customElements.define("md-datetime-field", MDDatetimeFieldComponent);

export { MDDatetimeFieldComponent };
