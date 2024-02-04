import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardBodyComponent } from "../card-body/card-body";

/**
 * MDTooltipBodyComponent represents the body component for a tooltip.
 *
 * @extends MDCardBodyComponent
 */
class MDTooltipBodyComponent extends MDCardBodyComponent {
    /**
     * Lifecycle callback when the element is added to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();

        /**
         * Emitted when the tooltip body is connected to the DOM.
         * @event MDTooltipBodyComponent#connected
         */
        this.dispatchEvent(new CustomEvent('connected'));

        this.classList.add("md-tooltip__body");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        /**
         * Emitted when the tooltip body is disconnected from the DOM.
         * @event MDTooltipBodyComponent#disconnected
         */
        this.dispatchEvent(new CustomEvent('disconnected'));

        this.classList.remove("md-tooltip__body");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }
}

customElements.define("md-tooltip-body", MDTooltipBodyComponent);

export { MDTooltipBodyComponent };
