import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a dialog component that extends MDSheetComponent.
 * @element md-dialog
 * @extends MDSheetComponent
 */
class MDDialogComponent extends MDSheetComponent {
    variants = ["full"];

    /**
     * Enhances connectedCallback to add specific CSS classes for dialog styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog");
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
