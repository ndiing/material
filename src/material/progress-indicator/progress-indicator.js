import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { calcPercentage } from "../functions/functions.js";

/**
 * {{description}}
 * @element md-progress-indicator
 * @extends MDComponent
 */
class MDProgressIndicatorComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} variant - {{description}}
     * @property {Number} value - {{description}}
     * @property {Number} max - {{description}}
     */
    static properties = {
        variant: { type: String },
        value: { type: Number },
        max: { type: Number },
    };

    variants = ["circular", "linear"];

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.max = 100;
    }

    renderCircular() {
        /* prettier-ignore */
        return html`
            <svg class="md-progress-indicator__container" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle class="md-progress-indicator__track" cx="50" cy="50" r="45.833333333333336" />
                <circle class="md-progress-indicator__indicator" cx="50" cy="50" r="45.833333333333336" />
            </svg>
        `;
    }

    renderLinear() {
        /* prettier-ignore */
        return html`
            <div class="md-progress-indicator__track">
                <div class="md-progress-indicator__indicator"></div>
            </div>
        `;
    }

    render() {
        /* prettier-ignore */
        return this.variant && this.variant.includes('circular') ?
        this.renderCircular() :
        this.renderLinear();
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-progress-indicator");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-progress-indicator--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("value")) {
            const percentage = calcPercentage(0, this.max, this.value);
            this.style.setProperty("--md-comp-progress-indicator-percentage", percentage + "%");
            this.style.setProperty("--md-comp-progress-indicator-value", percentage);
        }
    }
}

customElements.define("md-progress-indicator", MDProgressIndicatorComponent);

export { MDProgressIndicatorComponent };
