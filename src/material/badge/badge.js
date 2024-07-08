import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * {{description}}
 * @element md-badge
 * @extends MDComponent
 */
class MDBadgeComponent extends MDComponent {
    /**
     * {{description}}
     * @property {Number} label - {{description}}
     * @property {Number} limit - {{description}}
     */
    static properties = {
        label: { type: Number },
        limit: { type: Number },
    };

    /**
     * {{description}}
     */
    constructor() {
        super();

        this.limit = 999;
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-badge");
    }
}

customElements.define("md-badge", MDBadgeComponent);

export { MDBadgeComponent };
