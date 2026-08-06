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

function converter(value) {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}

function getFraction(min, max, value) {
    return (value - min) / (max - min);
}

class MdSlider extends MdElement {
    static formAssociated = true;

    static properties = {
        name: { type: String },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        value: { type: Number, converter },
        variant: { type: String, state: true },
        icon: { type: String },
        orientation: { type: String },
        size: { type: String },
        stopIndicator: { type: Boolean },
        valueIndicator: { type: Boolean },
        values: { type: Array, state: true },
        stops: { type: Number, state: true },
    };

    variants = ["standard", "centered", "range"];
    orientations = ["horizontal", "vertical"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    sliderNative = [createRef(), createRef()];

    constructor() {
        super();

        this.internals = this.attachInternals();

        this.variant = "standard";
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 50;
        this.stopIndicator = true;
        this.valueIndicator = true;
        this.values = [];

        this.orientation = "horizontal";
        this.size = "extra-small";
    }

    /* prettier-ignore */
    render(){
        return html`
            <input 
                class="md-slider__hidden"
                type="hidden" 
                name="${ifDefined(this.name)}"
                value="${this.values}"
            >
            ${this.icon?html`<md-icon class="md-slider__icon">${this.icon}</md-icon>`:nothing}
            <div class="md-slider__track"></div>
            ${this.values.map((value,index)=>html`
                <input 
                    ${ref(this.sliderNative[index])}
                    class="${classMap({
                        'md-slider__native':true,
                        [`md-slider__native${index}`]:true,
                    })}"
                    type="range"
                    min="${ifDefined(this.min)}"
                    max="${ifDefined(this.max)}"
                    step="${ifDefined(this.step)}"
                    value="${ifDefined(value)}"
                    @input="${this._handleSliderNativeInput}"
                    @focus="${this._handleSliderNativeFocus}"
                    @blur="${this._handleSliderNativeBlur}"
                >
                <div 
                    class="${classMap({
                        'md-slider__thumb':true,
                        [`md-slider__thumb${index}`]:true,
                    })}"
                ></div>
                ${this.valueIndicator?html`
                    <div 
                        class="${classMap({
                            'md-slider__label':true,
                            [`md-slider__label${index}`]:true
                        })}"
                    >${value}</div>
                `:nothing}
            `)}
            <div class="md-slider__stops">
                ${Array.from({length:this.stops+1},(v, k) => html`
                    <div 
                        class="${classMap(this._getStopClass(k))}"
                    ></div>
                `)}
            </div>
        `
    }

    _getStopClass(k) {
        const value = (k/this.stops)*100;
        const [percentage0, percentage1] = this.values.map((value) => getFraction(this.min, this.max, value) * 100);

        let selected = false;
        if (this.variant === "centered") {
            selected = (value <= 50 && value >= percentage0) || (value >= 50 && value <= percentage0);
        } else if (this.variant === "range") {
            selected = value >= percentage0 && value <= percentage1;
        } else {
            selected = value <= percentage0;
        }
        return {
            "md-slider__stop": true,
            "md-slider__stop--selected": selected,
        };
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-slider");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-slider");
    }

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("min")) {
            if (this.min < 0) {
                this.variant = "centered";
            }
        }

        if (_changedProperties.has("step")) {
            this.stops = this.step > 1 ? Math.floor((this.max - this.min) / this.step) : this.step;
        }

        if (_changedProperties.has("value")) {
            this.values = Array.isArray(this.value) ? this.value : [this.value];
            if (this.values.length === 2) {
                this.variant = "range";
            }
        }
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-slider--${variant}`, this.variant === variant);
            });
        }
        if (changedProperties.has("orientation")) {
            this.orientations.forEach((orientation) => {
                this.classList.toggle(`md-slider--${orientation}`, this.orientation === orientation);
            });
        }
        if (changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-slider--${size}`, this.size === size);
            });
        }
        if (changedProperties.has("stops")) {
            this.classList.toggle("md-slider--discrete", this.stops > 1);
        }
    }

    _calculate(sliderNative) {
        const min = Number(sliderNative.min);
        const max = Number(sliderNative.max);
        const value = Number(sliderNative.value);
        const fraction = getFraction(min, max, value);
        const percentage = fraction * 100;
        return { min, max, value, fraction, percentage };
    }

    _setCssVar(index, fraction, percentage) {
        this.style.setProperty(`--md-comp-slider-fraction${index}`, fraction);
        this.style.setProperty(`--md-comp-slider-percentage${index}`, `${percentage}%`);
    }

    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        this.defaultValues = structuredClone(this.values);

        this._setVariantCssVar();
    }

    formResetCallback(event) {
        this.values = [...this.defaultValues];
        this.defaultValues.forEach((value, index) => {
            const sliderNative = this.sliderNative[index].value;
            sliderNative.value = value;
        });

        this._setVariantCssVar();
    }

    _handleSliderNativeInput(event) {
        if (this.variant === "centered") {
            const sliderNative = this.sliderNative[0].value;
            this.values = [Number(sliderNative.value)];
        } else if (this.variant === "range") {
            const sliderNative0 = this.sliderNative[0].value;
            const sliderNative1 = this.sliderNative[1].value;

            const clampValue0 = Math.min(Number(sliderNative0.value), this.values[1]);
            const clampValue1 = Math.max(Number(sliderNative1.value), this.values[0]);

            sliderNative0.value = clampValue0;
            sliderNative1.value = clampValue1;

            this.values = [clampValue0, clampValue1];
        } else {
            const sliderNative = this.sliderNative[0].value;
            this.values = [Number(sliderNative.value)];
        }

        this._setVariantCssVar();
    }

    _handleSliderNativeFocus(event) {
        this.classList.toggle("md-slider--focus", true);
        this.classList.toggle("md-slider--focus-visible", !this.matches(":active"));
    }
    _handleSliderNativeBlur(event) {
        this.classList.toggle("md-slider--focus", false);
        this.classList.toggle("md-slider--focus-visible", false);
    }

    _setVariantCssVar() {
        if (this.variant === "centered") {
            const sliderNative = this.sliderNative[0].value;

            const { fraction, percentage } = this._calculate(sliderNative);
            const percentage0 = Math.min(50, percentage);
            const percentage1 = Math.max(50, percentage);
            this._setCssVar(0, fraction, percentage0);
            this._setCssVar(1, fraction, percentage1);
        } else if (this.variant === "range") {
            const sliderNative0 = this.sliderNative[0].value;
            const sliderNative1 = this.sliderNative[1].value;

            const { fraction: fraction0, percentage: percentage0 } = this._calculate(sliderNative0);
            const { fraction: fraction1, percentage: percentage1 } = this._calculate(sliderNative1);
            this._setCssVar(0, fraction0, percentage0);
            this._setCssVar(1, fraction1, percentage1);
        } else {
            const sliderNative = this.sliderNative[0].value;

            const { fraction: fraction0, percentage: percentage0 } = this._calculate(sliderNative);
            this._setCssVar(0, fraction0, percentage0);
        }
    }
}

customElements.define("md-slider", MdSlider);

export { MdSlider };

```
### slider
src\material\components\slider\slider.scss

```scss
.md-slider {
    --md-comp-slider-track-height: 16px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-inset-icon-size: 0px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 192px;
    margin: 0 6px;
    height: calc(var(--md-comp-slider-handle-height) + (4px * 2));
    position: relative;
    user-select: none;
}

// .md-slider__hidden {}

.md-slider__native {
    appearance: none;
    background-color: transparent;
    outline: none;

    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 6;
}

.md-slider__native::-webkit-slider-container {
    appearance: none;
}

.md-slider__native::-webkit-slider-runnable-track {
    appearance: none;
}

.md-slider__native::-webkit-slider-thumb {
    appearance: none;

    height: var(--md-comp-slider-handle-height);
    width: var(--md-comp-slider-handle-width);
    background-color: transparent;
}

.md-slider__native::-moz-range-track {
    appearance: none;
}

.md-slider__native::-moz-range-progress {
    appearance: none;
}

.md-slider__native::-moz-range-thumb {
    appearance: none;
    border: 0;
    border-radius: 0;

    height: var(--md-comp-slider-handle-height);
    width: var(--md-comp-slider-handle-width);
    background-color: transparent;
}

.md-slider__icon {
    position: absolute;
    left: 6px;
    z-index: 3;
    pointer-events: none;
    font-size: var(--md-comp-slider-inset-icon-size);
    width: var(--md-comp-slider-inset-icon-size);
    height: var(--md-comp-slider-inset-icon-size);
    color: var(--md-sys-color-on-primary);
}

.md-slider__track {
    height: var(--md-comp-slider-track-height);
    left: -6px;
    right: -6px;
    border-radius: var(--md-comp-slider-track-shape);
    background-color: var(--md-sys-color-secondary-container);
    background: linear-gradient(to right, var(--md-sys-color-primary) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage0) 100%);
    position: absolute;
    z-index: 1;
    pointer-events: none;
}

.md-slider__thumb {
    height: var(--md-comp-slider-handle-height);
    width: var(--md-comp-slider-handle-width);
    border-radius: 9999px;
    background-color: var(--md-sys-color-primary);
    box-shadow: 0 0 0 6px var(--md-sys-color-background);
    position: absolute;
    left: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
    transform: translate3d(-50%, 0, 0);
    z-index: 4;
    pointer-events: none;
}

.md-slider__label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--md-comp-slider-label-container-height);
    width: var(--md-comp-slider-label-container-width);
    padding: 12px 16px;
    border-radius: 9999px;
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);
    position: absolute;
    z-index: 5;
    pointer-events: none;

    transition-duration: var(--md-sys-motion-duration-short3);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-decelerate));
}

.md-slider__stops {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    z-index: 2;
}
.md-slider__stop {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: var(--md-sys-color-on-secondary-container);
}
.md-slider--discrete {
    .md-slider__stop {
        background-color: var(--md-sys-color-on-secondary-container);
    }
    .md-slider__stop--selected {
        background-color: var(--md-sys-color-on-primary);
    }
}

.md-slider__native:is(:active, :focus-visible) + .md-slider__thumb + .md-slider__label {
    transition-duration: var(--md-sys-motion-duration-short2);
    transition-timing-function: cubic-bezier(var(--md-sys-motion-easing-standard-accelerate));
}

.md-slider__native:focus-visible + .md-slider__thumb + .md-slider__thumb {
    outline: 2px solid var(--md-sys-color-outline);
    outline-offset: 2px;
}

// .md-slider--standard {}

.md-slider--horizontal {
    .md-slider__label {
        bottom: calc(100% - (var(--md-comp-slider-label-container-height) / 2));
        left: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(-50%, 0, 0) scale3d(0, 0, 0);

        will-change: bottom, transform;
        transition-property: bottom, transform;
    }

    .md-slider__native:is(:active, :focus-visible) + .md-slider__thumb + .md-slider__label {
        bottom: 100%;
        transform: translate3d(-50%, 0, 0) scale3d(1, 1, 1);
    }

    &.md-slider--centered {
        .md-slider__track {
            background: linear-gradient(to right, var(--md-sys-color-secondary-container) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }
    }

    &.md-slider--range {
        .md-slider__native0 {
            clip-path: inset(0 calc(100% - (40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2))) 0 0);
        }

        .md-slider__native1 {
            clip-path: inset(0 0 0 calc(40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2)));
        }

        .md-slider__track {
            background: linear-gradient(to right, var(--md-sys-color-secondary-container) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }

        .md-slider__thumb1 {
            left: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }

        .md-slider__label1 {
            left: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }
    }
}

.md-slider--vertical {
    height: 192px;
    width: calc(var(--md-comp-slider-handle-height) + (4px * 2));
    margin: 6px 0;

    .md-slider__native {
        writing-mode: vertical-lr;
        direction: rtl;
    }

    .md-slider__native::-webkit-slider-thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
    }

    .md-slider__native::-moz-range-thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
    }

    .md-slider__icon {
        left: auto;
        bottom: 6px;
    }

    .md-slider__track {
        width: var(--md-comp-slider-track-height);
        height: auto;
        left: auto;
        right: auto;
        top: -6px;
        bottom: -6px;
        background: linear-gradient(to top, var(--md-sys-color-primary) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage0) 100%);
    }

    .md-slider__thumb {
        width: var(--md-comp-slider-handle-height);
        height: var(--md-comp-slider-handle-width);
        left: auto;
        bottom: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(0, 50%, 0);
    }

    .md-slider__label {
        left: calc(100% - (var(--md-comp-slider-label-container-height) / 2));
        bottom: calc(var(--md-comp-slider-fraction0) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        transform: translate3d(0, 50%, 0) scale3d(0, 0, 0);

        will-change: left, transform;
        transition-property: left, transform;
    }

    .md-slider__native:is(:active, :focus-visible) + .md-slider__thumb + .md-slider__label {
        left: 100%;
        transform: translate3d(0, 50%, 0) scale3d(1, 1, 1);
    }

    .md-slider__stops {
        flex-direction: column-reverse;
        width: auto;
        height: 100%;
    }

    &.md-slider--centered {
        .md-slider__track {
            background: linear-gradient(to top, var(--md-sys-color-secondary-container) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }
    }

    &.md-slider--range {
        .md-slider__native0 {
            clip-path: inset(calc(100% - (40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2))) 0 0 0);
        }

        .md-slider__native1 {
            clip-path: inset(0 0 calc(40px / 2 + (100% - 40px) * (var(--md-comp-slider-fraction0) + (var(--md-comp-slider-fraction1) - var(--md-comp-slider-fraction0)) / 2)) 0);
        }

        .md-slider__track {
            background: linear-gradient(to top, var(--md-sys-color-secondary-container) 0 var(--md-comp-slider-percentage0), var(--md-sys-color-primary) var(--md-comp-slider-percentage0) var(--md-comp-slider-percentage1), var(--md-sys-color-secondary-container) var(--md-comp-slider-percentage1) 100%);
        }

        .md-slider__thumb1 {
            bottom: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }

        .md-slider__label1 {
            bottom: calc(var(--md-comp-slider-fraction1) * (100% - var(--md-comp-slider-handle-width)) + (var(--md-comp-slider-handle-width) / 2));
        }
    }
}

.md-slider--extra-small {
    --md-comp-slider-track-height: 16px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-inset-icon-size: 0px;
}

.md-slider--small {
    --md-comp-slider-track-height: 24px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 44px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 8px;
    --md-comp-slider-inset-icon-size: 0px;
}

.md-slider--medium {
    --md-comp-slider-track-height: 40px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 52px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 12px;
    --md-comp-slider-inset-icon-size: 24px;
}

.md-slider--large {
    --md-comp-slider-track-height: 56px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 68px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 16px;
    --md-comp-slider-inset-icon-size: 24px;
}

.md-slider--extra-large {
    --md-comp-slider-track-height: 96px;
    --md-comp-slider-label-container-height: 44px;
    --md-comp-slider-label-container-width: 48px;
    --md-comp-slider-handle-height: 108px;
    --md-comp-slider-handle-width: 4px;
    --md-comp-slider-track-shape: 28px;
    --md-comp-slider-inset-icon-size: 32px;
}

```
