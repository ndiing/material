import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";
import { MDPanelComponent } from "../panel/panel";

/**
 * `MDNavigationDrawerComponent` is a custom web component representing a navigation drawer.
 * @extends MDPanelComponent
 */
class MDNavigationDrawerComponent extends MDPanelComponent {
    /**
     * Properties for MDNavigationDrawerComponent.
     * @static
     * @type {object}
     * @property {Array} items - An array of items for the navigation drawer.
     * @property {String} ui - The UI style for the navigation drawer.
     * @property {String} type - The type of the list in the navigation drawer (e.g., "single-select").
     * @property {Boolean} selectable - Indicates whether the list items are selectable.
     */
    static properties = Object.assign(MDPanelComponent.properties, MDListComponent.properties, {});

    /**
     * Constructs an instance of MDNavigationDrawerComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-drawer");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     * Renders the content of the MDNavigationDrawerComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <md-panel-body>
                <md-list 
                    .items="${this.items}"
                    .ui="${this.ui}"
                    .type="${this.type ?? 'single-select'}"
                    .selectable="${this.selectable ?? true}"
                    class="md-navigation-drawer__list"
                    @onListItemContainerClick="${this.handleListItemContainerClick}"
                ></md-list>
            </md-panel-body>
        `;
    }

    /**
     * Handles the click event on a list item container in the navigation drawer.
     * @param {CustomEvent} event - The custom event containing the list item container.
     */
    handleListItemContainerClick(event) {
        // Add your handling logic here if needed
    }
}

/**
 * Define the custom element "md-navigation-drawer" with MDNavigationDrawerComponent.
 */
customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);

export { MDNavigationDrawerComponent };
