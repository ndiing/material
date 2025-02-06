import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 */
class MdListRowComponent extends MdComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__row");
    }
}
customElements.define("md-list-row", MdListRowComponent);
export { MdListRowComponent };
