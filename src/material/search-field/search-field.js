import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-search-field
 * @fires MDSearchFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDSearchFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDSearchFieldComponent extends MDTextFieldComponent {
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
        return [...((this.value && [{ name: "clear", icon: "close" }]) || [])];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "search";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-search-field");
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
    async handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        this.textFieldNative.value.value = "";
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
        this.textFieldNative.value.dispatchEvent(new CustomEvent("search", {}));
    }
}
customElements.define("md-search-field", MDSearchFieldComponent);
export { MDSearchFieldComponent };
