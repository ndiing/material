import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../../controller/ripple.js";
import { classMap } from "lit/directives/class-map.js";

const converter = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

function getFraction(value, min, max) {
    return (value - min) / (max - min);
}

class MdSlider extends MdElement {
    static formAssociated = true;
    
    static properties = {
        variant: { type: String },
        orientation: { type: String },
        size: { type: String },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        value: { type: Number, converter },
        name: { type: String },
        disabled: { type: Boolean },
        readonly: { type: Boolean },
        required: { type: Boolean },
        autocomplete: { type: String },
        values: { type: Array, state: true },
        tickmarks: { type: Array, state: true },
    };

    variants = ["standard", "centered", "range"];
    orientations = ["horizontal", "vertical"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    sliderNatives = [];

    constructor() {
        super();
        this.internals = this.attachInternals();
        this.orientation = "horizontal";
        this.size = "extra-small";
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 50;
        this.values = [];
    }
    /* prettier-ignore */
    render(){
        return html`
            <input 
                class="md-slider__hidden"
                type="hidden" 
                name="${ifDefined(this.name)}"
                value="${ifDefined(this.values)}"
            >
            ${this.values.map((value,index)=>html`
                <input 
                    ${ref(this.sliderNatives[index])}
                    class="md-slider__native"
                    type="range"
                    min="${ifDefined(this.min)}"
                    max="${ifDefined(this.max)}"
                    step="${ifDefined(this.step)}"
                    value="${ifDefined(value)}"
                    ?disabled="${ifDefined(this.disabled)}"
                    ?readonly="${ifDefined(this.readonly)}"
                    ?required="${ifDefined(this.required)}"
                    autocomplete="${ifDefined(this.autocomplete)}"
                    @input="${this._handleSliderNativeInput}"
                >
                <output class="md-slider__label">${value}</output>
            `)}
            <div class="md-slider__tickmarks">
                ${Array.from({length:this.tickmarks+1},() => html`
                    <div class="md-slider__tickmark"></div>
                `)}
            </div>
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
        await this.updateComplete;

        this.defaultValues = this.defaultValues ?? structuredClone(this.values);

        if (this.value?.length === 2) {
            this.variant = "range";
        } else if (this.min < 0) {
            this.variant = "centered";
        }

        this._updateValue();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-slider");
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has("value")) {
            this.values = Array.isArray(this.value) ? this.value : [this.value];
            for (let index = 0; index < this.values.length; index++) {
                if (!this.sliderNatives[index]) {
                    this.sliderNatives[index] = createRef();
                }
            }
        }
        if (changedProperties.has("step")) {
            this.tickmarks = this.step > 1 ? (this.max - this.min) / this.step : this.step;
        }
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("orientation")) {
            this._toggleClassList(this.orientations, this.orientation);
        }
        if (changedProperties.has("size")) {
            this._toggleClassList(this.sizes, this.size);
        }
        if (changedProperties.has("variant")) {
            this._toggleClassList(this.variants, this.variant);
        }
        if (changedProperties.has("disabled")) {
            this._toggleClass("disabled", this.disabled);
        }
        if (changedProperties.has("readonly")) {
            this._toggleClass("readonly", this.readonly);
        }
        if (changedProperties.has("step")) {
            this._toggleClass("discrete", this.step > 1);
        }
    }
    formResetCallback(event) {
        for (let index = 0; index < this.defaultValues.length; index++) {
            const sliderNative = this.sliderNatives[index].value;
            sliderNative.value = this.defaultValues[index];
        }
        this.values = this.defaultValues;
        this._updateValue();
    }
    _toggleClass(modifier, force = this[modifier]) {
        this.classList.toggle(`md-slider--${modifier}`, !!force);
    }
    _toggleClassList(list, value) {
        list.forEach((item) => {
            this.classList.toggle(`md-slider--${item}`, value === item);
        });
    }
    _handleSliderNativeInput(event) {
        this._updateValue(true);
        this.emit("onSliderNativeInput", { event, element: this });
    }
    _updateValue(force) {
        if (this.variant === "range") {
            const native0 = this.sliderNatives[0].value;
            const native1 = this.sliderNatives[1].value;

            const _value0 = Math.min(Number(native0.value), this.values[1] ?? Number(native0.max));
            const _value1 = Math.max(Number(native1.value), this.values[0] ?? Number(native1.min));

            native0.value = _value0;
            native1.value = _value1;

            const calc0 = this._calculate(0);
            const calc1 = this._calculate(1);

            this.values = [_value0, _value1];

            this._setCssVars(0, calc0.fraction, calc0.percentage);
            this._setCssVars(1, calc1.fraction, calc1.percentage);
        } else if (this.variant === "centered") {
            const { value, fraction, percentage } = this._calculate(0);

            const percentage0 = Math.min(50, percentage);
            const percentage1 = Math.max(50, percentage);

            this.values = [value];

            this._setCssVars(0, fraction, percentage0);
            this.style.setProperty(`--md-comp-slider-percentage1`, `${percentage1}%`);
        } else {
            const { value, fraction, percentage } = this._calculate(0);

            this.values = [value];

            this._setCssVars(0, fraction, percentage);
        }
    }
    _calculate(index) {
        const sliderNative = this.sliderNatives[index].value;

        const value = Number(sliderNative.value);
        const min = Number(sliderNative.min);
        const max = Number(sliderNative.max);
        const step = Number(sliderNative.step);

        const fraction = getFraction(value, min, max);
        const percentage = fraction * 100;

        return { value, fraction, percentage };
    }
    _setCssVars(index, fraction, percentage) {
        this.style.setProperty(`--md-comp-slider-fraction${index}`, fraction);
        this.style.setProperty(`--md-comp-slider-percentage${index}`, `${percentage}%`);
    }
}

customElements.define("md-slider", MdSlider);

export { MdSlider };
