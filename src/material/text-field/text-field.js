import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";

/**
 * MDTextFieldComponent represents a material design text field.
 *
 * @extends MDComponent
 */
class MDTextFieldComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} icon - The icon for the text field.
     * @property {String} trailingIcon - The trailing icon for the text field.
     * @property {String} label - The label for the text field.
     * @property {String} name - The name attribute for the text field.
     * @property {String} value - The current value of the text field.
     * @property {String} defaultValue - The default value of the text field.
     * @property {Boolean} required - Indicates if the text field is required.
     * @property {String} type - The type of the text field (e.g., "text", "number").
     * @property {String} validationMessage - The validation message for the text field.
     * @property {String} supportingText - The supporting text for the text field.
     * @property {String} ui - The user interface style for the text field.
     */
    static properties = {
        icon: { type: String },
        trailingIcon: { type: String },
        label: { type: String },
        name: { type: String },
        value: { type: String },
        defaultValue: { type: String },
        required: { type: Boolean },
        type: { type: String },
        validationMessage: { type: String },
        supportingText: { type: String },
        ui: { type: String },
    };

    /**
     * Indicates whether the text field has a start element.
     *
     * @returns {Boolean} - True if there is a start element; otherwise, false.
     */
    get hasTextfieldStart() {
        return this.icon;
    }

    /**
     * Indicates whether the text field has a center element.
     *
     * @returns {Boolean} - True if there is a center element; otherwise, false.
     */
    get hasTextfieldCenter() {
        return true;
    }

    /**
     * Indicates whether the text field has an end element.
     *
     * @returns {Boolean} - True if there is an end element; otherwise, false.
     */
    get hasTextfieldEnd() {
        return this.trailingIcon || this.type === "datetime-local" || this.type === "month" || this.type === "time" || this.type === "week" || this.type === "number";
    }

    /**
     * Indicates whether the text field has supporting text.
     *
     * @returns {Boolean} - True if there is supporting text; otherwise, false.
     */
    get hasTextfieldSupportingText() {
        return this.supportingText || this.validationMessage;
    }

    /**
     * Getter for the native text field element.
     *
     * @returns {HTMLInputElement} - The native text field element.
     */
    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    /**
     * Constructor for MDTextFieldComponent.
     */
    constructor() {
        super();

        // default
        this.type = "text";
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        // Add the 'md-text-field' class to the component
        this.classList.add("md-text-field");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        // Remove the 'md-text-field' class from the component
        this.classList.remove("md-text-field");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        // Store the initial value as the default value
        this.defaultValue = this.value;
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        // Update UI classes based on changes
        if (changedProperties.has("ui")) {
            ["filled", "outlined"].forEach((ui) => {
                this.classList.remove(`md-text-field--${ui}`);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-text-field--${ui}`);
                });
            }
        }

        // Update 'md-text-field--populated' class based on value
        if (changedProperties.has("value")) {
            if (this.value) {
                this.classList.add("md-text-field--populated");
            } else {
                this.classList.remove("md-text-field--populated");
            }
        }

        // Update 'md-text-field--error' class based on validation message
        if (changedProperties.has("validationMessage")) {
            if (this.validationMessage) {
                this.classList.add("md-text-field--error");
            } else {
                this.classList.remove("md-text-field--error");
            }
        }

        // Set custom property for text field indent
        this.style.setProperty("--md-text-field-indent", `${this.textFieldNative.offsetLeft}px`);
    }

    /**
     * Renders the text field component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.label ? html`<div class="md-text-field__label">${this.label}</div>` : nothing}
            <label class="md-text-field__container">
                ${this.hasTextfieldStart ? html`
                    <div class="md-text-field__start">
                        ${this.icon ? html`<md-icon class="md-text-field__icon">${this.icon}</md-icon>` : nothing}
                    </div>
                ` : nothing}
                ${this.hasTextfieldCenter ? html`
                    <div class="md-text-field__center">
                        <input 
                            class="md-text-field__native"
                            .name="${ifDefined(this.name)}"
                            .value="${ifDefined(this.value)}"
                            .defaultValue="${ifDefined(this.defaultValue)}"
                            .required="${ifDefined(this.required)}"
                            .type="${ifDefined(this.type)}"
                            .autocomplete="${ifDefined(this.autocomplete??'off')}"
                            @input="${this.handleTextFieldNativeInput}"
                            @invalid="${this.handleTextFieldNativeInvalid}"
                            @focus="${this.handleTextFieldNativeFocus}"
                            @blur="${this.handleTextFieldNativeBlur}"
                            @onTextFieldNativeReset="${this.handleTextFieldNativeReset}"
                        >
                    </div>
                ` : nothing}
                ${this.hasTextfieldEnd ? html`
                    <div class="md-text-field__end">
                        ${this.trailingIcon ? html`<md-icon class="md-text-field__icon">${this.trailingIcon}</md-icon>` : nothing}
                        ${this.type==='datetime-local' ? html`<md-icon-button class="md-text-field__icon" @click="${this.showPicker}" .icon="${'calendar_today'}"></md-icon-button>` : nothing}
                        ${this.type==='month' ? html`<md-icon-button class="md-text-field__icon" @click="${this.showPicker}" .icon="${'calendar_today'}"></md-icon-button>` : nothing}
                        ${this.type==='time' ? html`<md-icon-button class="md-text-field__icon" @click="${this.showPicker}" .icon="${'schedule'}"></md-icon-button>` : nothing}
                        ${this.type==='week' ? html`<md-icon-button class="md-text-field__icon" @click="${this.showPicker}" .icon="${'calendar_today'}"></md-icon-button>` : nothing}
                        ${this.type==='number' ? html`
                            <div class="md-text-field__icons">
                                <md-icon-button class="md-text-field__icon" @click="${this.stepUp}" .icon="${'arrow_drop_up'}"></md-icon-button>
                                <md-icon-button class="md-text-field__icon" @click="${this.stepDown}" .icon="${'arrow_drop_down'}"></md-icon-button>
                            </div>
                        ` : nothing}
                    </div>
                ` : nothing}
            </label>
            ${this.hasTextfieldSupportingText ? html`<div class="md-text-field__supporting-text">${this.validationMessage ?? this.supportingText}</div>` : nothing}
        `;
    }

    /**
     * Event handler for the input event on the native text field.
     *
     * @param {Event} event - The input event.
     * @fires MDTextFieldComponent#onTextFieldNativeInput
     */
    handleTextFieldNativeInput(event) {
        // Update the value property and emit the custom event
        this.value = this.textFieldNative.value;
        this.emit("onTextFieldNativeInput", { event });
    }

    /**
     * Event handler for the invalid event on the native text field.
     *
     * @param {Event} event - The invalid event.
     * @fires MDTextFieldComponent#onTextFieldNativeInvalid
     */
    handleTextFieldNativeInvalid(event) {
        // Prevent default behavior and emit the custom event
        event.preventDefault();
        this.validationMessage = this.textFieldNative.validationMessage;
        this.emit("onTextFieldNativeInvalid", { event });
    }

    /**
     * Event handler for the focus event on the native text field.
     *
     * @param {Event} event - The focus event.
     * @fires MDTextFieldComponent#onTextFieldNativeFocus
     */
    handleTextFieldNativeFocus(event) {
        // Add the 'md-text-field--focused' class and emit the custom event
        this.classList.add("md-text-field--focused");
        // this.showPicker()
        this.emit("onTextFieldNativeFocus", { event });
    }

    /**
     * Event handler for the blur event on the native text field.
     *
     * @param {Event} event - The blur event.
     * @fires MDTextFieldComponent#onTextFieldNativeBlur
     */
    handleTextFieldNativeBlur(event) {
        // Remove the 'md-text-field--focused' class and emit the custom event
        this.classList.remove("md-text-field--focused");
        this.emit("onTextFieldNativeBlur", { event });
    }

    /**
     * Event handler for the custom reset event on the native text field.
     *
     * @param {Event} event - The custom reset event.
     * @fires MDTextFieldComponent#onTextFieldNativeReset
     */
    handleTextFieldNativeReset(event) {
        // Reset the value and validation message properties, and emit the custom event
        this.value = this.defaultValue;
        this.validationMessage = null;
        this.emit("onTextFieldNativeReset", { event });
    }

    // checkValidity(){this.textFieldNative.checkValidity()}
    // reportValidity(){this.textFieldNative.reportValidity()}
    // select(){this.textFieldNative.select()}
    // setCustomValidity(){this.textFieldNative.setCustomValidity()}
    // setRangeText(){this.textFieldNative.setRangeText()}
    // setSelectionRange(){this.textFieldNative.setSelectionRange()}

    /**
     * Show the picker associated with the text field.
     */
    showPicker() {
        this.textFieldNative.showPicker();
    }

    /**
     * Step down the value of the text field.
     */
    stepDown() {
        this.textFieldNative.stepDown();
        this.value = this.textFieldNative.value;
    }

    /**
     * Step up the value of the text field.
     */
    stepUp() {
        this.textFieldNative.stepUp();
        this.value = this.textFieldNative.value;
    }
}

// Define the custom element
customElements.define("md-text-field", MDTextFieldComponent);

// Export the component
export { MDTextFieldComponent };
