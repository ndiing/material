import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-bottom-sheet
 * @fires MDBottomSheetComponent#onSheetShow - {{desc}}
 * @fires MDBottomSheetComponent#onSheetClose - {{desc}}
 * @fires MDBottomSheetComponent#onSheetScrimClick - {{desc}}
 */
class MDBottomSheetComponent extends MDSheetComponent {
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
