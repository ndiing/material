import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-navigation-rail
 * @fires MDNavigationRailComponent#onSheetShow - {{desc}}
 * @fires MDNavigationRailComponent#onSheetClose - {{desc}}
 * @fires MDNavigationRailComponent#onSheetScrimClick - {{desc}}
 */
class MDNavigationRailComponent extends MDSheetComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {String} leadingIcon - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} subhead - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     * @property {Boolean} open - {{desc}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-rail__tree"
                .variant="${"plain"}"
                .items="${this.items}"
            ></md-tree>
        `];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");
    }
}
customElements.define("md-navigation-rail", MDNavigationRailComponent);
export { MDNavigationRailComponent };
