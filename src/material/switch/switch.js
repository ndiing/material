import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ripple } from "../ripple/ripple";
/**
 * @extends MdComponent
 * @element md-switch
 */
class MDSwitchComponent extends MdComponent {
    /**
     * @property {String} [name]
     * @property {String} [value]
     * @property {Boolean} [indeterminate]
     * @property {Boolean} [checked]
     * @property {Array} [icons]
     */

    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        icons: { type: Array },
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <input
                type="checkbox"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .defaultIndeterminate="${ifDefined(this.defaultIndeterminate)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                class="md-switch__native"
                @input="${this.handleSwitchNativeInput}"
                @reset="${this.handleSwitchNativeReset}"
            />
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this.icons?.length ? html`<md-icon class="md-switch__icon">${this.icons[~~this.checked]}</md-icon>` : nothing}</div>
            </div>
        `;
    }
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");
        this.style.setProperty("--md-comp-switch-thumb-transition-property", "none");
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.defaultValue = this.value;
        this.defaultIndeterminate = this.indeterminate;
        this.defaultChecked = this.checked;
        this.ripple = new Ripple(this, {
            container: ".md-switch__thumb",
            trigger: ".md-switch__native",
            unbounded: true,
            radius: 40,
            centered: true,
        });
    }

    handleSwitchNativeInput(event) {
        this.style.removeProperty("--md-comp-switch-thumb-transition-property");
        const native = event.currentTarget;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;
        /**
         * @event onSwitchNativeInput
         * @property {Object} event
         */
        this.emit("onSwitchNativeInput", { event });
    }

    handleSwitchNativeReset(event) {
        this.value = this.defaultValue;
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;
        /**
         * @event onSwitchNativeReset
         * @property {Object} event
         */
        this.emit("onSwitchNativeReset", { event });
    }
}

customElements.define("md-switch", MDSwitchComponent);

export { MDSwitchComponent };
