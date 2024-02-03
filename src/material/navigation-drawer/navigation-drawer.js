import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";

/**
 * Material Design Navigation Drawer Component.
 * @extends MDListComponent
 */
class MDNavigationDrawerComponent extends MDComponent {
    /**
     * Properties for the MDNavigationDrawerComponent.
     * Inherits properties from MDListComponent.
     * @property {Array} items - Array of items to be rendered in the navigation drawer.
     */
    static properties = {
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
