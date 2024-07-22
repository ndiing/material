import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-side-sheet
 * @fires MDSideSheetComponent#onSheetShow - {{desc}}
 * @fires MDSideSheetComponent#onSheetClose - {{desc}}
 * @fires MDSideSheetComponent#onSheetScrimClick - {{desc}}
 */
class MDSideSheetComponent extends MDSheetComponent {
    variants = ["modal"];
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
    }
}
customElements.define("md-side-sheet", MDSideSheetComponent);
export { MDSideSheetComponent };
