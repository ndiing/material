import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-datetime-field
 * @fires MDDatetimeFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDDatetimeFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDDatetimeFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "calendar_clock" }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "datetime-local";
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-field");
    }

    /**
     * {{desc}}
     */
    togglePicker() {
        if (this.pickerOpen) {
            this.picker.close();
        } else {
            this.showPicker();
        }
    }

    /**
     * {{desc}}
     */
    async showPicker() {
        if (this.pickerOpen) {
            return;
        }
        this.pickerOpen = true;
        this.picker = document.createElement("md-datetime-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleDatetimePickerButtonCancelClick = this.handleDatetimePickerButtonCancelClick.bind(this);
        this.handleDatetimePickerButtonOkClick = this.handleDatetimePickerButtonOkClick.bind(this);
        this.handleDatetimePickerSelection = this.handleDatetimePickerSelection.bind(this);
        this.picker.addEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimePickerButtonCancelClick);
        this.picker.addEventListener("onDatetimePickerButtonOkClick", this.handleDatetimePickerButtonOkClick);
        this.picker.addEventListener("onDatetimePickerSelection", this.handleDatetimePickerSelection);
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
            this.picker.removeEventListener("onDatetimePickerButtonCancelClick", this.handleDatetimePickerButtonCancelClick);
            this.picker.removeEventListener("onDatetimePickerButtonOkClick", this.handleDatetimePickerButtonOkClick);
            this.picker.removeEventListener("onDatetimePickerSelection", this.handleDatetimePickerSelection);
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     * @private
     */
    handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        if (event.currentTarget.name === "picker") {
            this.handleDatetimeFieldActionPickerClick(event);
        }
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatetimeFieldActionPickerClick() {
        this.togglePicker();
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatetimePickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatetimePickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatetimePickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-datetime-field", MDDatetimeFieldComponent);
export { MDDatetimeFieldComponent };
