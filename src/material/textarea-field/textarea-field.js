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
     * @property {String} tooltip - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} icon - {{desc}}
     * @property {String} prefix - {{desc}}
     * @property {String} suffix - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {String} text - {{desc}}
     * @property {String} type - {{desc}}
     * @property {String} placeholder - {{desc}}
     * @property {String} name - {{desc}}
     * @property {String} value - {{desc}}
     * @property {Number} min - {{desc}}
     * @property {Number} max - {{desc}}
     * @property {Number} cols - {{desc}}
     * @property {Number} rows - {{desc}}
     * @property {Number} minLength - {{desc}}
     * @property {Number} maxLength - {{desc}}
     * @property {String} pattern - {{desc}}
     * @property {Boolean} required - {{desc}}
     * @property {Boolean} readOnly - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     * @property {String} autocomplete - {{desc}}
     * @property {Boolean} multiple - {{desc}}
     * @property {Array} options - {{desc}}
     * @property {Boolean} validationMessage - {{desc}}
     * @property {Boolean} focused - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {String} mask - {{desc}}
     */
    static properties = {
        ...MDTextFieldComponent.properties,
    };

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
