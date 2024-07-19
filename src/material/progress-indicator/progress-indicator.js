import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { calcPercentage } from "../functions/functions.js";

/**
 * Custom component for rendering progress indicators.
 * @element md-progress-indicator
 * @extends MDComponent
 */
class MDProgressIndicatorComponent extends MDComponent {
    /**
     * Defines the properties and their types for the component.
     * @property {String} variant - The variant of the progress indicator.
     * @property {Number} value - The current value of the progress indicator.
     * @property {Number} max - The maximum value of the progress indicator.
     */
    static properties = {
        variant: { type: String },
        value: { type: Number },
        max: { type: Number },
    };

    /**
     * Array of supported variants for the progress indicator.
     * @type {Array<String>}
     */
    variants = ["circular", "linear"];

    /**
     * Initializes the component.
     * Sets the default maximum value for the progress indicator.
     */
    constructor() {
        super();
        this.max = 100;
    }

    /**
     * Renders the circular progress indicator.
     * @private
     */
    renderCircular() {
        /* prettier-ignore */
        return html`
            <svg class="md-progress-indicator__container" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle class="md-progress-indicator__track" cx="50" cy="50" r="45.833333333333336" />
                <circle class="md-progress-indicator__indicator" cx="50" cy="50" r="45.833333333333336" />
            </svg>
        `;
    }

    /**
     * Renders the linear progress indicator.
     * @private
     */
    renderLinear() {
        /* prettier-ignore */
        return html`
            <div class="md-progress-indicator__track">
                <div class="md-progress-indicator__indicator" style="width: var(--md-comp-progress-indicator-percentage, 0%);"></div>
            </div>
        `;
    }

    /**
     * Renders the appropriate progress indicator based on the variant.
     * @private
     */
    render() {
        return this.variant && this.variant.includes("circular") ? this.renderCircular() : this.renderLinear();
    }

    /**
     * Callback when the component is connected to the DOM.
     * Adds necessary classes to the component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-progress-indicator");
    }

    /**
     * Handles updates to the component's properties.
     * Updates the progress indicator's visuals based on property changes.
     * @param {Map} changedProperties - Map of properties that have changed
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-progress-indicator--${variant}`, variants.includes(variant));
            });
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
