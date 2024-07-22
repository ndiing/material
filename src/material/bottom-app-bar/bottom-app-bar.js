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
