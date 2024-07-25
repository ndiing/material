import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-dialog
 * @fires MDDialogComponent#onScrimClick - {{desc}}
 */
class MDDialogComponent extends MDSheetComponent {
    variants = ["full-screen"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");
    }
}
customElements.define("md-dialog", MDDialogComponent);
export { MDDialogComponent };
