import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";

/**
 * Material Design Navigation Bar Component.
 * @extends MDListComponent
 */
class MDNavigationBarComponent extends MDComponent {
    /**
     * Properties for the MDNavigationBarComponent.
     * Inherits properties from MDListComponent.
     * @property {Array} items - Array of items to be rendered in the navigation bar.
     */
    static properties = {
        ...MDListComponent.properties,
        items: { type: Array },
    };

    /**
     * Constructor for MDNavigationBarComponent.
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

        this.classList.add("md-navigation-bar");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-bar");
    }

    /**
     * Render method for MDNavigationBarComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        // prettier-ignore
        return html`
            <md-list
                class="md-navigation-bar__list"
                .size="${this.size}"
                .items="${this.items}"
                .type="${this.type ?? 'single-select'}"
                .selectable="${this.selectable ?? true}"
            ></md-list>
        `;
    }
}

// Define the custom element.
customElements.define("md-navigation-bar", MDNavigationBarComponent);

// Export the component.
export { MDNavigationBarComponent };
