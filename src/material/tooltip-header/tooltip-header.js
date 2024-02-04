import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDCardHeaderComponent } from "../card-header/card-header";

/**
 * MDTooltipHeaderComponent represents the header component for a tooltip.
 *
 * @extends MDCardHeaderComponent
 * @fires MDTooltipHeaderComponent#customEvent
 */
class MDTooltipHeaderComponent extends MDCardHeaderComponent {
    /**
     * Lifecycle callback when the element is added to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tooltip__header");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-tooltip__header");
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

customElements.define("md-tooltip-header", MDTooltipHeaderComponent);

export { MDTooltipHeaderComponent };
