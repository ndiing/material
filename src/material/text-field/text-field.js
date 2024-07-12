import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { choose } from "lit/directives/choose.js";

/**
 * Represents a Material Design text field component.
 * @element md-text-field
 * @extends MDComponent
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - Fired when the native input is invalid.
 * @fires MDTextFieldComponent#onTextFieldNativeReset - Fired when the native input is reset.
 * @fires MDTextFieldComponent#onTextFieldNativeInput - Fired when the native input receives input.
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - Fired when the native input triggers a search.
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - Fired when the native input gains focus.
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - Fired when the native input loses focus.
 * @fires MDTextFieldComponent#onTextFieldLabelClick - Fired when the text field label is clicked.
 * @fires MDTextFieldComponent#onTextFieldMetaClick - Fired when the text field meta element is clicked.
 * @fires MDTextFieldComponent#onTextFieldActionClick - Fired when a text field action button is clicked.
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - Fired when a text field icon button is clicked.
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * Defines the component's properties.
     * @property {String} label - The label text for the text field.
     * @property {String} icon - The icon to be displayed in the text field.
     * @property {String} prefix - The prefix text for the text field.
     * @property {String} suffix - The suffix text for the text field.
     * @property {Array} actions - The actions available in the text field.
     * @property {String} text - Additional text for the text field.
     * @property {String} type - The type of the text field (e.g., text, password).
     * @property {String} name - The name attribute of the text field.
     * @property {String} value - The value of the text field.
     * @property {Number} min - The minimum value for the text field.
     * @property {Number} max - The maximum value for the text field.
     * @property {Number} cols - The number of columns for a textarea.
     * @property {Number} rows - The number of rows for a textarea.
     * @property {Number} minLength - The minimum length for the text field.
     * @property {Number} maxLength - The maximum length for the text field.
     * @property {String} pattern - The pattern attribute for the text field.
     * @property {Boolean} required - Indicates if the text field is required.
     * @property {Boolean} readOnly - Indicates if the text field is read-only.
     * @property {Boolean} disabled - Indicates if the text field is disabled.
     * @property {String} autocomplete - The autocomplete attribute for the text field.
     * @property {Boolean} multiple - Indicates if the text field allows multiple values.
     * @property {Array} options - The options for a select input.
     * @property {Boolean} validationMessage - The validation message for the text field.
     * @property {Boolean} focused - Indicates if the text field is focused.
     * @property {String} variant - The variant of the text field (e.g., filled, outlined).
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
    };

    /**
     * A reference to the native text field element.
     * @type {Object}
     */
    textFieldNative = createRef();

    /**
     * A reference to the text field container element.
     * @type {Object}
     */
    textFieldContainer = createRef();

    /**
     * Initializes a new instance of the MDTextFieldComponent class.
     */
    constructor() {
        super();
        this.type = "text";
        this.autocomplete = "off";
        this.rows = 1;
    }

    /**
     * Renders the native input element.
     * @private
     * @returns {TemplateResult} The rendered input element.
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
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
            >
        `;
    }

    /**
     * Renders the native textarea element.
     * @private
     * @returns {TemplateResult} The rendered textarea element.
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
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
                @input="${this.handleTextFieldNativeInput}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
            ></textarea>
        `;
    }

    /**
     * Renders the native select element.
     * @private
     * @returns {TemplateResult} The rendered select element.
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
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
                @input="${this.handleTextFieldNativeInput}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
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
     * Renders the hidden input element.
     * @private
     */
    renderHidden() {
        /* prettier-ignore */
        // Implementation for hidden input
    }

    /**
     * Renders the native text field element based on the type.
     * @private
     * @returns {TemplateResult} The rendered native text field element.
     */
    renderTextFieldNative() {
        /* prettier-ignore */
        return choose(this.type, [
            ['textarea', () => this.renderTextarea()],
            ['select', () => this.renderSelect()],
        ], () => this.renderInput());
    }

    /**
     * Renders the MDTextFieldComponent.
     * @private
     * @returns {TemplateResult} The rendered component.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.label ? html`<div class="md-text-field__label" @click="${this.handleTextFieldLabelClick}">${this.label}</div>` : nothing}
            <div 
                class="md-text-field__container"
                ${ref(this.textFieldContainer)}
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
                                @click="${this.handleTextFieldIconButtonClick}"
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
     * Called when the component is connected to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.style.setProperty("--md-sys-motion-duration-short4", "0s");
        if (this.defaultValue === undefined&&this.type!=='file') {
            if (this.type === "color" && !this.value) {
                this.value = "#000000";
            } else if (this.type === "select" && !this.value) {
                let selectedIndex = this.options.findIndex((option) => option.selected);
                if (selectedIndex === -1) {
                    selectedIndex = 0;
                }
                this.value = this.options[selectedIndex].value;
            }
            this.defaultValue = this.value || "";
        }
    }

    variants = ["filled", "outlined", "rounded"];

    /**
     * Called when the component is updated.
     * @private
     * @param {Map} changedProperties - The properties that have changed.
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
     * Handles the invalid event for the native input element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.validationMessage = this.textFieldNative.value.validationMessage;
        this.emit("onTextFieldNativeInvalid", event);
    }

    /**
     * Handles the reset event for the native input element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldNativeReset(event) {
        event.preventDefault();
        if(this.type!=='file'){
            this.value = this.defaultValue;
            this.validationMessage = "";
        }
        this.emit("onTextFieldNativeReset", event);
    }

    /**
     * Handles the input event for the native input element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldNativeInput(event) {
        if(this.type!=='file'){
            this.value = this.textFieldNative.value.value;
            this.validationMessage = this.textFieldNative.value.validationMessage;
        }
        this.emit("onTextFieldNativeInput", event);
    }

    /**
     * Handles the search event for the native input element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldNativeSearch(event) {
        if(this.type!=='file'){
            this.value = this.textFieldNative.value.value;
            this.validationMessage = this.textFieldNative.value.validationMessage;
        }
        this.emit("onTextFieldNativeSearch", event);
    }

    /**
     * Handles the focus event for the native input element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldNativeFocus(event) {
        this.style.removeProperty("--md-sys-motion-duration-short4");
        this.focused = true;
        this.emit("onTextFieldNativeFocus", event);
    }

    /**
     * Handles the blur event for the native input element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextFieldNativeBlur", event);
    }

    /**
     * Handles the click event for the text field label.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldLabelClick(event) {
        this.emit("onTextFieldLabelClick", event);
    }

    /**
     * Handles the click event for the text field meta element.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldMetaClick(event) {
        this.emit("onTextFieldMetaClick", event);
    }

    /**
     * Handles the click event for a text field action button.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldActionClick(event) {
        this.emit("onTextFieldActionClick", event);
    }

    /**
     * Handles the click event for a text field icon button.
     * @private
     * @param {Event} event - The event object.
     */
    handleTextFieldIconButtonClick(event) {
        this.emit("onTextFieldIconButtonClick", event);
    }
}
customElements.define("md-text-field", MDTextFieldComponent);
export { MDTextFieldComponent };
