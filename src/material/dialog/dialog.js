import { MDPaneComponent } from "../material.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-dialog
 * @fires MDDialogComponent#onScrimClick - {{desc}}
 */
class MDDialogComponent extends MDPaneComponent {
    variants = ["full-screen"];

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");
    }
}
customElements.define("md-dialog", MDDialogComponent);
export { MDDialogComponent };
