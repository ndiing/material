import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-bottom-sheet
 * @fires MDBottomSheetComponent#onScrimClick - {{desc}}
 */
class MDBottomSheetComponent extends MDPaneComponent {
    variants = ["modal"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-sheet");
    }
}
customElements.define("md-bottom-sheet", MDBottomSheetComponent);
export { MDBottomSheetComponent };
