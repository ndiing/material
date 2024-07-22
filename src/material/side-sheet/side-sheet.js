import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-side-sheet
 * @fires MDSideSheetComponent#onSheetShow - {{desc}}
 * @fires MDSideSheetComponent#onSheetClose - {{desc}}
 * @fires MDSideSheetComponent#onSheetScrimClick - {{desc}}
 */
class MDSideSheetComponent extends MDSheetComponent {
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
    variants = ["modal"];

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
    }
}
customElements.define("md-side-sheet", MDSideSheetComponent);
export { MDSideSheetComponent };
