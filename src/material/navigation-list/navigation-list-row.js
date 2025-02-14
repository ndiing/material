import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-navigation-list-row
 */
class MdNavigationListRowComponent extends MdComponent {
    /**
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list__row");
    }
}
customElements.define("md-navigation-list-row", MdNavigationListRowComponent);
export { MdNavigationListRowComponent };
