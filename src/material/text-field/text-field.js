import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-text-field
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeInput - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldNativeReset - {{desc}}
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - {{desc}}
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * @property {String} label - {{desc}}
     * @property {String} icon - {{desc}}
     * @property {String} prefix - {{desc}}
     * @property {String} suffix - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {String} text - {{desc}}
     * @property {String} accept - {{desc}}
     * @property {String} alt - {{desc}}
     * @property {String} autocomplete - {{desc}}
     * @property {Boolean} autofocus - {{desc}}
     * @property {Boolean} checked - {{desc}}
     * @property {Boolean} defaultChecked - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     * @property {FileList} files - {{desc}}
     * @property {Object} form - {{desc}}
     * @property {String} formAction - {{desc}}
     * @property {String} formEnctype - {{desc}}
     * @property {String} formMethod - {{desc}}
     * @property {Boolean} formNoValidate - {{desc}}
     * @property {String} formTarget - {{desc}}
     * @property {Number} height - {{desc}}
     * @property {Boolean} indeterminate - {{desc}}
     * @property {Object} list - {{desc}}
     * @property {String} max - {{desc}}
     * @property {Number} maxLength - {{desc}}
     * @property {String} min - {{desc}}
     * @property {Number} minLength - {{desc}}
     * @property {Boolean} multiple - {{desc}}
     * @property {String} name - {{desc}}
     * @property {String} pattern - {{desc}}
     * @property {String} placeholder - {{desc}}
     * @property {Boolean} readOnly - {{desc}}
     * @property {Boolean} required - {{desc}}
     * @property {Number} size - {{desc}}
     * @property {String} src - {{desc}}
     * @property {String} step - {{desc}}
     * @property {String} type - {{desc}}
     * @property {String} defaultValue - {{desc}}
     * @property {String} value - {{desc}}
     * @property {Number} width - {{desc}}
     * @property {String} inputMode - {{desc}}
     * @property {String} selectionDirection - {{desc}}
     * @property {Number} selectionEnd - {{desc}}
     * @property {Number} selectionStart - {{desc}}
     * @property {String} align - {{desc}}
     * @property {String} useMap - {{desc}}
     * @property {Number} cols - {{desc}}
     * @property {Number} rows - {{desc}}
     * @property {Boolean} spellcheck - {{desc}}
     * @property {String} wrap - {{desc}}
     * @property {Number} length - {{desc}}
     * @property {Number} selectedIndex - {{desc}}
     * @property {HTMLCollection} selectedOptions - {{desc}}
     * @property {Array} options - {{desc}}
     * @property {String} errorText - {{desc}}
     * @property {Boolean} error - {{desc}}
     * @property {String} variant - {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    populate() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type == "file");
    }

    /**
     * {{desc}}
     */
    validate() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;

        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
