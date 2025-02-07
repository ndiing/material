import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
/**
 * @class MdBadgeComponent
 * @extends MdComponent
 */
class MdBadgeComponent extends MdComponent {
    /**
     * @property {Number} label
     * @property {Number} max
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
     */
    render() {
        return this.label ? (this.label > this.max ? this.max + "+" : this.label) : nothing;
    }

    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }
}
customElements.define("md-badge", MdBadgeComponent);
export { MdBadgeComponent };
