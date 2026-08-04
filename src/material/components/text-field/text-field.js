import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

class MdTextField extends MdElement {
    static formAssociated = true;

    static properties = {
        leading: { type: Array },
        label: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        clearable: { type: Boolean },
        trailing: { type: Array },
        supporting: { type: String },
        color: { type: String },

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

        validationMessage: { type: String, state: true },
        validateOnBlur: { type: Boolean },
        validateOnInput: { type: Boolean },

        currentLength: { type: Number, state: true },
    };

    textFieldNative = createRef();

    colors = ["standard", "filled", "outlined"];

    constructor() {
        super();
        this.internals = this.attachInternals();
        this.leading = [];
        this.trailing = [];
        this.validateOnInput = true;
        this.variant = "filled";
        this.currentLength = 0;

        this._handleTextFieldIconButtonClearClick = this._handleTextFieldIconButtonClearClick.bind(this);
    }

    /* prettier-ignore */
    renderAvatar(properties){
        return html`
            <md-image 
                class="${classMap({
                    'md-list__avatar':true,
                    ...properties.class
                })}"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'round')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
                @click="${properties.onTextFieldAvatarClick}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="${classMap({
                    'md-text-field__icon':true,
                    ...properties.class
                })}"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                @click="${properties.onTextFieldIconClick}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="${classMap({
                    'md-text-field__icon-button':true,
                    ...properties.class
                })}"
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
                @click="${properties.onTextFieldIconButtonClick}"
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
            ['avatar', () => this.renderAvatar(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['text', () => this.renderText(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return html`
            <div class="md-text-field__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return html`
            <div class="md-text-field__trailing">
                ${(this.clearable&&this.value)?this.renderIconButton({icon:'cancel',color:'standard',onTextFieldIconButtonClick:this._handleTextFieldIconButtonClearClick}):nothing}
                ${this.validationMessage?this.renderIcon({icon:'error',class:{'md-text-field__icon--error':true}}):nothing}
                ${this.trailing.map(({component,...properties}) => {
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
                ${this.leading?.length?this.renderLeading():nothing}
                <div class="md-text-field__content">
                    ${this.prefix?this.renderText({text:this.prefix}):nothing}
                    <input 
                        aria-label="${ifDefined(this.ariaLabel || this.name || 'text-field')}"
                        ${ref(this.textFieldNative)}
                        class="md-text-field__native"
                        type="${ifDefined(this.type)}"
                        name="${ifDefined(this.name)}"
                        .value="${ifDefined(this.value)}"
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
                    ${this.suffix?this.renderText({text:this.suffix}):nothing}
                </div>
                ${(this.clearable&&this.value)||this.validationMessage||this.trailing?.length?this.renderTrailing():nothing}
            </div>
            <div class="md-text-field__information">
                ${this.supporting||this.validationMessage?html`<div class="md-text-field__supporting">${this.validationMessage||this.supporting}</div>`:nothing}
                ${(this.maxLength&&this.currentLength>0)?html`<div class="md-text-field__counter">${this.currentLength}/${this.maxLength}</div>`:nothing}
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        this.defaultValue = this.defaultValue ?? this.value ?? "";

        await this.updateComplete;

        this.currentLength = this.value?.length ?? 0;
        this._toggleClass("populated", this.value);

        const contentElement = this.querySelector(".md-text-field__content");
        this.style.setProperty("--md-comp-text-field-content-offset-left", contentElement?.offsetLeft + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-text-field");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("color")) {
            this._toggleClassList(this.colors, this.color);
        }
        if (changedProperties.has("label")) {
            this._toggleClass("with-label", this.label);
        }
        if (changedProperties.has("disabled")) {
            this._toggleClass("disabled");
        }
        if (changedProperties.has("readonly")) {
            this._toggleClass("readonly");
        }
    }

    formResetCallback(event) {
        const textFieldNative = this.textFieldNative.value;
        textFieldNative.value = this.defaultValue;
        this.value = textFieldNative.value;
        this.currentLength = this.value?.length ?? 0;
        this._toggleClass("populated", this.value);

        this.validationMessage = "";
        this._toggleClass("error", this.validationMessage);
    }

    _toggleClass(modifier, force = this[modifier]) {
        this.classList.toggle(`md-text-field--${modifier}`, !!force);
    }

    _toggleClassList(list, value) {
        list.forEach((item) => {
            this.classList.toggle(`md-text-field--${item}`, value === item);
        });
    }

    _handleTextFieldNativeFocus(event) {
        this._toggleClass("focus", true);
        this._toggleClass("focus-visible", !this.textFieldNative.value.matches(":active"));

        this.emit("onTextFieldNativeFocus", { event, element: this });
    }

    _handleTextFieldNativeBlur(event) {
        this._toggleClass("focus", false);
        this._toggleClass("focus-visible", false);

        if (this.validateOnBlur) {
            this.validate();
        }

        this.emit("onTextFieldNativeBlur", { event, element: this });
    }

    _handleTextFieldNativeInput(event) {
        const textFieldNative = this.textFieldNative.value;
        this.value = textFieldNative.value;
        this.currentLength = this.value?.length ?? 0;
        this._toggleClass("populated", this.value);

        if (this.validateOnInput) {
            this.validate();
        }

        this.emit("onTextFieldNativeInput", { event, element: this });
    }

    _handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validate();

        this.emit("onTextFieldNativeInvalid", { event, element: this });
    }

    validate() {
        const textFieldNative = this.textFieldNative.value;
        this.validationMessage = textFieldNative.validationMessage;
        this._toggleClass("error", this.validationMessage);
    }

    _handleTextFieldIconButtonClearClick(event) {
        const textFieldNative = this.textFieldNative.value;
        textFieldNative.value = "";
        this.value = textFieldNative.value;
        this.currentLength = this.value?.length ?? 0;
        this._toggleClass("populated", this.value);
    }
}

customElements.define("md-text-field", MdTextField);

export { MdTextField };
