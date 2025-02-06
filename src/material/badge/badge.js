import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 */
class MdBadgeComponent extends MdComponent {
    /**
     * @property {Number} [label]
     * @property {Number} [max]
     */
    static properties = {
        label: { type: Number },
        max: { type: Number },
    };

    /**
     */
    constructor() {
        super();
        this.max = 999;
    }

    /**
     * @private
     */
    render() {
        return this.label ? (this.label > this.max ? this.max + "+" : this.label) : nothing;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }
}
customElements.define("md-badge", MdBadgeComponent);
export { MdBadgeComponent };
