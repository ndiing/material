import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

/**
 * @extends MdComponent
 * @fires MdCheckboxComponent#onCheckboxNativeInput - {"detail":{"event":{}}}
 * @fires MdCheckboxComponent#onCheckboxNativeReset - {"detail":{"event":{}}}
 */
class MdCheckboxComponent extends MdComponent {
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
        this.ripple = new RippleController(this, {
            container: ".md-checkbox__track",
            trigger: ".md-checkbox__native",
            unbounded: true,
            radius: 40,
        });
    }

    /**
     * @private
     */
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
                class="md-checkbox__native"
                @input="${this.handleCheckboxNativeInput}"
                @reset="${this.handleCheckboxNativeReset}"
            />
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
        this.defaultValue = this.value;
        this.defaultIndeterminate = this.indeterminate;
        this.defaultChecked = this.checked;
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleCheckboxNativeInput(event) {
        const native = event.currentTarget;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;
        this.emit("onCheckboxNativeInput", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleCheckboxNativeReset(event) {
        this.value = this.defaultValue;
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;
        this.emit("onCheckboxNativeReset", { event });
    }
}
customElements.define("md-checkbox", MdCheckboxComponent);
export { MdCheckboxComponent };
