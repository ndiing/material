import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * A custom text field component that extends MDComponent and provides various input types with support for icons, actions, and validation.
 * @extends MDComponent
 * @tagname md-text-field
 * @fires MDTextFieldComponent#onTextFieldNativeClick - Fired when the native input element is clicked.
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - Fired when the native input element receives focus.
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - Fired when the native input element loses focus.
 * @fires MDTextFieldComponent#onTextFieldNativeInput - Fired when the native input element receives input.
 * @fires MDTextFieldComponent#onTextFieldNativeChange - Fired when the native input element's value changes.
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - Fired when the native input element receives a search event.
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - Fired when the native input element is invalid.
 * @fires MDTextFieldComponent#onTextFieldNativeReset - Fired when the native input element is reset.
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - Fired when an icon button within the component is clicked.
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * @property {String} label - The label text for the text field.
     * @property {String} icon - The icon to display within the text field.
     * @property {String} prefix - The prefix text to display before the input.
     * @property {String} suffix - The suffix text to display after the input.
     * @property {Array} actions - An array of action objects for additional buttons or icons.
     * @property {String} text - The text content for the text field.
     * @property {String} accept - The types of files that the server accepts (only for file input).
     * @property {String} alt - The alternative text for the input element.
     * @property {String} autocomplete - The autocomplete attribute for the input element.
     * @property {Boolean} autofocus - If true, the input element should automatically get focus when the page loads.
     * @property {Boolean} disabled - If true, the input element is disabled.
     * @property {String} max - The maximum value for the input element.
     * @property {Number} maxLength - The maximum number of characters allowed in the input element.
     * @property {String} min - The minimum value for the input element.
     * @property {Number} minLength - The minimum number of characters required in the input element.
     * @property {Boolean} multiple - If true, multiple values can be entered (only for file input).
     * @property {String} name - The name of the input element.
     * @property {String} pattern - The regular expression that the input element's value is checked against.
     * @property {String} placeholder - The placeholder text for the input element.
     * @property {Boolean} readOnly - If true, the input element is read-only.
     * @property {Boolean} required - If true, the input element must be filled out before submitting the form.
     * @property {Number} size - The visible width of the input element.
     * @property {String} step - The granularity that is expected (only for numeric input).
     * @property {String} type - The type of the input element.
     * @property {String} defaultValue - The default value of the input element.
     * @property {String} value - The current value of the input element.
     * @property {Number} cols - The number of visible text lines for a textarea element.
     * @property {Number} rows - The number of visible columns for a textarea element.
     * @property {Boolean} spellcheck - If true, enables spell checking for the input element.
     * @property {String} wrap - How the text in a textarea is wrapped.
     * @property {Array} options - The options for a select element.
     * @property {String} errorText - The error message text to display.
     * @property {Boolean} error - If true, indicates that the input has an error.
     * @property {String} variant - The variant of the text field.
     */
    static properties = {
        label: { type: String },
        icon: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },

        accept: { type: String },
        alt: { type: String },
        autocomplete: { type: String },
        autofocus: { type: Boolean },
        disabled: { type: Boolean },
        max: { type: String },
        maxLength: { type: Number },
        min: { type: String },
        minLength: { type: Number },
        multiple: { type: Boolean },
        name: { type: String },
        pattern: { type: String },
        placeholder: { type: String },
        readOnly: { type: Boolean },
        required: { type: Boolean },
        size: { type: Number },
        step: { type: String },
        type: { type: String },
        defaultValue: { type: String },
        value: { type: String },
        cols: { type: Number },
        rows: { type: Number },
        spellcheck: { type: Boolean },
        wrap: { type: String },
        options: { type: Array },
        
        // src: { type: String },
        // checked: { type: Boolean },
        // defaultChecked: { type: Boolean },
        // files: { type: FileList },
        // form: { type: Object },
        // formAction: { type: String },
        // formEnctype: { type: String },
        // formMethod: { type: String },
        // formNoValidate: { type: Boolean },
        // formTarget: { type: String },
        // height: { type: Number },
        // indeterminate: { type: Boolean },
        // list: { type: Object },
        // width: { type: Number },
        // inputMode: { type: String },
        // selectionDirection: { type: String },
        // selectionEnd: { type: Number },
        // selectionStart: { type: Number },
        // align: { type: String },
        // useMap: { type: String },
        // length: { type: Number },
        // selectedIndex: { type: Number },
        // selectedOptions: { type: HTMLCollection },

        errorText: { type: String },
        error: { type: Boolean },

        variant: { type: String },
    };

    variants = ["filled", "outlined", "rounded"];

    /**
     * {{desc}}
     */
    get native() {
        return this.querySelector(".md-text-field__native");
    }

    /**
     * {{desc}}
     */
    get container() {
        return this.querySelector(".md-text-field__container");
    }

    constructor() {
        super();

        this.type = "text";
        this.autocomplete = "off";

        this.renderIconButton = this.renderIconButton.bind(this);
    }

    renderInput() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-text-field__native"
                .accept="${ifDefined(this.accept)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .max="${ifDefined(this.max)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .min="${ifDefined(this.min)}"
                .minLength="${ifDefined(this.minLength)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .pattern="${ifDefined(this.pattern)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .step="${ifDefined(this.step)}"
                .type="${ifDefined(this.type)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                @click="${this.handleTextFieldNativeClick}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `;
    }

    renderTextarea() {
        /* prettier-ignore */
        return html`
            <textarea 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .maxLength="${ifDefined(this.maxLength)}"
                .minLength="${ifDefined(this.minLength)}"
                .name="${ifDefined(this.name)}"
                .placeholder="${ifDefined(this.placeholder)}"
                .readOnly="${ifDefined(this.readOnly)}"
                .required="${ifDefined(this.required)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .cols="${ifDefined(this.cols)}"
                .rows="${ifDefined(this.rows)}"
                @click="${this.handleTextFieldNativeClick}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `;
    }

    renderSelect() {
        /* prettier-ignore */
        return html`
            <select 
                class="md-text-field__native"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .disabled="${ifDefined(this.disabled)}"
                .multiple="${ifDefined(this.multiple)}"
                .name="${ifDefined(this.name)}"
                .required="${ifDefined(this.required)}"
                .size="${ifDefined(this.size)}"
                .value="${ifDefined(this.value)}"
                @click="${this.handleTextFieldNativeClick}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @change="${this.handleTextFieldNativeChange}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options?.map(option => html`
                    <option 
                        ?disabled="${ifDefined(option.disabled)}"
                        label="${ifDefined(option.label)}"
                        ?selected="${ifDefined(option.selected)}"
                        value="${ifDefined(option.value)}"
                        text="${ifDefined(option.text)}"
                    ></option>
                `)}
            </select>
        `;
    }

    renderNative() {
        return choose(
            this.type,
            [
                ["textarea", () => this.renderTextarea()],
                ["select", () => this.renderSelect()],
            ],
            () => this.renderInput(),
        );
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleTextFieldIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderAction(item) {
        return this.renderIconButton(item);
    }

    renderActions() {
        /* prettier-ignore */
        return this.actions?.length || this.error ? html`
            <div class="md-text-field__actions">
                ${this.error ? html`<div class="md-icon md-text-field__icon md-text-field__icon--error">error</div>` : nothing}
                ${this.actions?.map(item => this.renderAction(item))}
            </div>
        ` : nothing;
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-text-field__inner">
                ${this.label ? html`<div class="md-text-field__label">${this.label}</div>` : html`<div class="md-text-field__nolabel">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon ? html`<div class="md-icon md-text-field__icon">${this.icon}</div>` : nothing}
                    ${this.prefix ? html`<div class="md-text-field__meta">${this.prefix}</div>` : nothing}
                    ${this.renderNative()}
                    ${this.suffix ? html`<div class="md-text-field__meta">${this.suffix}</div>` : nothing}
                    ${this.renderActions()}
                </div>
                ${this.errorText || this.text ? html`<div class="md-text-field__text">${this.errorText || this.text}</div>` : nothing}
            </label>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        const defaultValue = {
            color: "#000000",
            date: "",
            "datetime-local": "",
            email: "",
            month: "",
            number: "",
            password: "",
            search: "",
            tel: "",
            text: "",
            time: "",
            url: "",
            week: "",
        };

        this.value = this.value || defaultValue[this.type];
        this.defaultValue = this.value;

        this.updatePopulation();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-text-field--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("icon")) {
            window.requestAnimationFrame(() => {
                this.style.setProperty("--md-comp-text-field-offset-left", this.native.offsetLeft + "px");
            });
        }
    }

    handleTextFieldNativeClick(event) {
        this.emit("onTextFieldNativeClick", event);
    }

    handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focused");

        this.emit("onTextFieldNativeFocus", event);
    }

    handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focused");

        this.emit("onTextFieldNativeBlur", event);
    }

    handleTextFieldNativeInput(event) {
        this.populate();

        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeChange(event) {
        this.populate();

        this.emit("onTextFieldNativeChange", event);
    }

    handleTextFieldNativeSearch(event) {
        this.populate();

        this.emit("onTextFieldNativeSearch", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.updateValidation();

        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        this.reset();

        this.emit("onTextFieldNativeReset", event);
    }

    handleTextFieldIconButtonClick(event) {
        this.emit("onTextFieldIconButtonClick", event);
    }

    /**
     * {{desc}}
     */
    populate() {
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.updatePopulation();
        this.updateValidation();
    }

    /**
     * {{desc}}
     */
    reset() {
        if (this.type !== "file") {
            this.native.value = this.defaultValue;
            this.value = this.defaultValue;
        }

        this.updatePopulation();
        this.updateValidation();
    }

    /**
     * {{desc}}
     */
    updatePopulation() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type === "file");
    }

    /**
     * {{desc}}
     */
    updateValidation() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;

        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
