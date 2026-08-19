import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";

class MdInputSegment extends MdElement {
    static formAssociated = true;

    static properties = {
        value: { type: String },
        size: { type: Number },
        step: { type: Number },
        min: { type: Number },
        max: { type: Number },
        threshold: { type: Number },
        startValue: { type: Number },
        placeholder: { type: String },
        maxLength: { type: Number },
        clampOnInput: { type: Boolean },
        tabIndex: { type: Number },
    };

    constructor() {
        super();
        this.internals = this.attachInternals();

        this.buffer = "";
        this.defaultValue = "";

        this.value = "";
        this.step = 1;
        this.min = null;
        this.max = null;
        this.threshold = null;
        this.startValue = null;
        this.placeholder = "";
        this.clampOnInput = true;
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                ${ref(this.getRef('native'))}
                type="text"
                .value="${ifDefined(this.value||this.placeholder)}"
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

        this.classList.add("md-input-segment");

        this.autoCorrect();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-input-segment");
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

    formResetCallback(event) {
        const native = this.getRef("native").value;

        this.value = this.defaultValue;
        native.value = this.defaultValue || this.placeholder;
    }

    _clampNumber(result) {
        return Math.min(this.max, Math.max(this.min, result));
    }

    _formatNumber(result) {
        return String(result).padStart(this.maxLength, "0");
    }

    _moveNumber(n) {
        const native = this.getRef("native").value;
        let value = Number(this.value);

        if (!this.value || isNaN(value)) {
            value = this.startValue ?? (n > 0 ? this.min : this.max);
        } else {
            value = value + this.step * n;

            const range = this.max - this.min + 1;
            value = ((((value - this.min) % range) + range) % range) + this.min;
        }
        value = this._formatNumber(value);

        native.setRangeText(value, 0, native.value.length, "select");
        this.value = value;

        this.emit("onInputSegmentInput", { element: this });
    }

    autoCorrect() {
        let value = Number(this.value);

        if (!this.value || isNaN(value)) {
            this.value = "";
            return;
        }

        value = Math.round(value / this.step) * this.step;
        value = this._clampNumber(value);
        value = this._formatNumber(value);

        this.value = value;

        this.emit("onInputSegmentChange", { element: this });
    }

    stepUp() {
        this._moveNumber(1);
    }

    stepDown() {
        this._moveNumber(-1);
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

    _handleFocus(event) {
        this.buffer = "";

        const native = this.getRef("native").value;
        native.select();

        this.emit("onInputSegmentFocus", { event, element: this });
    }

    _handleBlur(event) {
        this.autoCorrect();

        this.emit("onInputSegmentBlur", { event, element: this });
    }

    _handleInput(event) {
        const native = this.getRef("native").value;
        const data = (event.data || "").replace(/\D/, "");

        if (!data || data.length !== 1) {
            this.buffer = "";
            this.value = "";
            native.setRangeText(this.placeholder, 0, native.value.length, "select");
            return;
        }

        if (this.threshold && this.buffer.length === 0 && Number(data) > this.threshold) {
            this.buffer += "0";
        }
        this.buffer += data;

        let value = Number(this.buffer);
        if (this.clampOnInput) {
            value = this._clampNumber(value);
        }
        value = this._formatNumber(value);

        input.setRangeText(value, 0, input.value.length, "select");

        if (this.buffer.length === this.maxLength) {
            this.buffer = "";
            this.value = value;

            this.emit("onInputSegmentInput", { event, element: this });
        }
    }

    _handleChange(event) {
        this.emit("onInputSegmentChange", { event, element: this });
    }
}

customElements.define("md-input-segment", MdInputSegment);

export { MdInputSegment };
