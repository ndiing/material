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

        this.classList.add("md-tooltip__body");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();

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
