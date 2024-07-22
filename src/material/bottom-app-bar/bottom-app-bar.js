import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-bottom-app-bar
 * @fires MDBottomAppBarComponent#onSheetShow - {{desc}}
 * @fires MDBottomAppBarComponent#onSheetClose - {{desc}}
 * @fires MDBottomAppBarComponent#onSheetScrimClick - {{desc}}
 */
class MDBottomAppBarComponent extends MDSheetComponent {
    
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
    }
}
customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);
export { MDBottomAppBarComponent };
