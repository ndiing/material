import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a top app bar component that extends MDSheetComponent.
 * @element md-top-app-bar
 * @extends MDSheetComponent
 */
class MDTopAppBarComponent extends MDSheetComponent {
    variants = ["center", "small", "medium", "large"];

    /**
     * Enhances connectedCallback to add specific CSS classes for top app bar styling.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");
    }
}
customElements.define("md-top-app-bar", MDTopAppBarComponent);
export { MDTopAppBarComponent };
