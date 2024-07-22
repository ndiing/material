import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-dialog
 * @fires MDDialogComponent#onSheetShow - {{desc}}
 * @fires MDDialogComponent#onSheetClose - {{desc}}
 * @fires MDDialogComponent#onSheetScrimClick - {{desc}}
 */
class MDDialogComponent extends MDSheetComponent {
    variants = ["full"];
    
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
