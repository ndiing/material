import { stringifyDate } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @tagname md-date-field
 */
class MDDateFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ icon: "today" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "date";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-date-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
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

        this.picker.showModal(this.container);
    }

    handlePickerSelection(event) {
        const value = stringifyDate(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        // this.value = value;
    }

    handlePickerButtonCancelClick(event) {
        this.picker.close();
    }

    handlePickerButtonOkClick(event) {
        const value = stringifyDate(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        // this.value = value;
        this.picker.close();
    }
}

customElements.define("md-date-field", MDDateFieldComponent);

export { MDDateFieldComponent };
