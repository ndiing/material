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
     */
    get actions() {
        return [{ name: "password", icon: this.type === "password" ? "visibility_off" : "visibility" }];
    }

    /**
     * {{desc}}
     */
    set actions(value) {}
    constructor() {
        super();
        this.type = "password";
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-password-field");
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeClick(event) {
        event.preventDefault();
        super.handleTextFieldNativeClick();
    }

    /**
     * {{desc}}
     */
    async handleTextFieldActionClick(event) {
        super.handleTextFieldActionClick(event);
        this.type = this.type === "password" ? "text" : "password";
    }
}
customElements.define("md-password-field", MDPasswordFieldComponent);
export { MDPasswordFieldComponent };
