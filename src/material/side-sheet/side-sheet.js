import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a side sheet component that extends from MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-side-sheet
 */
class MDSideSheetComponent extends MDSheetComponent {
    /**
     * Variants for different styles of the side sheet.
     * @type {Array.<String>}
     */
    variants = ["modal"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-side-sheet");
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };
