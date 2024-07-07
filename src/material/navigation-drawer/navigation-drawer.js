import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * Represents a navigation drawer component that includes a tree view for navigation.
 * @extends MDSheetComponent
 * @tagname md-navigation-drawer
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
     * Returns the body content of the navigation drawer, which includes a tree component.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-drawer__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `];
    }

    /**
     * Sets the body content of the navigation drawer.
     */
    set body(value) {
        this._body = value;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MDNavigationBarComponent);

export { MDNavigationBarComponent };
