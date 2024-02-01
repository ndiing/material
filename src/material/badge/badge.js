import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * `MDBadgeComponent` is a custom web component representing a badge.
 * @extends MDComponent
 */
class MDBadgeComponent extends MDComponent {
    /**
     * Properties for MDBadgeComponent.
     * @static
     * @type {object}
     * @property {Number} label - The numerical value displayed on the badge.
     * @property {Number} limit - The maximum value to display on the badge before truncating.
     */
    static properties = {
        label: { type: Number },
        limit: { type: Number },
    };

    /**
     * Constructs an instance of MDBadgeComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
        this.limit = 999;
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-badge");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Renders the content of the MDBadgeComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing;
    }
}

/**
 * Define the custom element "md-badge" with MDBadgeComponent.
 */
customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
