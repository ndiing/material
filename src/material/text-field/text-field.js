import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * {{description}}
 * @element md-text-field
 * @extends MDComponent
 * @fires MDTextFieldComponent#onTextFieldNativeClick - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeFocus - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeBlur - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeInput - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeChange - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeSearch - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeInvalid - {{description}}
 * @fires MDTextFieldComponent#onTextFieldNativeReset - {{description}}
 * @fires MDTextFieldComponent#onTextFieldIconButtonClick - {{description}}
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} label - {{description}}
     * @property {String} icon - {{description}}
     * @property {String} prefix - {{description}}
     * @property {String} suffix - {{description}}
     * @property {Array} actions - {{description}}
     * @property {String} text - {{description}}
     * @property {String} accept - {{description}}
     * @property {String} alt - {{description}}
     * @property {String} autocomplete - {{description}}
     * @property {Boolean} autofocus - {{description}}
     * @property {Boolean} disabled - {{description}}
     * @property {String} max - {{description}}
     * @property {Number} maxLength - {{description}}
     * @property {String} min - {{description}}
     * @property {Number} minLength - {{description}}
     * @property {Boolean} multiple - {{description}}
     * @property {String} name - {{description}}
     * @property {String} pattern - {{description}}
     * @property {String} placeholder - {{description}}
     * @property {Boolean} readOnly - {{description}}
     * @property {Boolean} required - {{description}}
     * @property {Number} size - {{description}}
     * @property {String} step - {{description}}
     * @property {String} type - {{description}}
     * @property {String} defaultValue - {{description}}
     * @property {String} value - {{description}}
     * @property {Number} cols - {{description}}
     * @property {Number} rows - {{description}}
     * @property {Boolean} spellcheck - {{description}}
     * @property {String} wrap - {{description}}
     * @property {Array} options - {{description}}
     * @property {String} src - {{description}}
     * @property {Boolean} checked - {{description}}
     * @property {Boolean} defaultChecked - {{description}}
     * @property {FileList} files - {{description}}
     * @property {Object} form - {{description}}
     * @property {String} formAction - {{description}}
     * @property {String} formEnctype - {{description}}
     * @property {String} formMethod - {{description}}
     * @property {Boolean} formNoValidate - {{description}}
     * @property {String} formTarget - {{description}}
     * @property {Number} height - {{description}}
     * @property {Boolean} indeterminate - {{description}}
     * @property {Object} list - {{description}}
     * @property {Number} width - {{description}}
     * @property {String} inputMode - {{description}}
     * @property {String} selectionDirection - {{description}}
     * @property {Number} selectionEnd - {{description}}
     * @property {Number} selectionStart - {{description}}
     * @property {String} align - {{description}}
     * @property {String} useMap - {{description}}
     * @property {Number} length - {{description}}
     * @property {Number} selectedIndex - {{description}}
     * @property {HTMLCollection} selectedOptions - {{description}}
     * @property {String} errorText - {{description}}
     * @property {Boolean} error - {{description}}
     * @property {String} variant - {{description}}
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
     * {{description}}
     */
    get native() {
        return this.querySelector(".md-text-field__native");
    }

    /**
     * {{description}}
     */
    get container() {
        return this.querySelector(".md-text-field__container");
    }

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.type = "text";
        this.autocomplete = "off";

        this.renderIconButton = this.renderIconButton.bind(this);
    }

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
    renderAction(item) {
        return this.renderIconButton(item);
    }

    /**
     * @private
     */
    renderActions() {
        /* prettier-ignore */
        return this.actions?.length || this.error ? html`
            <div class="md-text-field__actions">
                ${this.error ? html`<div class="md-icon md-text-field__icon md-text-field__icon--error">error</div>` : nothing}
                ${this.actions?.map(item => this.renderAction(item))}
            </div>
        ` : nothing;
    }

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
    handleTextFieldNativeClick(event) {
        this.emit("onTextFieldNativeClick", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeFocus(event) {
        this.classList.add("md-text-field--focused");

        this.emit("onTextFieldNativeFocus", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeBlur(event) {
        this.classList.remove("md-text-field--focused");

        this.emit("onTextFieldNativeBlur", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeInput(event) {
        this.populate();

        this.emit("onTextFieldNativeInput", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeChange(event) {
        this.populate();

        this.emit("onTextFieldNativeChange", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeSearch(event) {
        this.populate();

        this.emit("onTextFieldNativeSearch", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeInvalid(event) {
        event.preventDefault();

        this.updateValidation();

        this.emit("onTextFieldNativeInvalid", event);
    }

    /**
     * @private
     */
    handleTextFieldNativeReset(event) {
        this.reset();

        this.emit("onTextFieldNativeReset", event);
    }

    /**
     * @private
     */
    handleTextFieldIconButtonClick(event) {
        this.emit("onTextFieldIconButtonClick", event);
    }

    /**
     * {{description}}
     */
    populate() {
        if (this.type !== "file") {
            this.value = this.native.value;
        }

        this.updatePopulation();
        this.updateValidation();
    }

    /**
     * {{description}}
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
     * {{description}}
     */
    updatePopulation() {
        this.classList.toggle("md-text-field--populated", !!this.value || this.type === "file");
    }

    /**
     * {{description}}
     */
    updateValidation() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;

        this.classList.toggle("md-text-field--error", this.error);
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
