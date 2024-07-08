import { MDComponent } from "../component/component.js";

/**
 * {{description}}
 * @element md-icon
 * @extends MDComponent
 */
class MDIconComponent extends MDComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
