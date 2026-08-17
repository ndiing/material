import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

class MdInputSegment extends MdElement {
    static formAssociated = true;

    static properties = {
        value: { type: String },
        step: { type: Number },
        min: { type: Number },
        max: { type: Number },
        maxLength: { type: Number },
        size: { type: Number },
        threshold: { type: Number },
        placeholder: { type: String },
        startValue: { type: String },
        tabIndex: { type: String },
    };

    native = createRef();

    constructor() {
        super();

        this.internals = this.attachInternals();

        this.defaultValue = "";
        this.buffer = "";
        this.step = 1;
        this.placeholder = "";
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                ${ref(this.native)}
                type="text"
                .tabIndex="${ifDefined(this.tabIndex)}"
                .value="${ifDefined(this.value||this.placeholder)}"
                size="${ifDefined(this.size||this.maxLength)}"
                @keydown="${this._handleKeydown}"
                @click="${this._handleClick}"
                @focus="${this._handleFocus}"
                @input="${this._handleInput}"
                @blur="${this._handleBlur}"
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

        input.value = this.defaultValue || this.placeholder;
        this.value = this.defaultValue;
    }

    _clampNumber(number) {
        return Math.min(number, this.max);
    }

    _formatNumber(number) {
        return String(number).padStart(this.maxLength, "0");
    }

    _moveNumber(n) {
        const input = this.native.value;
        const value = input.value;
        const number = Number(value);

        let result;
        if (!value || isNaN(number)) {
            result = this.startValue ?? (n > 0 ? this.min : this.max);
        } else {
            result = number + this.step * n;

            if (this.min !== undefined && this.min !== null && this.max !== undefined && this.max !== null) {
                const range = this.max - this.min + 1;
                result = ((((result - this.min) % range) + range) % range) + this.min;
            }
        }
        result = this._formatNumber(result);

        input.setRangeText(result, 0, this.maxLength, "select");
        this.value = result;
        this.emit("onInputSegmentInput", { event, element: this });
    }

    stepUp() {
        const n = +1;
        this._moveNumber(n);
        this.emit("onInputSegmentStepUp", { element: this });
    }

    stepDown() {
        const n = -1;
        this._moveNumber(n);
        this.emit("onInputSegmentStepDown", { element: this });
    }

    _handleKeydown(event) {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            this.stepUp();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            this.stepDown();
        }
        this.emit("onInputSegmentKeydown", { event, element: this });
    }

    _handleClick(event) {
        this.buffer = "";
        const input = this.native.value;
        input.select();
        this.emit("onInputSegmentClick", { event, element: this });
    }

    _handleFocus(event) {
        this.buffer = "";
        const input = this.native.value;
        input.select();
        this.emit("onInputSegmentFocus", { event, element: this });
    }

    _handleInput(event) {
        const input = this.native.value;

        const data = (event.data || "").replace(/\D/gm, "");
        if (!data || data.length > 1) {
            this.buffer = "";
            input.setRangeText(this.placeholder, 0, input.value.length, "select");
            this.value = this.placeholder;
            return;
        }

        if (this.threshold && this.buffer.length === 0 && Number(data) > this.threshold) {
            this.buffer += "0";
        }
        this.buffer += data;

        let result = Number(this.buffer);
        result = this._clampNumber(result);
        result = this._formatNumber(result);

        input.setRangeText(result, 0, this.maxLength, "select");
        this.value = result;

        if (this.buffer.length === this.maxLength) {
            this.buffer = "";
            this.emit("onInputSegmentInput", { event, element: this });
        }
    }

    _handleBlur(event) {
        this.autoCorrect();

        this.emit("onInputSegmentBlur", { event, element: this });
    }

    autoCorrect() {
        const input = this.native.value;
        const number = Number(input.value);

        let result = this.placeholder;
        if (!isNaN(number)) {
            result = Math.round(number / this.step) * this.step;
            result = this._clampNumber(result);
            result = this._formatNumber(result);
        }
        

        console.log(number,result,this.max)

        // input.setRangeText(result, 0, this.maxLength, "select");
        input.value = result;
        this.value = result;
    }
}

customElements.define("md-input-segment", MdInputSegment);

export { MdInputSegment };
