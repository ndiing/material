import { html } from "lit";
import { MDComponent } from "../base/component";
import { MDListComponent } from "../list/list";

/**
 * Material Design Menu Component.
 * @extends MDListComponent
 */
class MDMenuComponent extends MDComponent {
    /**
     * Properties for the MDMenuComponent.
     * Inherits properties from MDListComponent.
     * @property {Array} items - Array of items to be rendered in the menu.
     */
    static properties = {
        ...MDListComponent.properties,
        items: { type: Array },
    };

    /**
     * Constructor for MDMenuComponent.
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

        this.classList.add("md-menu");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-menu");
    }

    /**
     * Render method for MDMenuComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        return html`
            <md-list
                class="md-menu__list"
                .size="${this.size}"
                .items="${this.items}"
                .type="${this.type ?? 'single-select'}"
                .selectable="${this.selectable ?? true}"
            ></md-list>
        `;
    }
}

// Define the custom element.
customElements.define("md-menu", MDMenuComponent);

// Export the component.
export { MDMenuComponent };
