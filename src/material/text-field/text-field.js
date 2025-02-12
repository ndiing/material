import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";

/**
 *
 * @extends MdComponent
 * @fires MdTextFieldComponent#onTextFieldFocus
 * @fires MdTextFieldComponent#onTextFieldBlur
 * @fires MdTextFieldComponent#onTextFieldInput
 * @fires MdTextFieldComponent#onTextFieldInvalid
 * @fires MdTextFieldComponent#onTextFieldReset
 * @fires MdTextFieldComponent#onTextFieldIconButtonCancelClick
 * @fires MdTextFieldComponent#onTextFieldIconButtonClick
 * @fires MdTextFieldComponent#onTextFieldClick
 * @element md-text-field
 */
class MdTextFieldComponent extends MdComponent {
    /**
     * @property {String} [label]
     * @property {Boolean} [separateLabel]
     * @property {Array} [icons]
     * @property {String} [prefix]
     * @property {String} [suffix]
     * @property {Array} [actions]
     * @property {String} [text]
     * @property {String} [error]
     * @property {String} [counter]
     * @property {String} [name]
     * @property {String} [type]
     * @property {String} [value]
     * @property {String} [placeholder]
     * @property {String} [title]
     * @property {String} [autocomplete]
     * @property {Boolean} [required]
     * @property {Boolean} [readOnly]
     * @property {Number} [min]
     * @property {Number} [max]
     * @property {Number} [minLength]
     * @property {Number} [maxLength]
     * @property {String} [pattern]
     * @property {String} [variant] - ["outlined","filled"]
     * @property {Boolean} [disabled]
     * @property {Boolean} [errorIcon]
     * @property {Boolean} [cancelAction]
     */
    static properties = {
        label: { type: String },
        separateLabel: { type: Boolean },
        icons: { type: Array },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },
        error: { type: String },
        counter: { type: String },
        name: { type: String },
        type: { type: String },
        value: { type: String },
        placeholder: { type: String },
        title: { type: String },
        autocomplete: { type: String },
        required: { type: Boolean },
        readOnly: { type: Boolean },
        min: { type: Number },
        max: { type: Number },
        minLength: { type: Number },
        maxLength: { type: Number },
        pattern: { type: String },
        variant: { type: String },
        disabled: { type: Boolean, reflect: true },
        errorIcon: { type: Boolean },
        cancelAction: { type: Boolean },
    };

    /**
     * @readonly
     */
    variants = ["outlined", "filled"];

    /**
     *
     * @readonly
     */
    get leadingActions() {
        let actions = [];
        if (this.errorIcon && this.error)
            actions = actions.concat([
                {
                    id: "error",
                    component: "icon",
                    icon: "error",
                    classMap: { "md-text-field__icon--error": true },
                },
            ]);
        if (this.cancelAction && this.value)
            actions = actions.concat([
                {
                    id: "cancel",
                    component: "icon-button",
                    icon: "cancel",
                },
            ]);
        return actions;
    }

    /**
     *
     * @readonly
     */
    get trailingActions() {
        let actions = [];
        return actions;
    }

    /**
     *
     * @readonly
     */
    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    /**
     *
     */
    constructor() {
        super();
        this.type = "text";
        this.title = "";
        this.autocomplete = "off";
        this.actions = [];
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderIcon(item) {
        return html`
            <md-icon
                .data="${item}"
                class="${classMap({ ...item.classMap })}"
                >${item.icon}</md-icon
            >
        `;
    }

    /**
     *
     * @private
     * @param {Any} [item]
     */
    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="${classMap({ ...item.classMap })}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleTextFieldIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     *
     * @private
     * @param {Any} [item]
     * @param {Any} [component="icon"]
     */
    renderItem(item, component = "icon") {
        return choose(
            item.component || component,
            [
                ["icon", () => this.renderIcon(item)],
                ["icon-button", () => this.renderIconButton(item)],
            ],
            () => nothing,
        );
    }

    /**
     *
     * @private
     */
    render() {
        const actions = this.leadingActions.concat(this.actions).concat(this.trailingActions);
        /* prettier-ignore */
        return html`
            ${this.label ? html`<label class="md-text-field__label">${this.label}</label>` : nothing}
            <div class="md-text-field__container">
                ${this.icons?.length
                    ? html`
                          <div
                            class="md-text-field__icons"
                          >
                              ${this.icons.map((item) => this.renderItem(item, "icon"))}
                          </div>
                      `
                    : nothing}
                ${this.prefix ? html`<div class="md-text-field__prefix">${this.prefix}</div>` : nothing}
                <input
                    .name="${ifDefined(this.name)}"
                    .type="${ifDefined(this.type)}"
                    .value="${ifDefined(this.value)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .title="${ifDefined(this.title)}"
                    .autocomplete="${ifDefined(this.autocomplete)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    .min="${ifDefined(this.min)}"
                    .max="${ifDefined(this.max)}"
                    .minLength="${ifDefined(this.minLength)}"
                    .maxLength="${ifDefined(this.maxLength)}"
                    .pattern="${ifDefined(this.pattern)}"
                    @focus="${this.handleTextFieldFocus}"
                    @blur="${this.handleTextFieldBlur}"
                    @input="${this.handleTextFieldInput}"
                    @invalid="${this.handleTextFieldInvalid}"
                    @reset="${this.handleTextFieldReset}"
                    @click="${this.handleTextFieldClick}"
                    class="md-text-field__native"
                />
                ${this.suffix
                    ? html`<div
                          class="md-text-field__suffix"
                      >
                          ${this.suffix}
                      </div>`
                    : nothing}
                ${actions?.length
                    ? html`
                          <div
                              class="md-text-field__actions"
                          >
                              ${actions.map((item) => this.renderItem(item, "icon-button"))}
                          </div>
                      `
                    : nothing}
            </div>
            ${this.text || this.error || this.counter
                ? html`
                      <div
                          class="md-text-field__wrapper"
                      >
                          ${this.text || this.error
                              ? html`<div
                                    class="md-text-field__text"
                                >
                                    ${this.error || this.text}
                                </div>`
                              : nothing}
                          ${this.counter
                              ? html`<div
                                    class="md-text-field__counter"
                                >
                                    ${this.counter}
                                </div>`
                              : nothing}
                      </div>
                  `
                : nothing}
        `;
    }

    /**
     *
     * @private
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();
        this.defaultValue = this.value;
        this.classList.add("md-text-field");
        this.classList.toggle("md-text-field--populated", !!this.value);
        await this.updateComplete;
        this.textFieldOffset = this.querySelector(".md-text-field__prefix,.md-text-field__native");
        this.style.setProperty("--md-comp-text-field-offset-left", this.textFieldOffset.offsetLeft + "px");
    }

    /**
     *
     * @private
     * @param {Any} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-text-field--${variant}`, variant === this.variant);
            });
        }
        if (changedProperties.has("separateLabel")) {
            this.classList.toggle(`md-text-field--separate-label`, !!this.separateLabel);
        }
        if (changedProperties.has("label")) {
            this.classList.toggle(`md-text-field--with-label`, !!this.label);
        }
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldFocus(event) {
        this.classList.add("md-text-field--focus");
        this.emit("onTextFieldFocus", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldBlur(event) {
        this.classList.remove("md-text-field--focus");
        this.emit("onTextFieldBlur", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldInput(event) {
        this.value = this.textFieldNative.value;
        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--populated", !!this.textFieldNative.value);
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldInput", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldInvalid(event) {
        event.preventDefault();
        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldInvalid", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldReset(event) {
        this.value = this.defaultValue;
        this.error = undefined;
        this.classList.toggle("md-text-field--populated", !!this.value);
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldReset", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldIconButtonCancelClick(event) {
        this.textFieldNative.value = "";
        this.value = this.textFieldNative.value;
        this.error = undefined;
        this.classList.toggle("md-text-field--populated", !!this.textFieldNative.value);
        this.classList.toggle("md-text-field--error", !!this.error);
        this.emit("onTextFieldIconButtonCancelClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldIconButtonClick(event) {
        const data = event.currentTarget.data;
        if (data.id === "cancel") return this.handleTextFieldIconButtonCancelClick(event);
        this.emit("onTextFieldIconButtonClick", { event });
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handleTextFieldClick(event) {
        event.preventDefault();
        this.emit("onTextFieldClick", { event });
    }
}
customElements.define("md-text-field", MdTextFieldComponent);
export { MdTextFieldComponent };
