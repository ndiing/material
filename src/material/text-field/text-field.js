import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";
import { choose } from "lit/directives/choose.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-text-field
 * @fires MDTextFieldComponent#onTextFieldContainerClick - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldLabelClick - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldMetaClick - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeClick - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeKeydown - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeSelect - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldActionClick - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * {{desc}}
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
     * {{desc}}
     */
    constructor() {
        super();
        this.type = "text";
        this.autocomplete = "off";
        this.rows = 1;
    }

    /**
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    renderHidden() {
        /* prettier-ignore */
    }

    /**
     * {{desc}}
     */
    renderTextFieldNative() {
        /* prettier-ignore */
        return choose(this.type, [
            ['textarea', () => this.renderTextarea()],
            ['select', () => this.renderSelect()],
        ], () => this.renderInput());
    }

    /**
     * {{desc}}
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
                ${this.icon ? html`<md-icon class="md-text-field__icon" .icon="${this.icon}"></md-icon>` : nothing}
                ${this.prefix ? html`<div class="md-text-field__meta md-text-field__meta-prefix" @click="${this.handleTextFieldMetaClick}">${this.prefix}</div>` : nothing}
                ${this.renderTextFieldNative()}
                ${this.suffix ? html`<div class="md-text-field__meta md-text-field__meta-suffix" @click="${this.handleTextFieldMetaClick}">${this.suffix}</div>` : nothing}
                ${(this.validationMessage || this.actions?.length) ? html`
                    <div class="md-text-field__actions">
                        ${this.validationMessage ? html`<md-icon class="md-text-field__icon md-text-field__icon--error" .icon="${"error"}"></md-icon>` : nothing}
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
     * {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    handleTextFieldContainerClick(event) {
        this.emit("onTextFieldContainerClick", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldLabelClick(event) {
        this.emit("onTextFieldLabelClick", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldMetaClick(event) {
        this.emit("onTextFieldMetaClick", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeFocus(event) {
        this.style.removeProperty("--md-sys-motion-duration-short4");
        this.focused = true;
        this.emit("onTextFieldNativeFocus", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeBlur(event) {
        this.focused = false;
        this.emit("onTextFieldNativeBlur", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeClick(event) {
        this.emit("onTextFieldNativeClick", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeKeydown(event) {
        this.emit("onTextFieldNativeKeydown", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeSelect(event) {
        this.emit("onTextFieldNativeSelect", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeInput(event) {
        if (this.type !== "file") {
            this.value = this.textFieldNative.value.value;
        }
        this.validate();
        this.emit("onTextFieldNativeInput", event);
    }
    /**
     * {{desc}}
     */
    validate() {
        this.validationMessage = this.textFieldNative.value.validationMessage;
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeSearch(event) {
        if (this.type !== "file") {
            this.value = this.textFieldNative.value.value;
        }
        this.validate();
        this.emit("onTextFieldNativeSearch", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeInvalid(event) {
        event.preventDefault();
        this.validate();
        this.emit("onTextFieldNativeInvalid", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldNativeReset(event) {
        if (this.type !== "file") {
            this.value = this.defaultValue;
        }
        this.validationMessage = "";
        this.emit("onTextFieldNativeReset", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldActionClick(event) {
        this.emit("onTextFieldActionClick", event);
    }

    /**
     * {{desc}}
     */
    handleTextFieldIconButtonClick(event) {
        this.emit("onTextFieldIconButtonClick", event);
    }
}
customElements.define("md-text-field", MDTextFieldComponent);
export { MDTextFieldComponent };
