import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";

class MdCheckbox extends MdElement {
    static formAssociated = true;
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean, reflect: true },
        checked: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        required: { type: Boolean, reflect: true },
        rippleOptions: { type: Object },
        validateOnInput: { type: Boolean },
        validationMessage: { type: String, state: true },
        tabIndex: { type: Number },
    };

    checkboxNative = createRef();

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.validateOnInput = true;

        this.rippleController = new RippleController(this, {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-checkbox__native",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="checkbox"
                ${ref(this.checkboxNative)}
                class="md-checkbox__native"
                type="checkbox"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @invalid="${this._handleCheckboxNativeInvalid}"
                @input="${this._handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__container">
                <div class="md-checkbox__icon"></div>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-checkbox");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-checkbox");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-checkbox--disabled", !!this.disabled);
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultIndeterminate = this.defaultIndeterminate ?? this.indeterminate ?? false;
        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    formResetCallback(event) {
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;

        const checkboxNative = this.checkboxNative.value;
        checkboxNative.indeterminate = this.defaultIndeterminate;
        checkboxNative.checked = this.defaultChecked;

        this.validationMessage = "";
        this._updateValidationClass();
    }

    _handleCheckboxNativeInvalid(event) {
        event.preventDefault();
        this.validate();
        this.emit("onCheckboxNativeInvalid", { event, element: this });
    }

    _handleCheckboxNativeInput(event) {
        const checkboxNative = this.checkboxNative.value;
        this.indeterminate = checkboxNative.indeterminate;
        this.checked = checkboxNative.checked;

        if (this.validateOnInput) {
            this.validate();
        }

        this.emit("onCheckboxNativeInput", { event, element: this });
    }

    _updateValidationClass() {
        this.classList.toggle("md-checkbox--error", !!this.validationMessage);
    }

    validate() {
        const checkboxNative = this.checkboxNative.value;
        this.validationMessage = checkboxNative.validationMessage;
        this._updateValidationClass();
    }
}

customElements.define("md-checkbox", MdCheckbox);

export { MdCheckbox };
