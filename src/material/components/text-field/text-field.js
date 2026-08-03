import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdTextField extends MdElement {
    static formAssociated = true;

    static properties = {
        label: { type: String },
        supporting: { type: String },
        type: { type: String },
        name: { type: String },
        value: { type: String },
        placeholder: { type: String },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        required: { type: Boolean },
        minLength: { type: Number },
        maxLength: { type: Number },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        pattern: { type: String },
        autocomplete: { type: String },
        validateOnInput: { type: Boolean },
        validateOnBlur: { type: Boolean },
        validationMessage: { type: String, state: true },
        variant: { type: String },
    };

    textFieldNative = createRef();

    variants = ["default", "filled", "outlined"];

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.validateOnInput = true;
        this.variant = "filled";
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.label?html`<label class="md-text-field__label">${this.label}</label>`:nothing}
            <div class="md-text-field__container">
                <!-- <div class="md-text-field__leading"></div> -->
                <input 
                    aria-label="${ifDefined(this.ariaLabel || this.name || 'checkbox')}"
                    ${ref(this.textFieldNative)}
                    class="md-text-field__native"

                    type="${ifDefined(this.type)}"
                    name="${ifDefined(this.name)}"
                    value="${ifDefined(this.value)}"

                    placeholder="${ifDefined(this.placeholder)}"
                    ?disabled="${ifDefined(this.disabled)}"
                    ?readonly="${ifDefined(this.readonly)}"

                    ?required="${ifDefined(this.required)}"
                    minlength="${ifDefined(this.minLength)}"
                    maxlength="${ifDefined(this.maxLength)}"
                    min="${ifDefined(this.min)}"
                    max="${ifDefined(this.max)}"
                    step="${ifDefined(this.step)}"
                    pattern="${ifDefined(this.pattern)}"
                    
                    autocomplete="${ifDefined(this.autocomplete)}"

                    @focus="${this._handleTextFieldNativeFocus}"
                    @input="${this._handleTextFieldNativeInput}"
                    @blur="${this._handleTextFieldNativeBlur}"
                    @invalid="${this._handleTextFieldNativeInvalid}"
                >
                <!-- <div class="md-text-field__trailing"></div> -->
            </div>
            <div class="md-text-field__content">
                ${this.supporting||this.validationMessage?html`<div class="md-text-field__supporting">${this.validationMessage||this.supporting}</div>`:nothing}
                <!-- <div class="md-text-field__counter"></div> -->
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        await this.updateComplete;

        this._updatePopulatedClass();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-text-field");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                if (this.variant === this.variant) {
                    this.classList.add(`md-text-field--${variant}`);
                } else {
                    this.classList.remove(`md-text-field--${variant}`);
                }
            });
        }
    }

    formResetCallback(event) {
        this.validationMessage = "";
        this._updateValidationClass();

        this._updatePopulatedClass();
    }

    _updateValidationClass() {
        if (this.validationMessage) {
            this.classList.add("md-text-field--error");
        } else {
            this.classList.remove("md-text-field--error");
        }
    }

    _updatePopulatedClass() {
        const textFieldNative = this.textFieldNative.value;
        if (textFieldNative.value) {
            this.classList.add("md-text-field--populated");
        } else {
            this.classList.remove("md-text-field--populated");
        }
    }

    _handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focus");

        this.emit("onTextFieldNativeFocus", {});
    }

    _handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focus");

        if (this.validateOnBlur) {
            this.validate();
        }

        this.emit("onTextFieldNativeBlur", {});
    }

    _handleTextFieldNativeInput(event) {
        this._updatePopulatedClass();

        if (this.validateOnInput) {
            this.validate();
        }

        this.emit("onTextFieldNativeInput", {});
    }

    _handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validate();

        this.emit("onTextFieldNativeInvalid", {});
    }

    validate() {
        const textFieldNative = this.textFieldNative.value;
        this.validationMessage = textFieldNative.validationMessage;

        this._updateValidationClass();
    }
}

customElements.define("md-text-field", MdTextField);

export { MdTextField };
