import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * A custom checkbox component with enhanced functionality.
 * @element md-checkbox
 * @extends MDComponent
 * @fires MDCheckboxComponent#onCheckboxNativeInput - Event emitted when the native checkbox input event is triggered.
 * @fires MDCheckboxComponent#onCheckboxNativeReset - Event emitted when the native checkbox reset event is triggered.
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * Defines the properties of the MDCheckboxComponent.
     * @property {Boolean} checked - Indicates whether the checkbox is checked.
     * @property {Boolean} defaultChecked - Indicates the default checked state of the checkbox.
     * @property {Boolean} disabled - Indicates whether the checkbox is disabled.
     * @property {Boolean} indeterminate - Indicates whether the checkbox is in an indeterminate state.
     * @property {String} value - The value associated with the checkbox.
     * @property {String} name - The name of the checkbox.
     * @property {String} type - The type of the checkbox (default is "checkbox").
     */
    static properties = {
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        indeterminate: { type: Boolean },
        value: { type: String },
        name: { type: String },
        type: { type: String },
    };

    /**
     * Creates an instance of MDCheckboxComponent.
     */
    constructor() {
        super();

        this.type = "checkbox";

        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-checkbox__native",
            containerSelector: ".md-checkbox__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * Renders the native input element of the checkbox.
     * @private
     */
    renderNative() {
        /* prettier-ignore */
        return html`
            <input 
                .type="${this.type}" 
                class="md-checkbox__native"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .disabled="${ifDefined(this.disabled)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .name="${ifDefined(this.name)}"
                @input="${this.handleCheckboxNativeInput}"
                @reset="${this.handleCheckboxNativeReset}"
            >
        `;
    }

    /**
     * Renders the track element of the checkbox.
     * @private
     */
    renderTrack() {
        /* prettier-ignore */
        return html`
            <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
        `;
    }

    /**
     * Renders the container element that wraps the native input and track elements.
     * @private
     */
    renderContainer() {
        /* prettier-ignore */
        return html`
            <div class="md-checkbox__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `;
    }

    /**
     * Renders the entire checkbox component.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-checkbox__inner">
                <div class="md-checkbox__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `;
    }

    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.defaultValue = this.value || "on";
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;

        this.classList.add("md-checkbox");
    }

    /**
     * Handles the native input event for the checkbox.
     * @param {Event} event - The input event object.
     * @private
     */
    handleCheckboxNativeInput(event) {
        const native = event.currentTarget;

        this.value = native.value;
        this.checked = native.checked;
        this.indeterminate = native.indeterminate;

        this.emit("onCheckboxNativeInput", event);
    }

    /**
     * Handles the native reset event for the checkbox.
     * @param {Event} event - The reset event object.
     * @private
     */
    handleCheckboxNativeReset(event) {
        const native = event.currentTarget;

        native.value = this.defaultValue;
        native.checked = this.defaultChecked;
        native.indeterminate = this.defaultIndeterminate;

        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;

        this.emit("onCheckboxNativeReset", event);
    }
}

customElements.define("md-checkbox", MDCheckboxComponent);

export { MDCheckboxComponent };
