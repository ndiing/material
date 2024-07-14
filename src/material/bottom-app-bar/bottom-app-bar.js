import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Represents a bottom app bar component.
 * @element md-bottom-app-bar
 * @extends MDSheetComponent
 */
class MDBottomAppBarComponent extends MDSheetComponent {
    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
    }
}
customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);
export { MDBottomAppBarComponent };
