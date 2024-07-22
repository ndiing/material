import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-checkbox
 * @fires MDCheckboxComponent#onCheckboxNativeInput - {{desc}}
 * @fires MDCheckboxComponent#onCheckboxNativeReset - {{desc}}
 */
class MDCheckboxComponent extends MDComponent {
    
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
            button: ".md-checkbox__native",
            container: ".md-checkbox__track",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }
    checkboxNative = createRef();
    
    /**
     * {{desc}}
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
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
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
    handleCheckboxNativeInput(event) {
        this.value = this.checkboxNative.value.value;
        this.checked = this.checkboxNative.value.checked;
        this.indeterminate = this.checkboxNative.value.indeterminate;
        this.emit("onCheckboxNativeInput", event);
    }
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
