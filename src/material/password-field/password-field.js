import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-password-field
 * @fires MDPasswordFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDPasswordFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDPasswordFieldComponent extends MDTextFieldComponent {
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
    get actions() {
        return [{ name: "password", icon: this.type === "password" ? "visibility_off" : "visibility" }];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "password";
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
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
    async handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        this.type = this.type === "password" ? "text" : "password";
    }
}
customElements.define("md-password-field", MDPasswordFieldComponent);
export { MDPasswordFieldComponent };
