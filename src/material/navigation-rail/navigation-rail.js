import { MDPaneComponent } from "../pane/pane.js";
import { MDListComponent } from "../material.js";
import { renderList } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDPaneComponent
 * @element md-navigation-rail
 * @fires MDNavigationRailComponent#onScrimClick - {{desc}}
 */
class MDNavigationRailComponent extends MDPaneComponent {
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
        ...MDListComponent.properties,
    };

    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [renderList({
            classMap:{'md-navigation-rail__list':true},
            items: this.items,
            rangeSelection: this.rangeSelection,
            multiSelection: this.multiSelection,
            singleSelection: this.singleSelection,
            allSelection: this.allSelection,
        })];
    }

    /**
     * {{desc}}
     * @param {Any} value - {{desc}}
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    constructor() {
        super();
        this.singleSelection = true;
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
