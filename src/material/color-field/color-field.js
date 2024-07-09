import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{description}}
 * @element md-color-field
 * @extends MDTextFieldComponent
 */
class MDColorFieldComponent extends MDTextFieldComponent {
    /**
     * {{description}}
     */
    get actions() {
        return [{ icon: "palette" }];
    }

    /**
     * {{description}}
     */
    set actions(value) {}

    constructor() {
        super();

        this.type = "color";
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-color-field");
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
    handleTextFieldNativeFocus(event) {
        super.handleTextFieldNativeFocus(event);

        this.showPicker();
    }

    /**
     * @private
     */
    handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);

        this.showPicker();
    }

    showPicker() {
        if(this.pickerShow){return}
        this.pickerShow=true

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

            this.pickerShow=false
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        window.requestAnimationFrame(() => {
            this.picker.showModal(this.container);
        });
    }

    /**
     * @private
     */
    handlePickerSelection() {
        const value = this.picker.selection.hex.slice(0, 1 + 6);
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
        const value = this.picker.selection.hex.slice(0, 1 + 6);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
        this.picker.close();
    }
}

customElements.define("md-color-field", MDColorFieldComponent);

export { MDColorFieldComponent };
