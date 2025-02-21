import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";
/**
 * @extends MdComponent
 * @element md-slider
 */
class MDSliderComponent extends MdComponent {
    /**
     * @property {Number} [min]
     * @property {Number} [max]
     * @property {Number} [step]
     * @property {centered|continuous|discrete|range-selection} [variant]
     * @property {String} [name]
     * @property {Any} [value]
     */
    static properties = {
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        variant: { type: String },
        name: { type: String },
        value: {
            converter: {
                fromAttribute: (value, type) => {
                    return [].concat(JSON.parse(value));
                },
                toAttribute: (value, type) => {
                    return JSON.stringify(value);
                },
            },
        },
    };

    variants = ["centered", "continuous", "discrete", "range-selection"];

    get indicators() {
        const lengths = {
            centered: 3,
            continuous: 1,
            discrete: this.max / this.step + 1,
            "range-selection": 2,
        };
        return lengths[this.variant];
    }
    get sliderNativeAll() {
        return this.querySelectorAll(".md-slider__native");
    }
    get sliderValueAll() {
        return this.querySelectorAll(".md-slider__value");
    }
    constructor() {
        super();

        this.min = 0;
        this.max = 100;
        this.step = 1;
    }

    renderSliderWrapper(value, index) {
        /* prettier-ignore */
        return html`
            <div class="md-slider__wrapper">
                <input
                    type="range"
                    class="md-slider__native"
                    .data="${{ index }}"
                    .min="${ifDefined(this.min)}"
                    .max="${ifDefined(this.max)}"
                    .step="${ifDefined(this.step)}"
                    .value="${ifDefined(value)}"
                    .defaultValue="${ifDefined(this.defaultValue[index])}"
                    @input="${this.handleSliderNativeInput}"
                    @reset="${this.handleSliderNativeReset}"
                />
                <div class="md-slider__indicators">
                    ${Array.from(
                        { length: this.indicators },
                        (v, k) => html`
                            <div
                                class="${classMap({
                                    "md-slider__indicator": true,
                                    "md-slider__indicator--activated": value >= this.step * k,
                                })}"
                            ></div>
                        `,
                    )}
                </div>
                <output class="md-slider__value">${value}</output>
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.value.map((value, index) => this.renderSliderWrapper(value, index))}
            <input
                type="hidden"
                class="md-slider__hidden"
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
            />
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-slider");
        this.value = this.value || [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2];
        this.defaultValue = JSON.parse(JSON.stringify(this.value));

        if (this.min < 0) {
            this.variant = "centered";
        } else if (this.step > 1) {
            this.variant = "discrete";
        } else if (this.value.length > 1) {
            this.variant = "range-selection";
        } else {
            this.variant = "continuous";
        }

        await this.updateComplete;

        this.updateValue();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-slider--${variant}`, variant === this.variant);
            });
        }
    }

    updateValue() {
        this.value.forEach((value, index) => {
            this.style.setProperty(`--md-comp-slider-value${index}`, this.percentage(value));
            this.style.setProperty(`--md-comp-slider-value-width${index}`, this.sliderValueAll[index].clientWidth + "px");
        });
    }

    percentage(value, min = this.min, max = this.max) {
        return (value - min) / (max - min);
    }

    handleSliderNativeInput(event) {
        const native = event.currentTarget;
        const data = native.data;

        if (this.value.length > 1) {
            this.sliderNativeAll[0].value = Math.min(this.sliderNativeAll[0].value, this.value[1]);
            this.sliderNativeAll[1].value = Math.max(this.sliderNativeAll[1].value, this.value[0]);
        }
        this.value[data.index] = Number(native.value);
        native.value = this.value[data.index];
        this.updateValue();
        this.requestUpdate();
        /**
         * @event onSliderNativeInput
         * @property {Object} event
         */
        this.emit("onSliderNativeInput", { event });
    }

    handleSliderNativeReset(event) {
        this.value = JSON.parse(JSON.stringify(this.defaultValue));
        this.updateValue();
        this.requestUpdate();
        /**
         * @event onSliderNativeReset
         * @property {Object} event
         */
        this.emit("onSliderNativeReset", { event });
    }
}

customElements.define("md-slider", MDSliderComponent);

export { MDSliderComponent };
