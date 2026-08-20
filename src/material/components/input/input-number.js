import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";

/**
 * @class MdInputNumber
 * @extends MdElement
 *
 * @fires MdInputNumber#input
 * @fires MdInputNumber#change
 * @fires MdInputNumber#keydown
 * @fires MdInputNumber#focus
 * @fires MdInputNumber#blur
 * @fires MdInputNumber#input
 * @fires MdInputNumber#change
 */
class MdInputNumber extends MdElement {
    static formAssociated = true;

    /**
     */
    static properties = {
        value: { type: String },
        size: { type: Number },
        step: { type: Number },
        min: { type: Number },
        max: { type: Number },
        tabIndex: { type: Number },
    };

    allowRegex = /^[-+]?(\d+(\.\d*)?|\.\d*)?([eE][-+]?\d*)?$/;
    validRegex = /^[-+]?(\d+(\.\d+)?|\.\d+)([eE][-+]?\d+)?$/;

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.defaultValue = "";

        this.value = "";
        this.step = 1;
        this.min = null;
        this.max = null;
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                ${ref(this.getRef('native'))}
                type="text"
                .value="${ifDefined(this.value)}"
                .size="${ifDefined(this.size)}"
                .tabIndex="${ifDefined(this.tabIndex)}"
                @keydown="${this._handleKeydown}"
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @input="${this._handleInput}"
                @change="${this._handleChange}"
            >
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-input-number");

        this.autoCorrect();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-input-number");
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("step") && (this.step <= 0 || isNaN(this.step))) {
            this.step = 1;
        }

        if (_changedProperties.has("min") || _changedProperties.has("max")) {
            if (typeof this.min === "number" && typeof this.max === "number") {
                this.size = Math.max(String(this.min).length, String(this.max).length);
            }
        }
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        if (this.value !== null) {
            this.defaultValue = this.value;
        }
    }

    /**
     *
     */
    formResetCallback(event) {
        const native = this.getRef("native").value;

        this.value = this.defaultValue;
        native.value = this.defaultValue;
    }

    _formatNumber(value) {
        const stepString = String(this.step);
        const fractionDigits = stepString.includes(".") ? stepString.split(".")[1].length : 0;
        return Number(value.toFixed(fractionDigits));
    }

    _moveNumber(direction) {
        let value = Number(this.value);
        value = isNaN(value) || !isFinite(value) ? 0 : value;

        const base = this.min ?? value;
        const diff = value - base;
        const n = Math.floor(diff / this.step) + direction;

        value = base + this.step * n;

        if ((this.max !== null && value > this.max) || (this.min !== null && value < this.min)) {
            return;
        }

        value = this._formatNumber(value);

        this.value = value;

        this.emit("input", { element: this });
    }

    /**
     *
     */
    autoCorrect() {
        let value = Number(this.value);

        if (!this.validRegex.test(this.value) || isNaN(value) || !isFinite(value)) {
            this.value = "";
            return;
        }

        const base = this.min ?? value;
        const diff = value - base;
        const n = Math.round(diff / this.step);

        value = base + this.step * n;

        if (this.max !== null && value > this.max) {
            value = this.max;
        }
        if (this.min !== null && value < this.min) {
            value = this.min;
        }

        value = this._formatNumber(value);

        this.value = value;

        this.emit("change", { element: this });
    }

    /**
     *
     */
    stepUp() {
        this._moveNumber(1);
    }

    /**
     *
     */
    stepDown() {
        this._moveNumber(-1);
    }

    _handleKeydown(event) {
        event.stopPropagation();

        if (event.key === "ArrowUp") {
            event.preventDefault();
            this.stepUp();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            this.stepDown();
        }

        this.emit("keydown", { event, element: this });
    }

    _handleFocus(event) {
        event.stopPropagation();

        this.emit("focus", { event, element: this });
    }

    _handleBlur(event) {
        event.stopPropagation();

        this.autoCorrect();

        this.emit("blur", { event, element: this });
    }

    _handleInput(event) {
        event.stopPropagation();

        const native = this.getRef("native").value;
        if (!this.allowRegex.test(native.value)) {
            native.value = this.value;
            return;
        }

        this.value = native.value;

        this.emit("input", { event, element: this });
    }

    _handleChange(event) {
        event.stopPropagation();

        this.emit("change", { event, element: this });
    }
}

customElements.define("md-input-number", MdInputNumber);

export { MdInputNumber };
