import { MDPaneComponent } from "../pane/pane.js";
import { MDListComponent } from "../material.js";
import { renderList } from "../template/template.js";

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
        ...MDPaneComponent.properties,
        ...MDListComponent.properties,
    };

    /**
     * {{desc}}
     */
    get childNodes_() {
        /* prettier-ignore */
        return [renderList({
            classMap:{'md-navigation-bar__list':true},
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

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.singleSelection = true;
    }

    /**
     * {{desc}}
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");
    }
}
customElements.define("md-navigation-bar", MDNavigationBarComponent);
export { MDNavigationBarComponent };
