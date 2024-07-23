import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-radio-button
 * @fires MDRadioButtonComponent#onRadioButtonNativeInput - {{desc}}
 * @fires MDRadioButtonComponent#onRadioButtonNativeReset - {{desc}}
 */
class MDRadioButtonComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} name - {{desc}}
     * @property {String} value - {{desc}}
     * @property {Boolean} indeterminate - {{desc}}
     * @property {Boolean} checked - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
    };

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            button: ".md-radio-button__native",
            container: ".md-radio-button__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    radioButtonNative = createRef();

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-radio-button__native"
                aria-label="label"
                type="radio" 
                .name="${ifDefined(this.name)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                ${ref(this.radioButtonNative)}
                @input="${this.handleRadioButtonNativeInput}"
                @reset="${this.handleRadioButtonNativeReset}"
            >
            <div class="md-radio-button__track"><div class="md-radio-button__thumb"></div></div>
        `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-radio-button");
        if (this.defaultValue === undefined) {
            this.defaultValue = this.value || "on";
        }
        if (this.defaultChecked === undefined) {
            this.defaultChecked = !!this.checked;
        }
        if (this.defaultIndeterminate === undefined) {
            this.defaultIndeterminate = !!this.indeterminate;
        }
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleRadioButtonNativeInput(event) {
        this.value = this.radioButtonNative.value.value;
        this.checked = this.radioButtonNative.value.checked;
        this.indeterminate = this.radioButtonNative.value.indeterminate;
        this.emit("onRadioButtonNativeInput", event);
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleRadioButtonNativeReset(event) {
        this.radioButtonNative.value.value = this.defaultValue;
        this.radioButtonNative.value.checked = this.defaultChecked;
        this.radioButtonNative.value.indeterminate = this.defaultIndeterminate;
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onRadioButtonNativeReset", event);
    }
}
customElements.define("md-radio-button", MDRadioButtonComponent);
export { MDRadioButtonComponent };
