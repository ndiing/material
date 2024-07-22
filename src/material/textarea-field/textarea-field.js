import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-textarea-field
 * @fires MDTextareaFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDTextareaFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDTextareaFieldComponent extends MDTextFieldComponent {
    
    
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.type = "textarea";
    }
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-textarea-field");
    }
    
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }
}
customElements.define("md-textarea-field", MDTextareaFieldComponent);
export { MDTextareaFieldComponent };
