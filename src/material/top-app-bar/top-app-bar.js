import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-top-app-bar
 * @fires MDTopAppBarComponent#onScrimClick - {{desc}}
 */
class MDTopAppBarComponent extends MDPaneComponent {
    variants = ["center-aligned", "small", "medium", "large"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");
    }
}
customElements.define("md-top-app-bar", MDTopAppBarComponent);
export { MDTopAppBarComponent };
