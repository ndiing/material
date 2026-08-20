import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";


/**
 * @class MdCheckbox
 * @extends MdElement
 * 
 * @fires MdCheckbox#invalid
 * @fires MdCheckbox#input
 */
class MdCheckbox extends MdElement {
    static formAssociated = true;

    
    /**
     */
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
                ${ref(this.getRef('native'))}
                class="md-checkbox__native"
                type="checkbox"
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                ?disabled="${ifDefined(this.disabled)}"
                ?required="${ifDefined(this.required)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @invalid="${this._handleInvalid}"
                @input="${this._handleInput}"
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

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.defaultIndeterminate = this.defaultIndeterminate ?? this.indeterminate ?? false;
        this.defaultChecked = this.defaultChecked ?? this.checked ?? false;
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("disabled")) {
            this.classList.toggle("md-checkbox--disabled", Boolean(this.disabled));
        }

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    
    /**
     * 
     */
    formResetCallback(event) {
        this.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;

        const native = this.getRef("native").value;
        native.indeterminate = this.defaultIndeterminate;
        native.checked = this.defaultChecked;

        this.validationMessage = "";
        this._updateValidationClass();
    }

    _handleInvalid(event) {
        event.stopPropagation();
        event.preventDefault();
        this.validate();
        this.emit("invalid", { event, element: this });
    }

    _handleInput(event) {
        event.stopPropagation();
        const native = this.getRef("native").value;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;

        if (this.validateOnInput) {
            this.validate();
        }

        this.emit("input", { event, element: this });
    }

    _updateValidationClass() {
        this.classList.toggle("md-checkbox--error", Boolean(this.validationMessage));
    }

    
    /**
     * 
     */
    validate() {
        const native = this.getRef("native").value;
        this.validationMessage = native.validationMessage;
        this._updateValidationClass();
    }
}

customElements.define("md-checkbox", MdCheckbox);

export { MdCheckbox };
