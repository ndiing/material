## src\material\components\text-field

### text-field

src\material\components\text-field\text-field.js

```js
import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @fires md-text-field#onTextFieldNativeFocus
 * @fires md-text-field#onTextFieldNativeBlur
 * @fires md-text-field#onTextFieldNativeInput
 * @fires md-text-field#onTextFieldNativeInvalid
 */
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
```

### text-field

src\material\components\text-field\text-field.scss

```scss
@use "../../shared/mixins.scss";

.md-text-field {
    --md-comp-text-field-height: 56px;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    gap: 4px 0;
    position: relative;
}

.md-text-field__label {
    margin: 0 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-body-small();
}

.md-text-field__container {
    display: flex;
    align-items: center;
    height: var(--md-comp-text-field-height);
    gap: 0 16px;
    border-radius: 4px;
    background-color: var(--md-sys-color-surface-container-highest);
    color: var(--md-sys-color-on-surface-variant);
}

.md-text-field__leading {
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    gap: 0 12px;

    + .md-text-field__content {
        margin-left: -28px;
    }
}

.md-text-field__icon-button {
    margin: 0 -8px;
}

// .md-text-field__icon {}

.md-text-field__content {
    flex: 1;
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 16px;

    + .md-text-field__trailing {
        margin-left: -28px;
    }
}

.md-text-field__text {
    @include mixins.typescale-body-large();
}

.md-text-field__native {
    appearance: none;
    width: 100%;
    height: 100%;
    @include mixins.typescale-body-large();
    background-color: transparent;
    color: inherit;
    outline: none;
}

input.md-text-field__native[type="date" i]::-webkit-calendar-picker-indicator,
input.md-text-field__native[type="datetime-local" i]::-webkit-calendar-picker-indicator,
input.md-text-field__native[type="month" i]::-webkit-calendar-picker-indicator,
input.md-text-field__native[type="time" i]::-webkit-calendar-picker-indicator,
input.md-text-field__native[type="week" i]::-webkit-calendar-picker-indicator {
    display: none;
}

input.md-text-field__native::-webkit-inner-spin-button {
    display: none;
}

input.md-text-field__native[type="search" i]::-webkit-search-cancel-button {
    display: none;
}

input.md-text-field__native::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
}
input.md-text-field__native::-webkit-datetime-edit-month-field,
input.md-text-field__native::-webkit-datetime-edit-day-field,
input.md-text-field__native::-webkit-datetime-edit-year-field,
input.md-text-field__native::-webkit-datetime-edit-hour-field,
input.md-text-field__native::-webkit-datetime-edit-minute-field {
    padding: 0;
}

input.md-text-field__native:-webkit-autofill::first-line,
textarea.md-text-field__native:-webkit-autofill::first-line,
select.md-text-field__native:-webkit-autofill::first-line {
    @include mixins.typescale-body-large();
}
input.md-text-field__native:-webkit-autofill,
input.md-text-field__native:-webkit-autofill:hover,
input.md-text-field__native:-webkit-autofill:focus,
textarea.md-text-field__native:-webkit-autofill,
textarea.md-text-field__native:-webkit-autofill:hover,
textarea.md-text-field__native:-webkit-autofill:focus,
select.md-text-field__native:-webkit-autofill,
select.md-text-field__native:-webkit-autofill:hover,
select.md-text-field__native:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px var(--md-sys-color-surface-container-highest) inset;
    -webkit-text-fill-color: var(--md-sys-color-on-surface);
    caret-color: var(--md-sys-color-on-surface);
    transition: background-color 5000s ease-in-out 0s;
}

.md-text-field__trailing {
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    gap: 0 12px;
}

.md-text-field__information {
    display: flex;
    align-items: center;
    padding: 0 16px;
    gap: 0 16px;
}

.md-text-field__supporting {
    @include mixins.typescale-body-small();
}

.md-text-field__counter {
    margin-left: auto;
    @include mixins.typescale-body-small();
}

// .md-text-field--populated {}

.md-text-field--focus {
    .md-text-field__label {
        color: var(--md-sys-color-primary);
    }
}

.md-text-field--focus-visible {
    .md-text-field__container {
        outline: 2px solid var(--md-sys-color-outline);
        outline-offset: -2px;
    }
}

.md-text-field--error {
    .md-text-field__label {
        color: var(--md-sys-color-error);
    }

    .md-text-field__supporting {
        color: var(--md-sys-color-error);
    }

    .md-text-field__icon--error {
        color: var(--md-sys-color-error);
    }
}

.md-text-field--readonly,
.md-text-field--disabled {
    pointer-events: none;

    .md-text-field__label {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__container {
        background-color: var(--md-sys-color-on-surface4);
    }

    .md-text-field__native {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__text {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__icon {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__icon-button {
        color: var(--md-sys-color-on-surface38);
    }

    .md-text-field__supporting {
        color: var(--md-sys-color-on-surface38);
    }
}

.md-text-field--filled {
    &.md-text-field--with-label {
        .md-text-field__label {
            position: absolute;
            pointer-events: none;
            left: var(--md-comp-text-field-content-offset-left, 0);
            padding-top: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            padding-bottom: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            @include mixins.typescale-body-large();
            will-change: padding, font-size, line-height, color;
            transition-property: padding, font-size, line-height, color;
            // transition-duration: var(--md-sys-motion-duration-short1);
            // transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
            transition-duration: var(--md-sys-motion-duration-short1);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }
        .md-text-field__text,
        .md-text-field__native::placeholder {
            visibility: hidden;
        }
    }

    .md-text-field__container {
        border-radius: 4px 4px 0 0;
        box-shadow: inset 0 -1px 0 0 var(--md-sys-color-on-surface-variant);
    }
    &.md-text-field--populated,
    &.md-text-field--focus {
        &.md-text-field--with-label {
            .md-text-field__label {
                padding-top: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-small-line-height)) / 2) - 10px);
                padding-bottom: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-small-line-height)) / 2) + 6px);
                @include mixins.typescale-body-small();
            }
            .md-text-field__text,
            .md-text-field__native {
                padding-top: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2) + 6px);
                padding-bottom: calc(((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2) - 10px);
            }
            .md-text-field__text,
            .md-text-field__native::placeholder {
                visibility: visible;
            }
        }
    }

    &.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 -2px 0 0 var(--md-sys-color-primary);
        }
    }

    &.md-text-field--error {
        .md-text-field__container {
            box-shadow: inset 0 -1px 0 0 var(--md-sys-color-error);
        }
    }

    &.md-text-field--error.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 -2px 0 0 var(--md-sys-color-error);
        }
    }
}

.md-text-field--outlined {
    &.md-text-field--with-label {
        .md-text-field__label {
            margin-left: 12px;
            margin-right: 12px;
            padding-left: 4px;
            padding-right: 4px;
            padding-top: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            padding-bottom: calc((var(--md-comp-text-field-height) - var(--md-sys-typescale-body-large-line-height)) / 2);
            position: absolute;
            z-index: 1;
            pointer-events: none;
            left: var(--md-comp-text-field-content-offset-left, 0);
            @include mixins.typescale-body-large();
            will-change: padding, font-size, line-height, color, top, left;
            transition-property: padding, font-size, line-height, color, top, left;
            // transition-duration: var(--md-sys-motion-duration-short1);
            // transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
            transition-duration: var(--md-sys-motion-duration-short1);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));

            &:before {
                content: "";
                width: 0%;
                height: var(--md-sys-typescale-body-small-line-height);
                position: absolute;
                z-index: -1;
                left: 50%;
                top: 50%;
                transform: translate3d(-50%, -50%, 0);
                background-color: var(--md-sys-color-background);
                color: var(--md-sys-color-on-background);
                will-change: width;
                transition-property: width;
                // transition-duration: var(--md-sys-motion-duration-short1);
                // transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
                transition-duration: var(--md-sys-motion-duration-short1);
                transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
            }
        }
        .md-text-field__text,
        .md-text-field__native::placeholder {
            visibility: hidden;
        }
    }

    .md-text-field__container {
        border-radius: 4px;
        background-color: transparent;
        box-shadow: inset 0 0 0 1px var(--md-sys-color-on-surface-variant);
    }
    &.md-text-field--populated,
    &.md-text-field--focus {
        &.md-text-field--with-label {
            .md-text-field__label {
                padding-top: 0;
                padding-bottom: 0;
                top: calc(0px - (var(--md-sys-typescale-body-small-line-height) / 2));
                left: 0;
                @include mixins.typescale-body-small();

                &:before {
                    width: 100%;
                }
            }
            .md-text-field__text,
            .md-text-field__native::placeholder {
                visibility: visible;
            }
        }
    }

    &.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 0 0 2px var(--md-sys-color-primary);
        }
    }

    &.md-text-field--error {
        .md-text-field__container {
            box-shadow: inset 0 0 0 1px var(--md-sys-color-error);
        }
    }

    &.md-text-field--error.md-text-field--focus {
        .md-text-field__container {
            box-shadow: inset 0 0 0 2px var(--md-sys-color-error);
        }
    }
}
```
