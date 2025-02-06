import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 */
class MdIconComponent extends MdComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}
customElements.define("md-icon", MdIconComponent);
export { MdIconComponent };
