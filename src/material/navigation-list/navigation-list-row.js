import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
/**
 * @extends MdComponent
 * @element md-navigation-list-row
 */
class MDNavigationListRowComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list__row");
    }
}

customElements.define("md-navigation-list-row", MDNavigationListRowComponent);

export { MDNavigationListRowComponent };
