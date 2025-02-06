import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 */
class MdTreeRowComponent extends MdComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree__row");
    }
}
customElements.define("md-tree-row", MdTreeRowComponent);
export { MdTreeRowComponent };
