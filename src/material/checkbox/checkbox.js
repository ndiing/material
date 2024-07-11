import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{description}}
 * @element md-checkbox
 * @extends MDComponent
 * @fires MDCheckboxComponent#onCheckboxNativeInput - {{description}}
 * @fires MDCheckboxComponent#onCheckboxNativeReset - {{description}}
 */
class MDCheckboxComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} name - {{description}}
     * @property {String} value - {{description}}
     * @property {Boolean} indeterminate - {{description}}
     * @property {Boolean} checked - {{description}}
     * @property {Boolean} disabled - {{description}}
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
    };

    /**
     * {{description}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            buttonSelector: ".md-checkbox__native",
            containerSelector: ".md-checkbox__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }
    checkboxNative = createRef();

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-checkbox__native"
                aria-label="label"
                type="checkbox" 
                .name="${ifDefined(this.name)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ${ref(this.checkboxNative)}
                @input="${this.handleCheckboxNativeInput}"
                @reset="${this.handleCheckboxNativeReset}"
            >
            <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        if (this.defaultValue === undefined) {
            this.defaultValue = this.value || "on";
        }
        if (this.defaultChecked === undefined) {
            this.defaultChecked = !!this.checked;
        }
        if (this.defaultIndeterminate === undefined) {
            this.defaultIndeterminate = !!this.indeterminate;
        }
        this.classList.add("md-checkbox");
    }

    /**
     * @private
     */
    handleCheckboxNativeInput(event) {
        this.value = this.checkboxNative.value.value;
        this.checked = this.checkboxNative.value.checked;
        this.indeterminate = this.checkboxNative.value.indeterminate;
        this.emit("onCheckboxNativeInput", event);
    }

    /**
     * @private
     */
    handleCheckboxNativeReset(event) {
        this.checkboxNative.value.value = this.defaultValue;
        this.checkboxNative.value.checked = this.defaultChecked;
        this.checkboxNative.value.indeterminate = this.defaultIndeterminate;
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onCheckboxNativeReset", event);
    }
}
customElements.define("md-checkbox", MDCheckboxComponent);
export { MDCheckboxComponent };
