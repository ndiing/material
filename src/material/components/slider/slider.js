import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ref } from "lit/directives/ref.js";
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

/**
 * @class MdSlider
 * @extends MdElement
 */
class MdSlider extends MdElement {
    static formAssociated = true;

    /**
     */
    static properties = {
        name: { type: String },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        value: { type: Number, converter },
        variant: { type: String, state: true },
        orientation: { type: String },
        size: { type: String },
        icon: { type: String, converter },
        values: { type: Array, state: true },
        stops: { type: Number, state: true },
        label: { type: Boolean },
        flipLabel: { type: Boolean },
    };

    variants = ["standard", "centered", "range"];
    orientations = ["horizontal", "vertical"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];

    constructor() {
        super();

        this.internals = this.attachInternals();

        this.variant = "standard";
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = 50;
        this.values = [];
        this.orientation = "horizontal";
        this.size = "extra-small";
        this.label = true;
        this.flipLabel = false;
    }

    /* prettier-ignore */
    render(){
        const icons = Array.isArray(this.icon) ? this.icon : [this.icon];
        const fraction = getFraction(this.min, this.max, this.values[0] ?? this.min);
        const iconIndex = Math.round(fraction * (icons.length - 1));
        const index = Math.max(0, Math.min(icons.length - 1, iconIndex));
        
        return html`
            <input 
                class="md-slider__hidden"
                type="hidden" 
                name="${ifDefined(this.name)}"
                value="${this.values}"
            >
            ${icons[index]?html`
                <md-icon
                    class="${classMap({
                        "md-slider__icon":true,
                    })}"
                    icon="${icons[index]}"
                ></md-icon>    
            `:nothing}
            <div class="md-slider__track"></div>
            ${this.values.map((value,index)=>html`
                <input 
                    ${ref(this.getRef(`native${index}`))}
                    class="${classMap({
                        'md-slider__native':true,
                        [`md-slider__native${index}`]:true,
                    })}"
                    type="range"
                    min="${ifDefined(this.min)}"
                    max="${ifDefined(this.max)}"
                    step="${ifDefined(this.step)}"
                    value="${ifDefined(value)}"
                    @input="${this._handleInput}"
                    @focus="${this._handleFocus}"
                    @blur="${this._handleBlur}"
                >
                <div 
                    class="${classMap({
                        'md-slider__thumb':true,
                        [`md-slider__thumb${index}`]:true,
                    })}"
                ></div>
                ${this.label?html`
                    <div 
                        class="${classMap({
                            'md-slider__label':true,
                            [`md-slider__label${index}`]:true
                        })}"
                    >${value}</div>
                `:nothing}
            `)}
        `
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

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-slider--${variant}`, this.variant === variant);
            });
        }
        if (_changedProperties.has("orientation")) {
            this.orientations.forEach((orientation) => {
                this.classList.toggle(`md-slider--${orientation}`, this.orientation === orientation);
            });
        }
        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-slider--${size}`, this.size === size);
            });
        }
        if (_changedProperties.has("stops")) {
            this.classList.toggle(`md-slider--discrete`, this.stops > 1);
            this.style.setProperty("--md-comp-slider-stop", this.stops);
        }
        if (_changedProperties.has("flipLabel")) {
            this.classList.toggle(`md-slider--flip-label`, Boolean(this.flipLabel));
        }
    }

    _calculate(native) {
        const min = Number(native.min);
        const max = Number(native.max);
        const value = Number(native.value);
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

    /**
     *
     */
    formResetCallback(event) {
        this.values = [...this.defaultValues];
        this.defaultValues.forEach((value, index) => {
            const native = this.getRef(`native${index}`).value;
            native.value = value;
        });

        this._setVariantCssVar();
    }

    _handleInput(event) {
        if (this.variant === "centered") {
            const native0 = this.getRef("native0").value;
            this.values = [Number(native0.value)];
        } else if (this.variant === "range") {
            const native0 = this.getRef("native0").value;
            const native1 = this.getRef("native1").value;

            const clampValue0 = Math.min(Number(native0.value), this.values[1]);
            const clampValue1 = Math.max(Number(native1.value), this.values[0]);

            native0.value = clampValue0;
            native1.value = clampValue1;

            this.values = [clampValue0, clampValue1];
        } else {
            const native0 = this.getRef("native0").value;
            this.values = [Number(native0.value)];
        }

        this._setVariantCssVar();
    }

    _handleFocus(event) {
        this.classList.toggle("md-slider--focus", true);
        this.classList.toggle("md-slider--focus-visible", !this.matches(":active"));
    }
    _handleBlur(event) {
        this.classList.toggle("md-slider--focus", false);
        this.classList.toggle("md-slider--focus-visible", false);
    }

    _setVariantCssVar() {
        if (this.variant === "centered") {
            const native0 = this.getRef("native0").value;

            const { fraction, percentage } = this._calculate(native0);
            const percentage0 = Math.min(50, percentage);
            const percentage1 = Math.max(50, percentage);
            this._setCssVar(0, fraction, percentage0);
            this._setCssVar(1, fraction, percentage1);
        } else if (this.variant === "range") {
            const native0 = this.getRef("native0").value;
            const native1 = this.getRef("native1").value;

            const { fraction: fraction0, percentage: percentage0 } = this._calculate(native0);
            const { fraction: fraction1, percentage: percentage1 } = this._calculate(native1);
            this._setCssVar(0, fraction0, percentage0);
            this._setCssVar(1, fraction1, percentage1);
        } else {
            const native0 = this.getRef("native0").value;

            const { fraction: fraction0, percentage: percentage0 } = this._calculate(native0);
            this._setCssVar(0, fraction0, percentage0);
        }
    }
}

customElements.define("md-slider", MdSlider);

export { MdSlider };
