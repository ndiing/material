import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * {{description}}
 * @element md-navigation-rail
 * @extends MDSheetComponent
 */
class MDNavigationBarComponent extends MDSheetComponent {
    /**
     * {{description}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * {{description}}
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-rail__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `];
    }

    /**
     * {{description}}
     */
    set body(value) {
        this._body = value;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-navigation-rail");
    }
}

customElements.define("md-navigation-rail", MDNavigationBarComponent);

export { MDNavigationBarComponent };
