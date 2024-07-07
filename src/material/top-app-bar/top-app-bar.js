import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a top app bar component that extends from MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-top-app-bar
 */
class MDTopAppBarComponent extends MDSheetComponent {
    /**
     * Variants for different sizes of the top app bar.
     * @type {Array.<String>}
     */
    variants = ["center", "small", "medium", "large"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-top-app-bar");
    }
}

customElements.define("md-top-app-bar", MDTopAppBarComponent);

export { MDTopAppBarComponent };
