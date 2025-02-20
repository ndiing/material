import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
/**
 * @extends MdComponent
 * @element md-tree-row
 */
class MDTreeRowComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tree__row");
    }
}

customElements.define("md-tree-row", MDTreeRowComponent);

export { MDTreeRowComponent };
