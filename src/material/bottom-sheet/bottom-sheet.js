import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-bottom-sheet
 * @fires MDBottomSheetComponent#onSheetShow - {{desc}}
 * @fires MDBottomSheetComponent#onSheetClose - {{desc}}
 * @fires MDBottomSheetComponent#onSheetScrimClick - {{desc}}
 */
class MDBottomSheetComponent extends MDSheetComponent {
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
        this.classList.add("md-bottom-sheet");
    }
}
customElements.define("md-bottom-sheet", MDBottomSheetComponent);
export { MDBottomSheetComponent };
