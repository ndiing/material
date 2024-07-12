import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * Navigation drawer component that extends MDSheetComponent and includes MDTreeComponent properties.
 * @element md-navigation-drawer
 * @extends MDSheetComponent
 */
class MDNavigationDrawerComponent extends MDSheetComponent {
    /**
     * Properties inherited from MDSheetComponent and MDTreeComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Retrieves the child nodes for the navigation drawer, which includes an MDTree component.
     * @returns {TemplateResult[]} Array of child nodes for rendering.
     */
    get childNodes_() {
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
     * Sets the child nodes of the navigation drawer.
     * @param {TemplateResult[]} value - Array of child nodes to set.
     */
    set childNodes_(value) {
        this._body = value;
    }

    /**
     * Adds CSS classes to the component on connection.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.classList.add("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);
export { MDNavigationDrawerComponent };
