import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";
/**
 * @extends MdComponent
 * @element md-radio-button
 */
class MDRadioButtonComponent extends MdComponent {
    /**
     * @property {String} [name]
     * @property {String} [value]
     * @property {Boolean} [indeterminate]
     * @property {Boolean} [checked]
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <input
                type="radio"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .defaultIndeterminate="${ifDefined(this.defaultIndeterminate)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                class="md-radio-button__native"
                @input="${this.handleRadioButtonNativeInput}"
                @reset="${this.handleRadioButtonNativeReset}"
            />
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.defaultValue = this.value;
        this.defaultIndeterminate = this.indeterminate;
        this.defaultChecked = this.checked;
        this.classList.add("md-radio-button");
        await this.updateComplete;
        this.ripple = new Ripple(this, {
            container: ".md-radio-button__track",
            trigger: ".md-radio-button__native",
            unbounded: true,
            radius: 40,
        });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        if (this.ripple) this.ripple.destroy();
    }

    handleRadioButtonNativeInput(event) {
        const native = event.currentTarget;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;
        /**
         * @event onRadioButtonNativeInput
         * @property {Object} event
         */
        this.emit("onRadioButtonNativeInput", { event });
    }

    handleRadioButtonNativeReset(event) {
        this.value = this.defaultValue;
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;
        /**
         * @event onRadioButtonNativeReset
         * @property {Object} event
         */
        this.emit("onRadioButtonNativeReset", { event });
    }
}

customElements.define("md-radio-button", MDRadioButtonComponent);

export { MDRadioButtonComponent };
