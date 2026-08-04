import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";
const converter = (value) => {
    if (!value) return [];
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

class MdSwitch extends MdElement {
    static formAssociated = true;
    static properties = {
        ariaLabel: { type: String, attribute: "aria-label" },
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
        disabled: { type: Boolean },
        required: { type: Boolean },
        rippleOptions: { type: Object },
        icon: { type: String, converter },
        tabIndex: { type: Number },
    };
    switchNative = createRef();
    constructor() {
        super();
        this.internals = this.attachInternals();
        this.rippleOptions = {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-switch__native",
            container: ".md-switch__thumb",
        };
        this.rippleController = new RippleController(this, this.rippleOptions);
    }
    /* prettier-ignore */
    renderIcon(){
        const icons=Array.isArray(this.icon)?this.icon:[this.icon]
        const index=this.checked?1:0
        const icon=icons[index]
        return icon?html`<md-icon class="md-switch__icon" .icon="${icon}"></md-icon>`:nothing
    }
    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="${ifDefined(this.ariaLabel || this.name || 'switch')}"
                ${ref(this.switchNative)}
                class="md-switch__native"
                type="checkbox"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @input="${this._handleSwitchNativeInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this.icon?this.renderIcon():nothing}</div>
            </div>
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-switch");
        if (this.checked !== undefined) {
            this.defaultChecked = this.checked;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-switch");
    }
    async update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-switch--disabled", this.disabled);
        }
        if (changedProperties.has("rippleOptions")) {
            await this.updateComplete;
            this.rippleController.reinit(this.rippleOptions);
        }
    }
    formResetCallback(event) {
        const switchNative = this.switchNative.value;
        this.checked = this.defaultChecked;
        switchNative.checked = this.checked;
    }
    _handleSwitchNativeInput(event) {
        const switchNative = this.switchNative.value;
        this.checked = switchNative.checked;
        this.emit("onSwitchNativeInput", { event, element: this });
    }
}

customElements.define("md-switch", MdSwitch);

export { MdSwitch };
