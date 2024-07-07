import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @tagname md-bottom-sheet
 */
class MDBottomSheetComponent extends MDSheetComponent {
    variants = ["modal"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-sheet");
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };
