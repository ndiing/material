import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-badge
 */
class MDBadgeComponent extends MDComponent {
    
    
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {Number} label - {{desc}}
     * @property {Number} limit - {{desc}}
     */
    static properties = {
        label: { type: Number },
        limit: { type: Number },
    };
    
    
    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.limit = 999;
    }
    
    
    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing;
    }
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }
}
customElements.define("md-badge", MDBadgeComponent);
export { MDBadgeComponent };
