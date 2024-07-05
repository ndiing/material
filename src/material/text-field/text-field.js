import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * A text field component for Material Design framework.
 * @extends MDComponent
 * @tagname md-text-field
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - Event fired when the native input field receives focus.
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - Event fired when the native input field loses focus.
 * @fires MDTextFieldComponent#onTextFieldNativeInput - Event fired when the value of the native input field changes.
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - Event fired when a search is performed in the native input field.
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - Event fired when the native input field is invalid.
 * @fires MDTextFieldComponent#onTextFieldNativeReset - Event fired when the native input field is reset.
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - Event fired when an icon button in the text field is clicked.
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * @property {String} label - The label for the text field.
     * @property {String} icon - The icon to display in the text field.
     * @property {String} prefix - The prefix text to display in the text field.
     * @property {String} suffix - The suffix text to display in the text field.
     * @property {Array} actions - The actions available in the text field.
     * @property {String} text - The text content of the text field.
     * @property {String} accept - The file types accepted by the input field.
     * @property {String} alt - The alternative text for the input field.
     * @property {String} autocomplete - The autocomplete attribute for the input field.
     * @property {Boolean} autofocus - Whether the input field should be focused automatically.
     * @property {Boolean} checked - Whether the input field is checked.
     * @property {Boolean} defaultChecked - The default checked state of the input field.
     * @property {Boolean} disabled - Whether the input field is disabled.
     * @property {FileList} files - The files selected in the input field.
     * @property {Object} form - The form element associated with the input field.
     * @property {String} formAction - The action URL for the form.
     * @property {String} formEnctype - The encoding type for the form.
     * @property {String} formMethod - The HTTP method for the form.
     * @property {Boolean} formNoValidate - Whether the form should not be validated.
     * @property {String} formTarget - The target for the form.
     * @property {Number} height - The height of the input field.
     * @property {Boolean} indeterminate - Whether the input field is indeterminate.
     * @property {Object} list - The list element associated with the input field.
     * @property {String} max - The maximum value for the input field.
     * @property {Number} maxLength - The maximum length of the input field.
     * @property {String} min - The minimum value for the input field.
     * @property {Number} minLength - The minimum length of the input field.
     * @property {Boolean} multiple - Whether the input field allows multiple values.
     * @property {String} name - The name of the input field.
     * @property {String} pattern - The pattern for the input field.
     * @property {String} placeholder - The placeholder text for the input field.
     * @property {Boolean} readOnly - Whether the input field is read-only.
     * @property {Boolean} required - Whether the input field is required.
     * @property {Number} size - The size of the input field.
     * @property {String} src - The source URL for the input field.
     * @property {String} step - The step value for the input field.
     * @property {String} type - The type of the input field.
     * @property {String} defaultValue - The default value of the input field.
     * @property {String} value - The value of the input field.
     * @property {Number} width - The width of the input field.
     * @property {String} inputMode - The input mode for the input field.
     * @property {String} selectionDirection - The selection direction for the input field.
     * @property {Number} selectionEnd - The selection end position for the input field.
     * @property {Number} selectionStart - The selection start position for the input field.
     * @property {String} align - The alignment of the input field.
     * @property {String} useMap - The use map for the input field.
     * @property {Number} cols - The number of columns for the textarea.
     * @property {Number} rows - The number of rows for the textarea.
     * @property {Boolean} spellcheck - Whether spellcheck is enabled for the input field.
     * @property {String} wrap - The wrap attribute for the textarea.
     * @property {Number} length - The length of the input field.
     * @property {Number} selectedIndex - The selected index for the select field.
     * @property {HTMLCollection} selectedOptions - The selected options for the select field.
     * @property {Array} options - The options for the select field.
     * @property {String} errorText - The error text to display for the input field.
     * @property {Boolean} error - Whether the input field has an error.
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
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        files: { type: FileList },
        form: { type: Object },
        formAction: { type: String },
        formEnctype: { type: String },
        formMethod: { type: String },
        formNoValidate: { type: Boolean },
        formTarget: { type: String },
        height: { type: Number },
        indeterminate: { type: Boolean },
        list: { type: Object },
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
        src: { type: String },
        step: { type: String },
        type: { type: String },
        defaultValue: { type: String },
        value: { type: String },
        width: { type: Number },
        inputMode: { type: String },
        selectionDirection: { type: String },
        selectionEnd: { type: Number },
        selectionStart: { type: Number },
        align: { type: String },
        useMap: { type: String },
        cols: { type: Number },
        rows: { type: Number },
        spellcheck: { type: Boolean },
        wrap: { type: String },
        length: { type: Number },
        selectedIndex: { type: Number },
        selectedOptions: { type: HTMLCollection },
        options: { type: Array },

        errorText: { type: String },
        error: { type: Boolean },

        variant: { type: String },
    };

    variants = ["filled", "outlined", "rounded"];

    /**
     * Returns the native input element inside the component.
     */
    get native() {
        return this.querySelector(".md-text-field__native");
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
                .src="${ifDefined(this.src)}"
                .step="${ifDefined(this.step)}"
                .type="${ifDefined(this.type)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
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
            "datetime-local": "",
            date: "",
            time: "",
            week: "",
            month: "",
            url: "",
            email: "",
        };

        this.value = this.value || defaultValue[this.type];
        this.defaultValue = this.value;

        this.populate();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("icon")) {
            window.requestAnimationFrame(() => {
                this.style.setProperty("--md-comp-text-field-offset-left", this.native.offsetLeft + "px");
            });
        }
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
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeInput", event);
    }

    handleTextFieldNativeChange(event) {
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeChange", event);
    }

    handleTextFieldNativeSearch(event) {
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeSearch", event);
    }

    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.validate();

        this.emit("onTextFieldNativeInvalid", event);
    }

    handleTextFieldNativeReset(event) {
        if (this.type !== "file") {
            this.native.value = this.defaultValue;
            this.value = this.defaultValue;
        }

        this.populate();
        this.validate();

        this.emit("onTextFieldNativeReset", event);
    }

    handleTextFieldIconButtonClick(event) {
        this.emit("onTextFieldIconButtonClick", event);
    }

    /**
     * Toggles the "md-text-field--populated" class based on the presence of a value or if the type is "file".
     */
    populate() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type === "file");
    }

    /**
     * Validates the input field, setting the error text and toggling the "md-text-field--error" class based on the validation state.
     */
    validate() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;

        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
