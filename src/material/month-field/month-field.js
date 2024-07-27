import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-month-field
 * @fires MDMonthFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDMonthFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDMonthFieldComponent extends MDTextFieldComponent {
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "calendar_month" }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "month";
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-month-field");
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
        this.picker = document.createElement("md-month-picker");
        this.picker.value = this.value;
        this.parentElement.insertBefore(this.picker, this.nextElementSibling);
        this.handleMonthPickerButtonCancelClick = this.handleMonthPickerButtonCancelClick.bind(this);
        this.handleMonthPickerButtonOkClick = this.handleMonthPickerButtonOkClick.bind(this);
        this.handleMonthPickerSelection = this.handleMonthPickerSelection.bind(this);
        this.handleMonthPickerMonthItemClick = this.handleMonthPickerMonthItemClick.bind(this);
        this.picker.addEventListener("onMonthPickerButtonCancelClick", this.handleMonthPickerButtonCancelClick);
        this.picker.addEventListener("onMonthPickerButtonOkClick", this.handleMonthPickerButtonOkClick);
        this.picker.addEventListener("onMonthPickerSelection", this.handleMonthPickerSelection);
        this.picker.addEventListener("onMonthPickerMonthItemClick", this.handleMonthPickerMonthItemClick);
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
            this.picker.removeEventListener("onMonthPickerButtonCancelClick", this.handleMonthPickerButtonCancelClick);
            this.picker.removeEventListener("onMonthPickerButtonOkClick", this.handleMonthPickerButtonOkClick);
            this.picker.removeEventListener("onMonthPickerSelection", this.handleMonthPickerSelection);
            this.picker.removeEventListener("onMonthPickerMonthItemClick", this.handleMonthPickerMonthItemClick);
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
            this.handleMonthFieldActionPickerClick(event);
        }
    }

    /**
     * {{desc}}
     * @private
     */
    handleMonthPickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }

    /**
     * {{desc}}
     * @private
     */
    handleMonthPickerMonthItemClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }

    /**
     * {{desc}}
     * @private
     */
    handleMonthFieldActionPickerClick() {
        this.togglePicker();
    }

    /**
     * {{desc}}
     * @private
     */
    handleMonthPickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }

    /**
     * {{desc}}
     * @private
     */
    handleMonthPickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-month-field", MDMonthFieldComponent);
export { MDMonthFieldComponent };
