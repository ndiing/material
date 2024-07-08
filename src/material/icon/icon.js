import { MDComponent } from "../component/component.js";


/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-icon
 */
class MDIconComponent extends MDComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
