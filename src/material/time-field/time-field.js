import { stringifyTime } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @tagname md-time-field
 */
class MDTimeFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ icon: "schedule" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "time";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-time-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
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

        window.requestAnimationFrame(() => {
            this.picker.showModal(this.container);
        });
    }

    handlePickerSelection() {
        const value = stringifyTime(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
    }

    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    handlePickerButtonOkClick() {
        const value = stringifyTime(this.picker.selection);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-time-field", MDTimeFieldComponent);

export { MDTimeFieldComponent };
