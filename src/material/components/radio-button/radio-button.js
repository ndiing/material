import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";

class MdRadioButton extends MdElement {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        value: { type: String },
        checked: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        required: { type: Boolean, reflect: true },
        rippleOptions: { type: Object },
        tabIndex: { type: Number },
    };

    radioButtonNative = createRef();

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.rippleOptions = {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-radio-button__native",
        };

        this.rippleController = new RippleController(this, this.rippleOptions);
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="radio-button"
                ${ref(this.radioButtonNative)}
                class="md-radio-button__native"
                type="radio"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @input="${this._handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__container">
                <div class="md-radio-button__icon"></div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-radio-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-radio-button");
    }

    async update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-radio-button--disabled", this.disabled);
        }
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    async updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    formResetCallback(event) {
        this.checked = this.defaultChecked;

        const radioButtonNative = this.radioButtonNative.value;
        radioButtonNative.checked = this.defaultChecked;
    }

    _handleRadioButtonNativeInput(event) {
        const radioButtonNative = this.radioButtonNative.value;

        this.checked = radioButtonNative.checked;

        this.emit("onRadioButtonNativeInput", { event, element: this });
    }
}

customElements.define("md-radio-button", MdRadioButton);

export { MdRadioButton };
