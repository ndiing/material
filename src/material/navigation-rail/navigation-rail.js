import { html } from "lit";
import { MDListComponent } from "../list/list";
import { MDSheetComponent } from "../sheet/sheet";

/**
 * Material Design Navigation Rail Component.
 * @extends MDSheetComponent
 */
class MDNavigationRailComponent extends MDSheetComponent {
    /**
     * Properties for the MDNavigationRailComponent.
     * Inherits properties from MDSheetComponent and MDListComponent.
     * @type {Object}
     * @property {Array} items - Array of items to be rendered in the navigation rail.
     */
    static properties = {
        ...MDSheetComponent.properties,
        ...MDListComponent.properties,
        items: { type: Array },
    };

    /**
     * Constructor for MDNavigationRailComponent.
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

        this.classList.add("md-navigation-rail");
    }

    /**
     * Callback when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-navigation-rail");
    }

    /**
     * Render method for MDNavigationRailComponent.
     * @returns {TemplateResult} - The rendered HTML template.
     */
    render() {
        // prettier-ignore
        return html`
            <md-list
                class="md-navigation-rail__list"
                .size="${this.size}"
                .items="${this.items}"
                .type="${this.type ?? 'single-select'}"
                .selectable="${this.selectable ?? true}"
            ></md-list>
        `;
    }
}

// Define the custom element.
customElements.define("md-navigation-rail", MDNavigationRailComponent);

// Export the component.
export { MDNavigationRailComponent };
