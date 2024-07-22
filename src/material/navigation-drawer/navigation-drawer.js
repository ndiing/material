import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-navigation-drawer
 * @fires MDNavigationDrawerComponent#onSheetShow - {{desc}}
 * @fires MDNavigationDrawerComponent#onSheetClose - {{desc}}
 * @fires MDNavigationDrawerComponent#onSheetScrimClick - {{desc}}
 */
class MDNavigationDrawerComponent extends MDSheetComponent {
    
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
        ...MDTreeComponent.properties,
    };
    
    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-drawer__tree"
                .variant="${this.variant||"plain"}"
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
        this.classList.add("md-navigation-drawer");
    }
}
customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);
export { MDNavigationDrawerComponent };
