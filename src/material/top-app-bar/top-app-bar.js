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
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     */
    static properties = {
        ...MDSheetComponent.properties,
    };
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
