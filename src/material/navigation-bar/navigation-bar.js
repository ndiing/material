import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @element md-navigation-bar
 */
class MDNavigationBarComponent extends MDSheetComponent {
    /**
     * {{desc}}
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
                .list="${this.list}"
            ></md-tree>
        `];
    }

    /**
     * {{desc}}
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
