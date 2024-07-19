import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

/**
 * Navigation rail component that extends MDSheetComponent and includes MDTreeComponent properties.
 * @element md-navigation-rail
 * @extends MDSheetComponent
 */
class MDNavigationRailComponent extends MDSheetComponent {
    /**
     * Properties inherited from MDSheetComponent and MDTreeComponent.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    /**
     * Retrieves the child nodes for the navigation rail, which includes an MDTree component.
     * @returns {TemplateResult[]} Array of child nodes for rendering.
     */
    get childNodes_() {
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
     * Sets the child nodes of the navigation rail.
     * @param {TemplateResult[]} value - Array of child nodes to set.
     */
    set childNodes_(value) {
        this._childNodes = value;
    }

    /**
     * Adds CSS classes to the component on connection.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-rail");
    }
}

customElements.define("md-navigation-rail", MDNavigationRailComponent);

export { MDNavigationRailComponent };
