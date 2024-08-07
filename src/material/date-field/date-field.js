import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-date-field
 * @fires MDDateFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDDateFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDDateFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "today" }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "date";
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-date-field");
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
        this.picker = document.createElement("md-date-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleDatePickerButtonCancelClick = this.handleDatePickerButtonCancelClick.bind(this);
        this.handleDatePickerButtonOkClick = this.handleDatePickerButtonOkClick.bind(this);
        this.handleDatePickerSelection = this.handleDatePickerSelection.bind(this);
        this.handleDatePickerDayItemClick = this.handleDatePickerDayItemClick.bind(this);
        this.picker.addEventListener("onDatePickerButtonCancelClick", this.handleDatePickerButtonCancelClick);
        this.picker.addEventListener("onDatePickerButtonOkClick", this.handleDatePickerButtonOkClick);
        this.picker.addEventListener("onDatePickerSelection", this.handleDatePickerSelection);
        this.picker.addEventListener("onDatePickerDayItemClick", this.handleDatePickerDayItemClick);
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
            this.picker.removeEventListener("onDatePickerButtonCancelClick", this.handleDatePickerButtonCancelClick);
            this.picker.removeEventListener("onDatePickerButtonOkClick", this.handleDatePickerButtonOkClick);
            this.picker.removeEventListener("onDatePickerSelection", this.handleDatePickerSelection);
            this.picker.removeEventListener("onDatePickerDayItemClick", this.handleDatePickerDayItemClick);
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
            this.handleDateFieldActionPickerClick(event);
        }
    }

    /**
     * {{desc}}
     * @private
     */
    handleDateFieldActionPickerClick() {
        this.togglePicker();
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatePickerDayItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatePickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatePickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * {{desc}}
     * @private
     */
    handleDatePickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-date-field", MDDateFieldComponent);
export { MDDateFieldComponent };
