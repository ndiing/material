import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 */
class MdDividerComponent extends MdComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-divider");
    }
}
customElements.define("md-divider", MdDividerComponent);
export { MdDividerComponent };
