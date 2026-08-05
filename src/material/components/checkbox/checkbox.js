import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";

class MdCheckbox extends MdElement {
    static formAssociated = true;
    static properties = {
        ariaLabel: { type: String, attribute: "aria-label" },
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
        disabled: { type: Boolean },
        required: { type: Boolean },
        rippleOptions: { type: Object },
        validateOnInput: { type: Boolean },
        validationMessage: { type: String, state: true },
        tabIndex: { type: Number },
    };
    checkboxNative = createRef();

    constructor() {
        super();
        this.internals = this.attachInternals();
        this.rippleOptions = {
            centered: true,
            radius: 40,
            unbounded: true,
            trigger: ".md-checkbox__native",
        };
        this.validateOnInput = true;
        this.rippleController = new RippleController(this, this.rippleOptions);
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                aria-label="${ifDefined(this.ariaLabel || this.name || 'checkbox')}"
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

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
        if (this.indeterminate !== undefined) {
            this.defaultIndeterminate = this.indeterminate;
        }
        if (this.checked !== undefined) {
            this.defaultChecked = this.checked;
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-checkbox");
    }

    async update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("disabled")) {
            this.classList.toggle("md-checkbox--disabled", this.disabled);
        }
        if (changedProperties.has("rippleOptions")) {
            await this.updateComplete;
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    formResetCallback(event) {
        const checkboxNative = this.checkboxNative.value;
        if (this.defaultIndeterminate !== undefined) {
            checkboxNative.indeterminate = this.defaultIndeterminate;
            this.indeterminate = checkboxNative.indeterminate;
        }
        if (this.defaultChecked !== undefined) {
            checkboxNative.checked = this.defaultChecked;
            this.checked = checkboxNative.checked;
        }
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
