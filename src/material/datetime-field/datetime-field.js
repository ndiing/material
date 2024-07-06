import { stringifyDatetimeLocal } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

class MDDatetimeFieldComponent extends MDTextFieldComponent {
    get actions() {
        return [{ icon: "calendar_today" }];
    }

    set actions(value) {}

    constructor() {
        super();

        this.type = "datetime-local";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-datetime-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
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

        this.picker.showModal(this.container);
    }

    handlePickerSelection(event) {
        const value = stringifyDatetimeLocal(this.picker.selection);
        this.native.value = value;
        this.value = value;
    }

    handlePickerButtonCancelClick(event) {
        this.picker.close();
    }

    handlePickerButtonOkClick(event) {
        const value = stringifyDatetimeLocal(this.picker.selection);
        this.native.value = value;
        this.value = value;
    }
}

customElements.define("md-datetime-field", MDDatetimeFieldComponent);

export { MDDatetimeFieldComponent };
