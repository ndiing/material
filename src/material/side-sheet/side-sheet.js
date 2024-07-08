import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a side sheet component that extends MDSheetComponent.
 * @element md-side-sheet
 * @extends MDSheetComponent
 */
class MDSideSheetComponent extends MDSheetComponent {
    variants = ["modal"];

    /**
     * Enhances connectedCallback to add specific CSS classes for side sheet styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-side-sheet");
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };
