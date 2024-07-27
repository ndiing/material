import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-card
 * @fires MDCardComponent#onScrimClick - {{desc}}
 */
class MDCardComponent extends MDPaneComponent {
    variants = ["elevated", "filled", "outlined"];

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }
}
customElements.define("md-card", MDCardComponent);
export { MDCardComponent };
