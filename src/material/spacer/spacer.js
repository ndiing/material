import { MDComponent } from "../component/component.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-spacer
 */
class MDSpacerComponent extends MDComponent {
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-spacer");
    }
}
customElements.define("md-spacer", MDSpacerComponent);
export { MDSpacerComponent };
