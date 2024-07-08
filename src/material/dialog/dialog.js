import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{description}}
 * @element md-dialog
 * @extends MDSheetComponent
 */
class MDDialogComponent extends MDSheetComponent {
    variants = ["full"];

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-dialog");
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
