import { nothing, html } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDDividerComponent represents a divider component.
 *
 * @extends MDComponent
 */
class MDDividerComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     */
    static properties = {};

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-divider");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-divider");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {}

    /**
     * Renders the divider.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        return nothing;
    }
}

// Define the component
customElements.define("md-divider", MDDividerComponent);

export { MDDividerComponent };
