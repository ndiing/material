import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-bottom-sheet
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
