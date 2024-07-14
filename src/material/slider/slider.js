import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { calcDecimal, calcPercentage, isArrayString } from "../functions/functions.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Slider component that extends the MDComponent base class.
 * @element md-slider
 * @extends MDComponent
 * @fires MDSliderComponent#onSliderNativeInput - Fired when the slider input changes.
 * @fires MDSliderComponent#onSliderNativeReset - Fired when the slider is reset.
 */
class MDSliderComponent extends MDComponent {
    /**
     * Defines the properties of the slider component.
     * @property {String} name - The name attribute of the slider input.
     * @property {Array} value - The value of the slider, can be an array for range sliders.
     * @property {Number} min - The minimum value of the slider.
     * @property {Number} max - The maximum value of the slider.
     * @property {Number} step - The step value of the slider.
     * @property {Boolean} disabled - The disabled state of the slider.
     * @property {String} autocomplete - The autocomplete attribute of the slider.
     */
    static properties = {
        name: { type: String },
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
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        disabled: { type: Boolean },
        autocomplete: { type: String },
    };

    /**
     * Initializes a new instance of the MDSliderComponent.
     * Sets up default properties.
     */
    constructor() {
        super();
        this.autocomplete = "off";
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = [undefined];
    }

    /**
     * Renders the slider track with indicators.
     * @private
     * @param {Number} value - The current value of the slider.
     * @returns {TemplateResult} The HTML template for the track.
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
    sliderNative1 = createRef();
    sliderNative2 = createRef();

    /**
     * Renders the slider component template.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.value.map((value,index) => html`
                <div class="md-slider__container md-slider__container${index+1}">
                    <input 
                        class="md-slider__native"
                        aria-label="label"
                        type="range" 
                        .value="${ifDefined(this.value?.[index])}"
                        .defaultValue="${ifDefined(this.defaultValue?.[index])}"
                        .min="${ifDefined(this.min)}"
                        .max="${ifDefined(this.max)}"
                        .step="${ifDefined(this.step)}"
                        ?disabled="${ifDefined(this.disabled)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        ${ref(this[`sliderNative${index + 1}`])}
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
        `;
    }

    /**
     * Lifecycle method called when the component is added to the DOM.
     * Sets default values and updates styles.
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
        const defaultValue = this.max < this.min ? this.min : this.min + (this.max - this.min) / 2;

        for (let index = 0; index < this.value.length; index++) {
            this.value[index] = this.value[index] ?? defaultValue;
        }
        this.defaultValue = this.value.slice();
        await this.updateComplete;

        for (let index = 0; index < this.natives.length; index++) {
            let native = this.natives[index];
            native.value = this.value[index];
            this.updateStyle(index);
        }
    }

    /**
     * Updates the style of the slider based on its value.
     * @param {Number} index - The index of the slider value to update.
     * @private
     */
    updateStyle(index) {
        const percentage = calcPercentage(this.min, this.max, this.value[index]);
        const decimal = calcDecimal(this.min, this.max, this.value[index]);
        this.style.setProperty("--md-comp-slider-percentage" + (index + 1), percentage + "%");
        this.style.setProperty("--md-comp-slider-decimal" + (index + 1), decimal);
    }

    /**
     * Lifecycle method called when the component is updated.
     * Updates classes based on properties.
     * @param {Map} changedProperties - Map of changed properties.
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
     * Returns a NodeList of slider input elements.
     * @returns {NodeList} The slider input elements.
     * @private
     */
    get natives() {
        return this.querySelectorAll(".md-slider__native");
    }

    /**
     * Event handler for the slider input event.
     * Updates the component's value and emits the onSliderNativeInput event.
     * @param {Event} event - The input event.
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
     * Event handler for the slider reset event.
     * Resets the component's value and emits the onSliderNativeReset event.
     * @param {Event} event - The reset event.
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
