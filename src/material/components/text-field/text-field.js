import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { styleMap } from "lit/directives/style-map.js";

class MdTextField extends MdElement {
    static formAssociated = true;

    static properties = {
        leading: { type: Array },
        label: { type: String },
        trailing: { type: Array },
        supporting: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        clearable: { type: Boolean },
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
        this.leading=[]
        this.trailing=[]
        this.validateOnInput = true;
        this.variant = "filled";
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="md-text-field__icon"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="md-text-field__icon-button"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
            ></md-icon-button>
        `
    }

    /* prettier-ignore */
    renderText(properties){
        return html`
            <div 
                class="md-text-field__text"
                style="${styleMap(properties.style??{})}"
            >${properties.text}</div>
        `
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['text', () => this.renderText(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        const leading=[
            ...this.leading,
        ]
        if(this.prefix){
            leading.push( {component:'text',text:this.prefix})
        }
        return html`
            <div class="md-text-field__leading">
                ${leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        const trailing=[
            ...this.trailing,
        ]
        if(this.suffix){
            trailing.unshift({component:'text',text:this.suffix})
        }
        if(this.validationMessage){
            trailing.push({component:'icon',icon:'error'})
        }
        if(this.clearable&&this.value){
            trailing.push({component:'icon-button',icon:'cancel',color:'standard'})
        }
        return html`
            <div class="md-text-field__trailing">
                ${trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.label?html`<label class="md-text-field__label">${this.label}</label>`:nothing}
            <div class="md-text-field__container">
                ${this.renderLeading()}
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
                ${this.renderTrailing()}
            </div>
            <div class="md-text-field__content">
                ${this.supporting||this.validationMessage?html`<div class="md-text-field__supporting">${this.validationMessage||this.supporting}</div>`:nothing}
                <div class="md-text-field__counter"></div>
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
            this._toggleClassList(this.variants,this.variant)
        }
        if (changedProperties.has("prefix")) {
            this._toggleClass('prefix')
        }
        if (changedProperties.has("suffix")) {
            this._toggleClass('suffix')
        }
    }

    _toggleClass(modifier) {
        this.classList.toggle(`md-text-field--${modifier}`, Boolean(this[modifier]));
    }

    _toggleClassList(list, value) {
        list.forEach((item) => {
            this.classList.toggle(`md-text-field--${item}`, value === item);
        });
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
