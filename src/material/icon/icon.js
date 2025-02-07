import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
class MdIconComponent extends MdComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}
customElements.define("md-icon", MdIconComponent);
export { MdIconComponent };
