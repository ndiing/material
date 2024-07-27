import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-side-sheet
 * @fires MDSideSheetComponent#onScrimClick - {{desc}}
 */
class MDSideSheetComponent extends MDPaneComponent {
    variants = ["modal"];

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
    }
}
customElements.define("md-side-sheet", MDSideSheetComponent);
export { MDSideSheetComponent };
