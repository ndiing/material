import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom element for displaying a badge.
 *
 * @extends LitElement
 */
class MdBadgeComponent extends LitElement {
    /**
     * Static properties for the component.
     *
     * @property {number} label - The label to be displayed on the badge.
     * @property {number} limit - The limit for the badge label.
     */
    static get properties() {
        return {
            label: { type: Number },
            limit: { type: Number },
        };
    }

    constructor() {
        super();
        // this.label = ;
        this.limit = 999;
    }

    /**
     * Overrides the default render root to be the element itself.
     *
     * @returns {this} The current instance for chaining.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Renders the badge based on the label and limit.
     *
     * @returns {TemplateResult} The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`${this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing}`;
    }

    /**
     * Adds the "md-badge" class when connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }

    /**
     * Removes the "md-badge" class when disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-badge");
    }

    /**
     * Lifecycle method called after the element's first update.
     */
    firstUpdated() {}

    /**
     * Lifecycle method called when the element is updated.
     *
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

/**
 * Define the custom element "md-badge".
 */
customElements.define("md-badge", MdBadgeComponent);

export { MdBadgeComponent };
