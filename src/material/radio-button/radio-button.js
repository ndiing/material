import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @element md-radio-button
 * @fires MdRadioButtonComponent#onRadioButtonNativeInput
 * @fires MdRadioButtonComponent#onRadioButtonNativeReset
 */
class MdRadioButtonComponent extends MdComponent {
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

    /**
     */
    constructor() {
        super();
    }

    /**
     * @private
     */
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

    /**
     * @private
     * @async
     */
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

    /**
     * @private
     * @async
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        if (this.ripple) this.ripple.destroy();
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleRadioButtonNativeInput(event) {
        const native = event.currentTarget;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;
        this.emit("onRadioButtonNativeInput", { event });
    }

    /**
     * @private
     * @param {Undefined} [event]
     */
    handleRadioButtonNativeReset(event) {
        this.value = this.defaultValue;
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;
        this.emit("onRadioButtonNativeReset", { event });
    }
}
customElements.define("md-radio-button", MdRadioButtonComponent);
export { MdRadioButtonComponent };
