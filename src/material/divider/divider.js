import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-divider
 */
class MdDividerComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-divider");
    }
}
customElements.define("md-divider", MdDividerComponent);
export { MdDividerComponent };
