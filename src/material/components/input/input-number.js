import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

class MdInputNumber extends MdElement {
    static formAssociated = true;

    static properties = {
        value: { type: String },
        step: { type: Number },
        min: { type: Number },
        max: { type: Number },
        tabIndex: { type: Number },
    };

    allowRegex = /^[-+]?(\d+(\.\d*)?|\.\d*)?([eE][-+]?\d*)?$/;
    validRegex = /^[-+]?(\d+(\.\d+)?|\.\d+)([eE][-+]?\d+)?$/;

    native = createRef();

    constructor() {
        super();

        this.internals = this.attachInternals();

        this.defaultValue = "";
        this.step = 1;
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                ${ref(this.native)}
                type="text"
                .tabIndex="${ifDefined(this.tabIndex)}"
                .value="${ifDefined(this.value)}"
                @keydown="${this._handleKeydown}"
                @input="${this._handleInput}"
                @change="${this._handleChange}"
            >
        `
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        if (this.value !== undefined && this.value !== null) {
            this.defaultValue = this.value;
        }
    }

    formResetCallback() {
        const input = this.native.value;

        input.value = this.defaultValue;
        this.value = this.defaultValue;
    }

    _clampNumber(number) {
        if (this.min !== undefined && this.min !== null) {
            number = Math.max(this.min, number);
        }
        if (this.max !== undefined && this.max !== null) {
            number = Math.min(this.max, number);
        }
        return number;
    }

    _fixedNumber(number) {
        const stepString = String(this.step);
        const fractionDigits = stepString.includes(".") ? stepString.split(".")[1].length : 0;
        return Number(number.toFixed(fractionDigits));
    }

    _moveNumber(n) {
        const input = this.native.value;
        const value = input.value;
        const number = Number(value);

        let result = number + this.step * n;
        result = this._clampNumber(result);
        result = this._fixedNumber(result);

        this.value = result;
        this.emit("onInputNumberInput", { event, element: this });
    }

    stepUp() {
        const n = +1;
        this._moveNumber(n);
        this.emit("onInputNumberStepUp", { element: this });
    }

    stepDown() {
        const n = -1;
        this._moveNumber(n);
        this.emit("onInputNumberStepDown", { element: this });
    }

    _handleKeydown(event) {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            this.stepUp();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            this.stepDown();
        }
        this.emit("onInputNumberKeydown", { event, element: this });
    }

    _handleInput(event) {
        const input = this.native.value;
        const value = input.value;

        if (this.allowRegex.test(value)) {
            this.value = value;
        }

        input.value = this.value;

        this.emit("onInputNumberInput", { event, element: this });
    }

    _handleChange(event) {
        const input = this.native.value;
        const value = input.value;
        const number = Number(value);

        let result = "";
        if (this.validRegex.test(value)) {
            result = Math.round(number / this.step) * this.step;
            result = this._clampNumber(result);
            result = this._fixedNumber(result);
        }

        this.value = result;
        input.value = result;

        this.emit("onInputNumberChange", { event, element: this });
    }
}

customElements.define("md-input-number", MdInputNumber);

export { MdInputNumber };
