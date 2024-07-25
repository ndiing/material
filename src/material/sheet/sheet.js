import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-sheet
 * @fires MDSheetComponent#onScrimClick - {{desc}}
 */
class MDSheetComponent extends MDPaneComponent {
    variants = ["north", "east", "south", "west", "modal"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
    }
}
customElements.define("md-sheet", MDSheetComponent);
export { MDSheetComponent };
