import { MDTextFieldComponent } from "../text-field/text-field.js";

/**
 * {{desc}}
 * @extends MDTextFieldComponent
 * @element md-number-field
 * @fires MDNumberFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDNumberFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDNumberFieldComponent extends MDTextFieldComponent {
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
        return [
            { name: "subtract", icon: "remove" },
            { name: "add", icon: "add" },
        ];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "number";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-number-field");
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
        const name = event.currentTarget.name;
        if (name === "subtract") {
            this.textFieldNative.value.stepDown();
        } else if (name === "add") {
            this.textFieldNative.value.stepUp();
        }
        this.textFieldNative.value.dispatchEvent(new CustomEvent("input", {}));
    }
}
customElements.define("md-number-field", MDNumberFieldComponent);
export { MDNumberFieldComponent };
