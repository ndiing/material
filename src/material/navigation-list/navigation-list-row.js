import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 */
class MdNavigationListRowComponent extends MdComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list__row");
    }
}
customElements.define("md-navigation-list-row", MdNavigationListRowComponent);
export { MdNavigationListRowComponent };
