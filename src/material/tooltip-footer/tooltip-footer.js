import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardFooterComponent } from "../card-footer/card-footer";

/**
 * MDTooltipFooterComponent represents the footer component for a tooltip.
 *
 * @extends MDCardFooterComponent
 */
class MDTooltipFooterComponent extends MDCardFooterComponent {
    /**
     * Lifecycle callback when the element is added to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip__footer");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tooltip__footer");
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

customElements.define("md-tooltip-footer", MDTooltipFooterComponent);

export { MDTooltipFooterComponent };
