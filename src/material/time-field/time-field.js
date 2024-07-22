import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-time-field
 * @fires MDTimeFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDTimeFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDTimeFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "schedule" }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "time";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-field");
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        if (event.currentTarget.name === "picker") {
            this.handleTimeFieldActionPickerClick(event);
        }
    }

    /**
     * {{desc}}
     */
    handleTimeFieldActionPickerClick() {
        this.togglePicker();
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
        this.picker = document.createElement("md-time-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleTimePickerButtonCancelClick = this.handleTimePickerButtonCancelClick.bind(this);
        this.handleTimePickerButtonOkClick = this.handleTimePickerButtonOkClick.bind(this);
        this.handleTimePickerSelection = this.handleTimePickerSelection.bind(this);
        this.handleTimePickerMinuteItemClick = this.handleTimePickerMinuteItemClick.bind(this);
        this.picker.addEventListener("onTimePickerButtonCancelClick", this.handleTimePickerButtonCancelClick);
        this.picker.addEventListener("onTimePickerButtonOkClick", this.handleTimePickerButtonOkClick);
        this.picker.addEventListener("onTimePickerSelection", this.handleTimePickerSelection);
        this.picker.addEventListener("onTimePickerMinuteItemClick", this.handleTimePickerMinuteItemClick);
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
            this.picker.removeEventListener("onTimePickerButtonCancelClick", this.handleTimePickerButtonCancelClick);
            this.picker.removeEventListener("onTimePickerButtonOkClick", this.handleTimePickerButtonOkClick);
            this.picker.removeEventListener("onTimePickerSelection", this.handleTimePickerSelection);
            this.picker.removeEventListener("onTimePickerMinuteItemClick", this.handleTimePickerMinuteItemClick);
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
     */
    handleTimePickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * {{desc}}
     */
    handleTimePickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * {{desc}}
     */
    handleTimePickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * {{desc}}
     */
    handleTimePickerMinuteItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-time-field", MDTimeFieldComponent);
export { MDTimeFieldComponent };
