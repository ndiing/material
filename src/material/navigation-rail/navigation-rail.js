import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * Represents a navigation rail component that includes a tree view for navigation.
 * @extends MDSheetComponent
 * @tagname md-navigation-rail
 */
class MDNavigationBarComponent extends MDSheetComponent {
    /**
     * Properties inherited from MDSheetComponent and MDTreeComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Returns the body content of the navigation rail, which includes a tree component.
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
     * Sets the body content of the navigation rail.
     */
    set body(value) {
        this._body = value;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-navigation-rail");
    }
}

customElements.define("md-navigation-rail", MDNavigationBarComponent);

export { MDNavigationBarComponent };
