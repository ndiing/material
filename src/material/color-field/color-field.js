import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * A custom element that provides a color and color picker field.
 * @element md-color-field
 * @extends MDTextFieldComponent
 * @fires MDColorFieldComponent#onColorFieldActionPickerClick - Event fired when the color-color picker icon is clicked.
 * @fires MDColorFieldComponent#onColorPickerButtonCancelClick - Event fired when the cancel button is clicked in the color-color picker.
 * @fires MDColorFieldComponent#onColorPickerButtonOkClick - Event fired when the OK button is clicked in the color-color picker.
 * @fires MDColorFieldComponent#onColorPickerSelection - Event fired when a color-color selection is made in the picker.
 */
class MDColorFieldComponent extends MDTextFieldComponent {
    /**
     * Gets the actions for the color-color field.
     * @returns {Array} - An array of action objects, each containing a name and an icon.
     */
    get actions() {
        return [{ name: "picker", icon: "palette" }];
    }

    /**
     * Sets the actions for the color-color field.
     * @param {Array} value - The new actions for the color-color field.
     */
    set actions(value) {}

    constructor() {
        super();
        this.type = "color";
    }

    /**
     * Callback for when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-field");
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();

        super.handleTextFieldNativeClick();
    }

    /**
     * @private
     */
    handleTextFieldContainerClick(event) {
        super.handleTextFieldContainerClick();
        this.togglePicker();
    }

    togglePicker() {
        if (this.pickerOpen) {
            this.picker.close();
        } else {
            this.showPicker();
        }
    }

    /**
     * Displays the color-color picker.
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-color-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleColorPickerButtonCancelClick = this.handleColorPickerButtonCancelClick.bind(this);
        this.handleColorPickerButtonOkClick = this.handleColorPickerButtonOkClick.bind(this);
        this.handleColorPickerSelection = this.handleColorPickerSelection.bind(this);
        this.picker.addEventListener("onColorPickerButtonCancelClick", this.handleColorPickerButtonCancelClick);
        this.picker.addEventListener("onColorPickerButtonOkClick", this.handleColorPickerButtonOkClick);
        this.picker.addEventListener("onColorPickerSelection", this.handleColorPickerSelection);

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
            this.picker.removeEventListener("onColorPickerButtonCancelClick", this.handleColorPickerButtonCancelClick);
            this.picker.removeEventListener("onColorPickerButtonOkClick", this.handleColorPickerButtonOkClick);
            this.picker.removeEventListener("onColorPickerSelection", this.handleColorPickerSelection);
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
     * Handles the cancel button click event in the color-color picker.
     * @param {Event} event - The cancel button click event.
     * @private
     */
    handleColorPickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * Handles the OK button click event in the color-color picker.
     * @param {Event} event - The OK button click event.
     * @private
     */
    handleColorPickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * Handles the color-color selection event in the picker.
     * @param {Event} event - The color-color selection event.
     * @private
     */
    handleColorPickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }
}
customElements.define("md-color-field", MDColorFieldComponent);
export { MDColorFieldComponent };
