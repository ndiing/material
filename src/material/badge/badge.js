import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
/**
 * MDBadgeComponent is a custom element that represents a badge component
 * for displaying labels or counts with an optional limit.
 * @element md-badge
 * @extends MDComponent
 * @example
 * <md-badge label=""></md-badge>
 */

class MDBadgeComponent extends MDComponent {
    /**
     * Defines the properties of the MDBadgeComponent.
     * @property {Number} label - The numeric label to display inside the badge.
     * @property {Number} limit - The maximum number to display before showing "999+".
     */
    static properties = {
        label: { type: Number },
        limit: { type: Number },
    };

    /**
     * Constructs an instance of MDBadgeComponent, initializing the limit to 999.
     */
    constructor() {
        super();
        this.limit = 999;
    }

    /**
     * Renders the badge's HTML content. If the label is greater than the limit,
     * it displays the limit followed by a plus sign.
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing;
    }

    /**
     * Handles the connection of the component to the DOM, adding the "md-badge" class.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
