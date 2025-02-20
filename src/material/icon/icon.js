import { html, nothing } from "lit";
import { MdComponent } from "../component/component";

/**
 * @extends MdComponent
 * @element md-icon
 */
class MDIconComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
