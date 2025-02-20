import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-list-row
 */
class MDListRowComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__row");
    }
}

customElements.define("md-list-row", MDListRowComponent);

export { MDListRowComponent };
