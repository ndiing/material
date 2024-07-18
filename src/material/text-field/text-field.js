import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { choose } from "lit/directives/choose.js";

/**
 * A customizable text field component for Material Design.
 * @element md-text-field
 * @extends MDComponent
 * @fires MDTextFieldComponent#onTextFieldLabelClick - Fired when the text field label is clicked.
 * @fires MDTextFieldComponent#onTextFieldMetaClick - Fired when the text field meta area is clicked.
 * @fires MDTextFieldComponent#onTextFieldActionClick - Fired when an action button within the text field is clicked.
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - Fired when an icon button within the text field is clicked.
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - Fired when the native text field element gains focus.
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - Fired when the native text field element loses focus.
 * @fires MDTextFieldComponent#onTextFieldNativeClick - Fired when the native text field element is clicked.
 * @fires MDTextFieldComponent#onTextFieldNativeKeydown - Fired when a key is pressed down on the native text field element.
 * @fires MDTextFieldComponent#onTextFieldNativeSelect - Fired when text is selected within the native text field element.
 * @fires MDTextFieldComponent#onTextFieldNativeInput - Fired when input is entered into the native text field element.
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - Fired when a search is performed within the native text field element.
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - Fired when the native text field element becomes invalid.
 * @fires MDTextFieldComponent#onTextFieldNativeReset - Fired when the native text field element is reset.
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * The properties of the text field component.
     * @property {String} label - The label of the text field.
     * @property {String} icon - The icon displayed within the text field.
     * @property {String} prefix - The prefix text displayed before the input.
     * @property {String} suffix - The suffix text displayed after the input.
     * @property {Array} actions - The action buttons associated with the text field.
     * @property {String} text - The text content of the text field.
     * @property {String} type - The type of input (e.g., "text", "password", "email").
     * @property {String} placeholder - The placeholder text for the input.
     * @property {String} name - The name attribute of the input.
     * @property {String} value - The current value of the input.
     * @property {Number} min - The minimum value for numerical inputs.
     * @property {Number} max - The maximum value for numerical inputs.
     * @property {Number} cols - The number of columns for textarea inputs.
     * @property {Number} rows - The number of rows for textarea inputs.
     * @property {Number} minLength - The minimum length of the input value.
     * @property {Number} maxLength - The maximum length of the input value.
     * @property {String} pattern - The regex pattern that the input value must match.
     * @property {Boolean} required - Whether the input is required.
     * @property {Boolean} readOnly - Whether the input is read-only.
     * @property {Boolean} disabled - Whether the input is disabled.
     * @property {String} autocomplete - The autocomplete attribute for the input.
     * @property {Boolean} multiple - Whether the select input allows multiple selections.
     * @property {Array} options - The options for select inputs.
     * @property {Boolean} validationMessage - The validation message for the input.
     * @property {Boolean} focused - Whether the input is focused.
     * @property {String} variant - The visual variant of the text field (e.g., "filled", "outlined").
     */
    static properties = {
        label: { type: String },
        icon: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },
        type: { type: String },
        placeholder: { type: String },
        name: { type: String },
        value: { type: String },
        min: { type: Number },
        max: { type: Number },
        cols: { type: Number },
        rows: { type: Number },
        minLength: { type: Number },
        maxLength: { type: Number },
        pattern: { type: String },
        required: { type: Boolean },
        readOnly: { type: Boolean },
        disabled: { type: Boolean },
        autocomplete: { type: String },
        multiple: { type: Boolean },
        options: { type: Array },
        validationMessage: { type: Boolean },
        focused: { type: Boolean },
        variant: { type: String },
        mask: { type: String },
    };

    textFieldNative = createRef();

    textFieldContainer = createRef();

    /**
     * {{description}}
     */
    constructor() {
        super();
        this.type = "text";
        this.autocomplete = "off";
        this.rows = 1;
    }

    /**
     * @private
     */
    renderInput() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                aria-label="Label"
                .type="${ifDefined(this.type)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .min="${ifDefined(this.min)}"
                .max="${ifDefined(this.max)}"
                .minlength="${ifDefined(this.minLength)}"
                .maxlength="${ifDefined(this.maxLength)}"
                .pattern="${ifDefined(this.pattern)}"
                ?required="${ifDefined(this.required)}"
                ?readonly="${ifDefined(this.readOnly)}"
                ?disabled="${ifDefined(this.disabled)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                ${ref(this.textFieldNative)}
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @click="${this.handleTextFieldNativeClick}"
                @keydown="${this.handleTextFieldNativeKeydown}"
                @select="${this.handleTextFieldNativeSelect}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `;
    }

    /**
     * @private
     */
    renderTextarea() {
        /* prettier-ignore */
        return html`
            <textarea 
                class="md-text-field__native"
                aria-label="Label"
                .placeholder="${ifDefined(this.placeholder)}"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .cols="${ifDefined(this.cols)}"
                .rows="${ifDefined(this.rows)}"
                .minlength="${ifDefined(this.minLength)}"
                .maxlength="${ifDefined(this.maxLength)}"
                .pattern="${ifDefined(this.pattern)}"
                ?required="${ifDefined(this.required)}"
                ?readonly="${ifDefined(this.readOnly)}"
                ?disabled="${ifDefined(this.disabled)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                ${ref(this.textFieldNative)}
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @click="${this.handleTextFieldNativeClick}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `;
    }

    /**
     * @private
     */
    renderSelect() {
        /* prettier-ignore */
        return html`
            <select 
                class="md-text-field__native"
                aria-label="Label"
                .placeholder="${ifDefined(this.placeholder)}"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                ?multiple="${ifDefined(this.multiple)}"
                ?required="${ifDefined(this.required)}"
                ?readonly="${ifDefined(this.readOnly)}"
                ?disabled="${ifDefined(this.disabled)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                ${ref(this.textFieldNative)}
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @click="${this.handleTextFieldNativeClick}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options.map(option => html`
                    <option 
                        .value="${ifDefined(option.value)}" 
                        .label="${ifDefined(option.label)}"
                        ?selected="${ifDefined(option.selected)}"
                    ></option>    
                `)}
            </select>
        `;
    }

    /**
     * @private
     */
    renderHidden() {
        /* prettier-ignore */
    }

    /**
     * @private
     */
    renderTextFieldNative() {
        /* prettier-ignore */
        return choose(this.type, [
            ['textarea', () => this.renderTextarea()],
            ['select', () => this.renderSelect()],
        ], () => this.renderInput());
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.label ? html`<div class="md-text-field__label" @click="${this.handleTextFieldLabelClick}">${this.label}</div>` : nothing}
            <div 
                class="md-text-field__container"
                ${ref(this.textFieldContainer)}
                @click="${this.handleTextFieldContainerClick}"
            >
                ${this.icon ? html`<md-icon class="md-text-field__icon">${this.icon}</md-icon>` : nothing}
                ${this.prefix ? html`<div class="md-text-field__meta md-text-field__meta-prefix" @click="${this.handleTextFieldMetaClick}">${this.prefix}</div>` : nothing}
                ${this.renderTextFieldNative()}
                ${this.suffix ? html`<div class="md-text-field__meta md-text-field__meta-suffix" @click="${this.handleTextFieldMetaClick}">${this.suffix}</div>` : nothing}
                ${(this.validationMessage || this.actions?.length) ? html`
                    <div class="md-text-field__actions">
                        ${this.validationMessage ? html`<md-icon class="md-text-field__icon md-text-field__icon--error">error</md-icon>` : nothing}
                        ${this.actions?.map(action => html`
                            <md-icon-button 
                                class="md-text-field__action" 
                                .name="${action.name}"
                                .icon="${action.icon}"
                                @click="${this.handleTextFieldActionClick}"
                            ></md-icon-button>
                        `)}
                    </div>
                ` : nothing}
            </div>
            ${(this.validationMessage || this.text || this.maxLength) ? html`
                <div class="md-text-field__text">
                    ${(this.validationMessage || this.text) ? html`<div class="md-text-field__text-start">${this.validationMessage || this.text}</div>` : nothing}
                    ${this.maxLength ? html`<div class="md-text-field__text-end">${this.value?.length || 0}/${this.maxLength}</div>` : nothing}
                </div>
            ` : nothing}
            ${this.renderHidden()}
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.style.setProperty("--md-sys-motion-duration-short4", "0s");

        const defaultValue = {
            color: "#000000",
        };

        if (this.defaultValue === undefined) {
            if (this.value === undefined) {
                this.value = defaultValue[this.type] || "";
            }

            this.defaultValue = this.value;
        }
    }

    variants = ["filled", "outlined", "rounded"];

    /**
     * @private
     */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);

            this.variants.forEach((variant) => {
                this.classList.toggle(`md-text-field--${variant}`, variants.includes(variant));
            });
        }

        if (changedProperties.has("icon")) {
            await this.updateComplete;
            this.style.setProperty("--md-comp-text-field-native-offset-left", `${this.textFieldNative.value.offsetLeft}px`);
        }
        this.classList.toggle("md-text-field--populated", !!this.value || this.type === "file");
        this.classList.toggle("md-text-field--error", !!this.validationMessage);
        this.classList.toggle("md-text-field--focused", !!this.focused);
    }

    /**
     * @private
     */
    handleTextFieldNativeFocus(event) {
        this.style.removeProperty("--md-sys-motion-duration-short4");
        this.focused = true;
        this.emit("onTextFieldNativeFocus", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextFieldNativeBlur", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        this.emit("onTextFieldNativeClick", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeKeydown(event) {
        this.emit("onTextFieldNativeKeydown", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeSelect(event) {
        this.emit("onTextFieldNativeSelect", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeInput(event) {
        if (this.type !== "file") {
            this.value = this.textFieldNative.value.value;
        }

        this.validate();
        this.emit("onTextFieldNativeInput", event);
    }

    validate() {
        this.validationMessage = this.textFieldNative.value.validationMessage;
    }

    /**
     * @private
     */
    handleTextFieldNativeSearch(event) {
        if (this.type !== "file") {
            this.value = this.textFieldNative.value.value;
        }
        this.validate();
        this.emit("onTextFieldNativeSearch", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.validate();
        this.emit("onTextFieldNativeInvalid", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeReset(event) {
        if (this.type !== "file") {
            this.value = this.defaultValue;
        }
        this.validationMessage = "";
        this.emit("onTextFieldNativeReset", event);
    }

    /**
     * @private
     */
    handleTextFieldContainerClick(event) {
        this.emit("onTextFieldContainerClick", event);
    }

    /**
     * @private
     */
    handleTextFieldLabelClick(event) {
        this.emit("onTextFieldLabelClick", event);
    }

    /**
     * @private
     */
    handleTextFieldMetaClick(event) {
        this.emit("onTextFieldMetaClick", event);
    }

    /**
     * @private
     */
    handleTextFieldActionClick(event) {
        this.emit("onTextFieldActionClick", event);
    }

    /**
     * @private
     */
    handleTextFieldIconButtonClick(event) {
        this.emit("onTextFieldIconButtonClick", event);
    }
}
customElements.define("md-text-field", MDTextFieldComponent);
export { MDTextFieldComponent };
