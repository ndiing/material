import { getBoundary } from "../functions/functions.js";
import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-color-field
 * @fires MDColorFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDColorFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDColorFieldComponent extends MDTextFieldComponent {
    
    
    /**
     * {{desc}}
     */
    get actions() {
        return [{ name: "picker", icon: "palette" }];
    }
    
    
    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "color";
    }
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-field");
    }
    
    
    /**
     * {{desc}}
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
    handleTextFieldContainerClick() {
        super.handleTextFieldContainerClick();
        this.togglePicker();
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
     */
    handleColorPickerSelection() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
    }
    
    
    /**
     * {{desc}}
     */
    handleColorPickerButtonCancelClick() {
        this.textFieldNative.value.dispatchEvent(new CustomEvent("reset"));
        this.picker.close();
    }
    
    
    /**
     * {{desc}}
     */
    handleColorPickerButtonOkClick() {
        this.textFieldNative.value.value = this.picker.getValue();
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input"));
        this.picker.close();
    }
}
customElements.define("md-color-field", MDColorFieldComponent);
export { MDColorFieldComponent };
