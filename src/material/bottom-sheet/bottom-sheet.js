import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{description}}
 * @element md-bottom-sheet
 * @extends MDSheetComponent
 */
class MDBottomSheetComponent extends MDSheetComponent {
    variants = ["modal"];

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-sheet");
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };
