import { MDSheetComponent } from "../sheet/sheet.js";


/**
 * {{desc}}
 * @extends MDSheetComponent
 * @tagname md-side-sheet
 */
class MDSideSheetComponent extends MDSheetComponent {
    
    variants = ["modal"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-side-sheet");
    }
}

customElements.define("md-side-sheet", MDSideSheetComponent);

export { MDSideSheetComponent };
