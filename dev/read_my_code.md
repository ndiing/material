## src\material\components\slider

### slider
src\material\components\slider\slider.js

```js
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
        icon: { type: String, converter },
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
            ${this.icon?html`<md-icon class="md-slider__icon">${this.icon}</md-icon>`:nothing}
            <div class="md-slider__track"></div>
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
                <div class="md-slider__thumb"></div>
            `)}
            <div class="md-slider__tickmarks">
                ${Array.from({length:this.tickmarks+1},(v, k) => html`
                    <div class="${classMap(this._getTickmarkClass(k))}"></div>
                `)}
            </div>
        `
    }

    _getTickmarkClass(k) {
        const value = this.tickmarks * k;

        let active = false;
        if (this.variant === "centered") {
            active = (value < 50 && value >= this.percentage0) || (value > 50 && value <= this.percentage0);
        } else if (this.variant === "range") {
            active = value >= this.percentage0 && value <= this.percentage1;
        } else {
            active = value <= this.percentage0;
        }

        return {
            "md-slider__tickmark": true,
            "md-slider__tickmark--active": active,
        };
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

            this.percentage0 = calc0.percentage;
            this.percentage1 = calc1.percentage;

            this.values = [_value0, _value1];

            this._setCssVars(0, calc0.fraction, calc0.percentage);
            this._setCssVars(1, calc1.fraction, calc1.percentage);
        } else if (this.variant === "centered") {
            const { value, fraction, percentage } = this._calculate(0);

            const percentage0 = Math.min(50, percentage);
            const percentage1 = Math.max(50, percentage);

            this.percentage0 = percentage;
            this.values = [value];

            this._setCssVars(0, fraction, percentage0);
            this.style.setProperty(`--md-comp-slider-percentage1`, `${percentage1}%`);
        } else {
            const { value, fraction, percentage } = this._calculate(0);

            this.percentage0 = percentage;
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

```
### slider
src\material\components\slider\slider.scss

```scss
@use "../../shared/mixins.scss";

.md-slider {
    --md-comp-slider-track-height: 16px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
}

.md-slider__icon {
    position: absolute;
    z-index: 3;
    font-size: 24px;
    height: 24px;
    width: 24px;
    color: var(--md-sys-color-on-primary);
}

.md-slider__native {
    appearance: none;
    position: absolute;
    z-index: 6;
    outline: none;
    background-color: transparent;

    &::-webkit-slider-container {
        appearance: none;
        background-color: transparent;
    }

    &::-webkit-slider-runnable-track {
        appearance: none;
    }

    &::-webkit-slider-thumb {
        z-index: 7;
        appearance: none;
    }

    &:focus-visible {
        + .md-slider__label + .md-slider__thumb {
            outline: 2px solid var(--md-sys-color-outline);
            outline-offset: 2px;
        }
    }

    &:is(:active, :focus-visible) {
        + .md-slider__label {
            transition-duration: var(--md-sys-motion-duration-short3);
            transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
        }
    }
}

.md-slider__track {
    position: absolute;
    z-index: 1;
    pointer-events: none;
}

.md-slider__thumb {
    position: absolute;
    z-index: 4;
    pointer-events: none;
    box-shadow: 0 0 0 6px var(--md-sys-color-background);
}

.md-slider__label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 48px;
    height: 44px;
    padding: 12px 16px;
    border-radius: 9999px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @include mixins.typescale-label-small();
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);
    position: absolute;
    z-index: 5;
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-slider__tickmarks {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 2;
    pointer-events: none;
}

.md-slider__tickmark {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--md-sys-color-primary);
}

.md-slider--discrete {
    .md-slider__tickmark {
        background-color: var(--md-sys-color-primary);
    }
    .md-slider__tickmark--active {
        background-color: var(--md-sys-color-secondary-container);
    }
}

.md-slider--horizontal {
    width: 192px;
    height: calc(var(--md-comp-slider-handle-height) + 8px);
    margin: 0 6px;

    .md-slider__icon {
        left: 0;
    }

    .md-slider__native {
        width: 100%;

        &::-webkit-slider-thumb {
            height: var(--md-comp-slider-handle-height);
            width: var(--md-comp-slider-handle-width);
        }

        &:is(:active, :focus-visible) {
            + .md-slider__label {
                bottom: 100%;
                transform: translate3d(-50%, 0, 0) scale3d(1, 1, 1);
            }
        }
    }

    .md-slider__track {
        height: var(--md-comp-slider-track-height);
        left: -6px;
        right: -6px;
        border-radius: var(--md-comp-slider-track-shape);
        background: linear-gradient(to right, var(--md-sys-color-primary) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage0) 100%);
    }

    .md-slider__thumb {
        height: var(--md-comp-slider-handle-height);
        width: var(--md-comp-slider-handle-width);
        border-radius: 9999px;
        background-color: var(--md-sys-color-primary);
        left: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(-50%, 0, 0);
    }

    .md-slider__label {
        bottom: 50%;
        left: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(-50%, 0, 0) scale3d(0, 0, 1);
        will-change: transform, bottom;
        transition-property: transform, bottom;
    }

    .md-slider__tickmarks {
        width: 100%;
    }

    &.md-slider--centered {
        .md-slider__track {
            background: linear-gradient(to right, var(--md-sys-color-secondary-container) 0% var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }
    }

    &.md-slider--range {
        .md-slider__native {
            &:nth-child(1 of .md-slider__native) {
                clip-path: inset(0 calc(100% - (40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2))) 0 0);
            }

            &:nth-child(2 of .md-slider__native) {
                clip-path: inset(0 0 0 calc(40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2)));
            }
        }

        .md-slider__track {
            background: linear-gradient(to right, var(--md-sys-color-secondary-container) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }

        .md-slider__thumb {
            &:nth-child(2 of .md-slider__thumb) {
                left: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
            }
        }

        .md-slider__label {
            &:nth-child(2 of .md-slider__label) {
                left: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
            }
        }
    }
}

.md-slider--vertical {
    height: 192px;
    width: calc(var(--md-comp-slider-handle-height) + 8px);
    margin: 6px 0;

    .md-slider__icon {
        bottom: 0;
    }

    .md-slider__native {
        writing-mode: vertical-lr;
        direction: rtl;
        height: 100%;

        &::-webkit-slider-thumb {
            width: var(--md-comp-slider-handle-height);
            height: var(--md-comp-slider-handle-width);
        }

        &:is(:active, :focus-visible) {
            + .md-slider__label {
                left: 100%;
                transform: translate3d(0, 50%, 0) scale3d(1, 1, 1);
            }
        }
    }

    .md-slider__track {
        width: var(--md-comp-slider-track-height);
        top: -6px;
        bottom: -6px;
        border-radius: var(--md-comp-slider-track-shape);
        background: linear-gradient(to top, var(--md-sys-color-primary) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage0) 100%);
    }

    .md-slider__thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
        border-radius: 9999px;
        background-color: var(--md-sys-color-primary);
        bottom: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(0, 50%, 0);
    }

    .md-slider__label {
        left: 50%;
        bottom: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(0, 50%, 0) scale3d(0, 0, 1);
        will-change: transform, left;
        transition-property: transform, left;
    }

    .md-slider__tickmarks {
        flex-direction: column-reverse;
        height: 100%;
    }

    &.md-slider--centered {
        .md-slider__track {
            background: linear-gradient(to top, var(--md-sys-color-secondary-container) 0% var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }
    }

    &.md-slider--range {
        .md-slider__native {
            &:nth-child(1 of .md-slider__native) {
                clip-path: inset(calc(100% - (40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2))) 0 0 0);
            }

            &:nth-child(2 of .md-slider__native) {
                clip-path: inset(0 0 calc(40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2)) 0);
            }
        }

        .md-slider__track {
            background: linear-gradient(to top, var(--md-sys-color-secondary-container) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }

        .md-slider__thumb {
            &:nth-child(2 of .md-slider__thumb) {
                bottom: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
            }
        }

        .md-slider__label {
            &:nth-child(2 of .md-slider__label) {
                bottom: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
            }
        }
    }
}

.md-slider--extra-small {
    --md-comp-slider-track-height: 16px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
}

.md-slider--small {
    --md-comp-slider-track-height: 24px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
}

.md-slider--medium {
    --md-comp-slider-track-height: 40px;
    --md-comp-slider-track-shape: 12px;
    --md-comp-slider-handle-height: 52px;
    --md-comp-slider-handle-width: 4px;
}

.md-slider--large {
    --md-comp-slider-track-height: 56px;
    --md-comp-slider-track-shape: 16px;
    --md-comp-slider-handle-height: 68px;
    --md-comp-slider-handle-width: 4px;
}

.md-slider--extra-large {
    --md-comp-slider-track-height: 96px;
    --md-comp-slider-track-shape: 28px;
    --md-comp-slider-handle-height: 108px;
    --md-comp-slider-handle-width: 4px;

    .md-slider__icon {
        font-size: 32px;
        height: 32px;
        width: 32px;
    }
}

```
