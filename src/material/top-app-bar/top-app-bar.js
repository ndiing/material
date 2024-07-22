import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-top-app-bar
 * @fires MDTopAppBarComponent#onSheetShow - {{desc}}
 * @fires MDTopAppBarComponent#onSheetClose - {{desc}}
 * @fires MDTopAppBarComponent#onSheetScrimClick - {{desc}}
 */
class MDTopAppBarComponent extends MDSheetComponent {
    variants = ["center", "small", "medium", "large"];
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");
    }
}
customElements.define("md-top-app-bar", MDTopAppBarComponent);
export { MDTopAppBarComponent };
