import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";
import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-navigation-bar
 * @fires MDNavigationBarComponent#onScrimClick - {{desc}}
 */
class MDNavigationBarComponent extends MDPaneComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
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
                class="md-navigation-bar__tree"
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
        this.classList.add("md-navigation-bar");
    }
}
customElements.define("md-navigation-bar", MDNavigationBarComponent);
export { MDNavigationBarComponent };
