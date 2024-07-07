import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a bottom sheet component that extends from MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-bottom-sheet
 */
class MDBottomSheetComponent extends MDSheetComponent {
    /**
     * Variants for different styles of the bottom sheet.
     * @type {Array.<String>}
     */
    variants = ["modal"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-sheet");
    }
}

customElements.define("md-bottom-sheet", MDBottomSheetComponent);

export { MDBottomSheetComponent };
