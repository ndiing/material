import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * A component for creating a custom checkbox with ripple effect.
 * @extends MDComponent
 * @tagname md-checkbox
 * @fires MDCheckboxComponent#onCheckboxNativeInput - Triggered when the checkbox value changes.
 * @fires MDCheckboxComponent#onCheckboxNativeReset - Triggered when the checkbox is reset.
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * @property {Boolean} checked - Indicates whether the checkbox is checked.
     * @property {Boolean} defaultChecked - Indicates whether the checkbox is checked by default.
     * @property {Boolean} disabled - Indicates whether the checkbox is disabled.
     * @property {Boolean} indeterminate - Indicates whether the checkbox is in an indeterminate state.
     * @property {String} value - The value of the checkbox.
     * @property {String} name - The name of the checkbox.
     * @property {String} type - The type of the input element, default is "checkbox".
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

    renderTrack() {
        /* prettier-ignore */
        return html`
            <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
        `;
    }

    renderContainer() {
        /* prettier-ignore */
        return html`
            <div class="md-checkbox__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            <label class="md-checkbox__inner">
                <div class="md-checkbox__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.defaultValue = this.value || "on";
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;

        this.classList.add("md-checkbox");
    }

    handleCheckboxNativeInput(event) {
        const native = event.currentTarget;

        this.value = native.value;
        this.checked = native.checked;
        this.indeterminate = native.indeterminate;

        this.emit("onCheckboxNativeInput", event);
    }

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
