import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
/**
 * @extends MdComponent
 * @element md-progress-indicator
 */
class MDProgressIndicatorComponent extends MdComponent {
    /**
     * @property {circular} [variant]
     * @property {Number} [max]
     * @property {Number} [value]
     */
    static properties = {
        variant: { type: String },
        max: { type: Number },
        value: { type: Number },
    };

    variants = ["circular"];

    constructor() {
        super();

        this.max = 100;
        this.value = 0;
    }

    renderProgressIndicatorNative() {
        /* prettier-ignore */
        return html`
            <progress
                class="md-progress-indicator__native"
                max="${ifDefined(this.max)}"
                value="${ifDefined(this.value)}"
            ></progress>
        `;
    }

    renderProgressIndicatorCircular() {
        this.r = ((36 / 40) * 100) / 2;
        this.strokeWidth = (4 / 40) * 100;
        this.strokeDasharray = 2 * Math.PI * this.r;
        this.strokeDashoffset = this.strokeDasharray * (1 - this.value / this.max);
        return html`
            <div class="md-progress-indicator__wrapper">
                <svg
                    class="md-progress-indicator__track"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="${this.r}"
                        fill="transparent"
                        stroke="var(--md-sys-color-secondary-container)"
                        stroke-width="${this.strokeWidth}"
                        stroke-linecap="round"
                        stroke-dasharray="${this.strokeDasharray}"
                        stroke-dashoffset="0"
                    />
                </svg>
                <svg
                    class="md-progress-indicator__indicator"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="${this.r}"
                        fill="transparent"
                        stroke="var(--md-sys-color-primary)"
                        stroke-width="${this.strokeWidth}"
                        stroke-linecap="round"
                        stroke-dasharray="${this.strokeDasharray}"
                        stroke-dashoffset="${this.strokeDashoffset}"
                    />
                </svg>
            </div>
        `;
    }

    render() {
        if (this.variant === "circular") {
            return this.renderProgressIndicatorCircular();
        } else {
            return this.renderProgressIndicatorNative();
        }
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-progress-indicator");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-progress-indicator--${variant}`, this.variant === variant);
            });
        }
    }
}

customElements.define("md-progress-indicator", MDProgressIndicatorComponent);

export { MDProgressIndicatorComponent };
