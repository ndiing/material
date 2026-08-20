import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";
const converter = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};


/**
 * @class MdSwitch
 * @extends MdElement
 * 
 * @fires MdSwitch#input
 */
class MdSwitch extends MdElement {
    static formAssociated = true;

    
    /**
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean },
        disabled: { type: Boolean },
        required: { type: Boolean },
        rippleOptions: { type: Object },
        icon: { type: String, converter },
        tabIndex: { type: Number },
    };

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.rippleController = new RippleController(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-switch__native",
            container: ".md-switch__thumb",
        });
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
                aria-label="switch"
                ${ref(this.getRef('native'))}
                class="md-switch__native"
                type="checkbox"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @input="${this._handleInput}"
            >
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this.icon?this.renderIcon():nothing}</div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-switch");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-switch");
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("disabled")) {
            this.classList.toggle("md-switch--disabled", this.disabled);
        }

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    
    /**
     * 
     */
    formResetCallback(event) {
        this.checked = this.defaultChecked;
        const native = this.getRef("native").value;
        native.checked = this.defaultChecked;
    }

    _handleInput(event) {
        event.stopPropagation();
        const native = this.getRef("native").value;
        this.checked = native.checked;
        this.emit("input", { event, element: this });
    }
}

customElements.define("md-switch", MdSwitch);

export { MdSwitch };
