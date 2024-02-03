import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDBadgeComponent represents a badge component.
 *
 * @extends MDComponent
 */
class MDBadgeComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {Number} limit - The limit for displaying the badge label.
     * @property {Number} label - The label for the badge.
     */
    static properties = {
        limit: { type: Number },
        label: { type: Number },
    };

    /**
     * Constructor for MDBadgeComponent.
     */
    constructor() {
        super();

        // default
        this.limit = 999;
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-badge");
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
     * Renders the badge component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? `${this.limit}+` : this.label}</div>` : nothing;
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
