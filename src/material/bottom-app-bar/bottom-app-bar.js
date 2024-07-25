import { MDPaneComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-bottom-app-bar
 * @fires MDBottomAppBarComponent#onScrimClick - {{desc}}
 */
class MDBottomAppBarComponent extends MDPaneComponent {
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
    }
}
customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);
export { MDBottomAppBarComponent };
