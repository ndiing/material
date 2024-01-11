import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDBadge.
 * @extends MDComponent
 */
class MDBadgeComponent extends MDComponent {
    /**
     * Properties for the MDBadgeComponent.
     * @returns {Object} Property configuration.
     * @property {Number} limit - The maximum value for the badge label.
     * @property {Number} label - The label for the badge.
     */
    static get properties() {
        return {
            limit: { type: Number },
            label: { type: Number },
        };
    }

    /**
     * Constructor for MDBadgeComponent.
     */
    constructor() {
        super();
        this.limit = 999;
    }

    /**
     * Renders the MDBadgeComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`${this.label?html`<div class="md-badge__label">${this.label>this.limit?this.limit+'+':this.label}</div>`:nothing}`
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-badge");
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
