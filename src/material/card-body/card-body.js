import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDCardBodyComponent represents the body of a card component.
 *
 * @extends MDComponent
 */
class MDCardBodyComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     */

    /**
     * Constructor for MDCardBodyComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card__body");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card__body");
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
     * Renders the card body.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {}
}

customElements.define("md-card-body", MDCardBodyComponent);

export { MDCardBodyComponent };
