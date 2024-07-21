import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-switch
 * @fires MDSwitchComponent#onSwitchNativeInput - {{desc}}
 * @fires MDSwitchComponent#onSwitchNativeReset - {{desc}}
 */
class MDSwitchComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} name - {{desc}}
     * @property {String} value - {{desc}}
     * @property {Boolean} indeterminate - {{desc}}
     * @property {Boolean} checked - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     * @property {Array} icons - {{desc}}
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
        icons: { type: Array },
    };
    switchNative = createRef();

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            button: ".md-switch__native",
            container: ".md-switch__thumb",
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            <input 
                class="md-switch__native"
                aria-label="label"
                type="checkbox" 
                .name="${ifDefined(this.name)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ${ref(this.switchNative)}
                @input="${this.handleSwitchNativeInput}"
                @reset="${this.handleSwitchNativeReset}"
            >
            <div class="md-switch__track"><md-icon class="md-switch__thumb" .icon="${this.icons?.length ? this.icons[~~this.checked] : nothing}"></md-icon></div>
        `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-switch");
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
     */
    handleSwitchNativeInput(event) {
        this.value = this.switchNative.value.value;
        this.checked = this.switchNative.value.checked;
        this.indeterminate = this.switchNative.value.indeterminate;
        this.emit("onSwitchNativeInput", event);
    }

    /**
     * {{desc}}
     */
    handleSwitchNativeReset(event) {
        this.switchNative.value.value = this.defaultValue;
        this.switchNative.value.checked = this.defaultChecked;
        this.switchNative.value.indeterminate = this.defaultIndeterminate;
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onSwitchNativeReset", event);
    }
}
customElements.define("md-switch", MDSwitchComponent);
export { MDSwitchComponent };
