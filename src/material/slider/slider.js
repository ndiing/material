import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @extends MdComponent
 * @fires MdSliderComponent#onSliderNativeInput - {"detail":{"event":{}}}
 * @fires MdSliderComponent#onSliderNativeReset - {"detail":{"event":{}}}
 */
class MdSliderComponent extends MdComponent {
    /**
     * @property {Number} [min]
     * @property {Number} [max]
     * @property {Number} [step]
     * @property {String} [variant]
     * @property {String} [name]
     * @property {undefined} [value]
     * @property {undefined} [converter]
     */
    static properties = {
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        variant: { type: String },
        name: { type: String },
        value: {
            // type: String,
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

    /**
     */
    constructor() {
        super();
        this.min = 0;
        this.max = 100;
        this.step = 1;
    }

    /**
     */
    get indicators() {
        if (this.variant === "centered") return 3;
        else if (this.variant === "continuous") return 1;
        else if (this.variant === "discrete") return this.max / this.step + 1;
        else if (this.variant === "range-selection") return 2;
    }

    /**
     * @private
     * @param {String} [value]
     * @param {String} [index]
     */
    renderSliderWrapper(value, index) {
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

    /**
     * @private
     */
    render() {
        return html`
            ${this.value.map((value, index) => this.renderSliderWrapper(value, index))}
            <input
                type="hidden"
                class="md-slider__hidden"
                .name="${this.name}"
                .value="${this.value}"
            />
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
        if (this.value === undefined) {
            this.value = [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2];
        }
        this.defaultValue = JSON.parse(JSON.stringify(this.value));
        if (this.min < 0) this.variant = "centered";
        else if (this.step > 1) this.variant = "discrete";
        else if (this.value.length > 1) this.variant = "range-selection";
        else this.variant = "continuous";
        this.updateValue();
    }

    /**
     * @private
     * @param {String} [changedProperties]
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-slider--${variant}`, variant === this.variant);
            });
        }
    }

    /**
     */
    get sliderNatives() {
        return this.querySelectorAll(".md-slider__native");
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSliderNativeInput(event) {
        const native = event.currentTarget;
        const data = native.data;
        if (this.value.length > 1) {
            this.sliderNatives[0].value = Math.min(this.sliderNatives[0].value, this.value[1]);
            this.sliderNatives[1].value = Math.max(this.sliderNatives[1].value, this.value[0]);
        }
        this.value[data.index] = Number(native.value);
        native.value = this.value[data.index];
        this.updateValue();
        this.requestUpdate();
        this.emit("onSliderNativeInput", { event });
    }

    /**
     * @private
     * @param {Object} [event]
     */
    handleSliderNativeReset(event) {
        this.value = JSON.parse(JSON.stringify(this.defaultValue));
        this.updateValue();
        this.requestUpdate();
        this.emit("onSliderNativeReset", { event });
    }

    /**
     */
    updateValue() {
        this.value.forEach((value, index) => {
            this.style.setProperty(`--md-comp-slider-value${index}`, this.percentage(value));
        });
    }

    /**
     * @param {String} [value]
     * @param {undefined} [min=this.min]
     * @param {undefined} [max=this.max]
     */
    percentage(value, min = this.min, max = this.max) {
        return (value - min) / (max - min);
    }
}
customElements.define("md-slider", MdSliderComponent);
export { MdSliderComponent };
