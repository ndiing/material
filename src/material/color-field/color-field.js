import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom color picker input field component.
 * @element md-color-field
 * @extends MDTextFieldComponent
 */
class MDColorFieldComponent extends MDTextFieldComponent {
    /**
     * Returns the actions for the color field.
     * @return {Array} - An array of actions with an icon.
     */
    get actions() {
        return [{ icon: "palette" }];
    }

    /**
     * No-op setter for actions, included for completeness.
     * @param {Array} value - The value to set.
     */
    set actions(value) {}

    /**
     * Creates an instance of MDColorFieldComponent.
     */
    constructor() {
        super();

        this.type = "color";
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
        this.classList.add("md-color-field");
    }

    /**
     * Handles click events on the native text field.
     * @param {Event} event - The click event object.
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick(event);
    }

    /**
     * Handles focus events on the native text field.
     * @param {Event} event - The focus event object.
     * @private
     */
    handleTextFieldNativeFocus(event) {
        super.handleTextFieldNativeFocus(event);
        this.showPicker();
    }

    /**
     * Handles click events on the text field icon button.
     * @param {Event} event - The click event object.
     * @private
     */
    async handleTextFieldIconButtonClick(event) {
        super.handleTextFieldIconButtonClick(event);
        this.showPicker();
    }

    /**
     * Displays the color picker.
     * @private
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;

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

            this.pickerOpen = false;
        };
        this.picker.addEventListener("onSheetClose", handleSheetClose);

        await this.picker.updateComplete;
        this.picker.showModal(this.container);
    }

    /**
     * Handles color selection from the picker.
     * @private
     */
    handlePickerSelection() {
        const value = this.picker.selection.hex.slice(0, 1 + 6);
        this.native.value = value;
        this.native.dispatchEvent(new CustomEvent("input", {}));
    }

    /**
     * Handles the cancel button click on the picker.
     * @private
     */
    handlePickerButtonCancelClick() {
        this.picker.close();
    }

    /**
     * Handles the OK button click on the picker.
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
