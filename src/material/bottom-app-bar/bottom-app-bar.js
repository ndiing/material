import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{description}}
 * @element md-bottom-app-bar
 * @extends MDSheetComponent
 */
class MDBottomAppBarComponent extends MDSheetComponent {
    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-app-bar");
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
