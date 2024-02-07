import { html } from "lit";
import { MDListComponent } from "../list/list";
import { MDSheetComponent } from "../sheet/sheet";

/**
 * Material Design Navigation Drawer Component.
 * @extends MDSheetComponent
 */
class MDNavigationDrawerComponent extends MDSheetComponent {
    /**
     * Properties for the MDNavigationDrawerComponent.
     * Inherits properties from MDSheetComponent and MDListComponent.
     * @type {Object}
     * @property {Array} items - Array of items to be rendered in the navigation drawer.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDListComponent.properties,
        items: { type: Array },
    };

    /**
     * Constructor for MDNavigationDrawerComponent.
     */
    constructor() {
        super();

        // default
        this.items = [];
        this.region='west';
    }

    /**
     * Callback when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-navigation-drawer");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-drawer");
    }

    /**
     * Render method for MDNavigationDrawerComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        // prettier-ignore
        return html`
            <md-list
                class="md-navigation-drawer__list"
                .size="${this.size}"
                .items="${this.items}"
                .type="${this.type ?? 'single-select'}"
                .selectable="${this.selectable ?? true}"
            ></md-list>
        `;
    }
}

// Define the custom element.
customElements.define("md-navigation-drawer", MDNavigationDrawerComponent);

// Export the component.
export { MDNavigationDrawerComponent };
