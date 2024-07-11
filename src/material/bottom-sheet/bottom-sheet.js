import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a bottom sheet component that extends MDSheetComponent.
 * @element md-bottom-sheet
 * @extends MDSheetComponent
 */
class MDBottomSheetComponent extends MDSheetComponent {
    variants = ["modal"];

    /**
     * Enhances connectedCallback to add specific CSS classes for bottom sheet styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.classList.add("md-bottom-sheet");
    }
}
customElements.define("md-bottom-sheet", MDBottomSheetComponent);
export { MDBottomSheetComponent };
