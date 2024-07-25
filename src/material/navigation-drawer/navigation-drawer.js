import { html } from "lit";
import { MDTreeComponent } from "../tree/tree.js";
import { MDPaneComponent } from "../pane/pane.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-navigation-drawer
 * @fires MDNavigationDrawerComponent#onScrimClick - {{desc}}
 */
class MDNavigationDrawerComponent extends MDPaneComponent {
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
        ...MDPaneComponent.properties,
        ...MDTreeComponent.properties,
    };

    variants = ["modal"];

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
