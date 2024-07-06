import { stringifyColor } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @tagname md-color-field
 */
class MDColorFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ icon: "palette" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "color";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-color-field");
    }

    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        this.picker = document.createElement("md-color-picker");
        if (this.value) {
            this.picker.value = this.value;
        }

        this.parentElement.insertBefore(this.picker, this.nextElementSibling);

        this.handlePickerSelection = this.handlePickerSelection.bind(this);
        this.handlePickerButtonCancelClick = this.handlePickerButtonCancelClick.bind(this);
        this.handlePickerButtonOkClick = this.handlePickerButtonOkClick.bind(this);

        this.picker.addEventListener("onColorPickerSelection", this.handlePickerSelection);
        this.picker.addEventListener("onColorPickerButtonCancelClick", this.handlePickerButtonCancelClick);
        this.picker.addEventListener("onColorPickerButtonOkClick", this.handlePickerButtonOkClick);

        const handleSheetClose = () => {
            this.picker.removeEventListener("onColorPickerSelection", this.handlePickerSelection);
            this.picker.removeEventListener("onColorPickerButtonCancelClick", this.handlePickerButtonCancelClick);
            this.picker.removeEventListener("onColorPickerButtonOkClick", this.handlePickerButtonOkClick);

            this.picker.removeEventListener("onSheetClose", handleSheetClose);
            this.picker.remove();
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        this.picker.showModal(this.container);
    }

    handlePickerSelection(event) {
        const value = this.picker.selection.hex.slice(0,1+6);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent('input',{}))
        // this.value = value;
    }

    handlePickerButtonCancelClick(event) {
        this.picker.close();
    }

    handlePickerButtonOkClick(event) {
        const value = this.picker.selection.hex.slice(0,1+6);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent('input',{}))
        // this.value = value;
        this.picker.close();
    }
}

customElements.define("md-color-field", MDColorFieldComponent);

export { MDColorFieldComponent };
