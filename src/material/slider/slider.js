import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { calcDecimal, calcPercentage, isArrayString } from "../functions/functions.js";

/**
 * {{description}}
 * @element md-slider
 * @extends MDComponent
 * @fires MDSliderComponent#onSliderNativeInput - {{description}}
 * @fires MDSliderComponent#onSliderNativeReset - {{description}}
 */
class MDSliderComponent extends MDComponent {
    /**
     * {{description}}
     * @property {Array} defaultValue - {{description}}
     * @property {Number} min - {{description}}
     * @property {Number} max - {{description}}
     * @property {Number} step - {{description}}
     * @property {Boolean} disabled - {{description}}
     * @property {String} form - {{description}}
     * @property {String} name - {{description}}
     * @property {String} list - {{description}}
     * @property {String} autocomplete - {{description}}
     */
    static properties = {
        value: {
            type: Array,
            converter: {
                fromAttribute: (value) => {
                    if (!isArrayString(value)) {
                        value = `[${value}]`;
                    }
                    return JSON.parse(value);
                },
                toAttribute: (value) => {
                    return JSON.stringify(value);
                },
            },
        },
        defaultValue: { type: Array },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        disabled: { type: Boolean },
        form: { type: String },
        name: { type: String },
        list: { type: String },
        autocomplete: { type: String },
    };

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = [undefined];
    }

    /**
     * @private
     */
    renderTrack(value) {
        let length = 2;
        if (this.step > 1) {
            length = this.max / this.step;
        }
        length = length + 1;
        /* prettier-ignore */
        return html`
            <div class="md-slider__track">
                ${Array.from({length},(v,k) => html`
                    <div class="md-slider__indicator" value="${this.step*k}" ?activated="${(this.step*k)<=value}"></div>
                `)}
            </div>
        `;
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <label class="md-slider__inner">
                <div class="md-slider__label">${this.type}</div>
                ${this.value.map((value,index) => html`
                    <div class="md-slider__container md-slider__container${index+1}">
                        <input 
                            type="range" 
                            class="md-slider__native"
                            .value="${ifDefined(this.value?.[index])}"
                            .defaultValue="${ifDefined(this.defaultValue?.[index])}"
                            .min="${ifDefined(this.min)}"
                            .max="${ifDefined(this.max)}"
                            .step="${ifDefined(this.step)}"
                            .disabled="${ifDefined(this.disabled)}"
                            .form="${ifDefined(this.form)}"
                            .list="${ifDefined(this.list)}"
                            .autocomplete="${ifDefined(this.autocomplete)}"
                            @input="${this.handleSliderNativeInput}"
                            @reset="${this.handleSliderNativeReset}"
                        >
                        <div class="md-slider__value">${value}</div>
                        ${this.renderTrack(value,index)}
                    </div>
                `)}
                <input 
                    type="hidden" 
                    class="md-slider__hidden"
                    .name="${ifDefined(this.name)}"
                    .value="${ifDefined(this.value)}"
                >
            </label>
        `;
    }

    /**
     * @private
     */
    async connectedCallback() {
        await super.connectedCallback();

        const defaultValue = this.max < this.min ? this.min : this.min + (this.max - this.min) / 2;

        for (let index = 0; index < this.value.length; index++) {
            this.value[index] = this.value[index] ?? defaultValue;
        }

        this.defaultValue = this.value.slice();

        this.classList.add("md-slider");

        await this.updateComplete;

        for (let index = 0; index < this.natives.length; index++) {
            let native = this.natives[index];
            native.value = this.value[index];
            this.updateStyle(index);
        }
    }

    /**
     * {{description}}
     * @private
     */
    updateStyle(index) {
        const percentage = calcPercentage(this.min, this.max, this.value[index]);
        const decimal = calcDecimal(this.min, this.max, this.value[index]);

        this.style.setProperty("--md-comp-slider-percentage" + (index + 1), percentage + "%");
        this.style.setProperty("--md-comp-slider-decimal" + (index + 1), decimal);
    }

    /**
     * @private
     */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("min")) {
            if (this.min < 0) {
                this.classList.add("md-slider--centered");
            }
        }
        if (changedProperties.has("step")) {
            if (this.step > 1) {
                this.classList.add("md-slider--discrete");
            }
        }
        if (changedProperties.has("value")) {
            if (this.value?.length > 1) {
                this.classList.add("md-slider--range");
            }
        }
    }

    /**
     * {{description}}
     */
    get natives() {
        return this.querySelectorAll(".md-slider__native");
    }

    /**
     * @private
     */
    handleSliderNativeInput(event) {
        if (this.value?.length > 1) {
            this.natives[0].value = Math.min(this.natives[0].value, this.value[1]);
            this.natives[1].value = Math.max(this.natives[1].value, this.value[0]);

            this.value[0] = this.natives[0].value;
            this.value[1] = this.natives[1].value;

            this.updateStyle(0);
            this.updateStyle(1);
        } else {
            this.value[0] = this.natives[0].value;
            this.updateStyle(0);
        }

        this.requestUpdate();
        this.emit("onSliderNativeInput", event);
    }

    /**
     * @private
     */
    handleSliderNativeReset(event) {
        for (let index = 0; index < this.natives.length; index++) {
            let native = this.natives[index];
            native.value = this.defaultValue[index];
            this.value[index] = this.defaultValue[index];
            this.updateStyle(index);
        }

        this.requestUpdate();
        this.emit("onSliderNativeReset", event);
    }
}

customElements.define("md-slider", MDSliderComponent);

export { MDSliderComponent };
