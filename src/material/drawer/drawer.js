import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDPanelComponent } from "../panel/panel";

/**
 * `MDDrawerComponent` is a custom web component representing a drawer.
 * It extends the `MDPanelComponent` class.
 * @extends MDPanelComponent
 */
class MDDrawerComponent extends MDPanelComponent {
    /**
     * Properties for MDDrawerComponent.
     * Inherits properties from MDPanelComponent.
     * @static
     * @type {object}
     */
    static properties = Object.assign(MDPanelComponent.properties, {});

    /**
     * Constructs an instance of MDDrawerComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";

        this.ui = 'drawer';
        this.modal = true;
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-drawer");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-drawer");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // Additional first update logic specific to MDDrawerComponent
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        // Additional update logic specific to MDDrawerComponent
    }

    /**
     * Renders the content of the MDDrawerComponent.
     * This method should be implemented to define the appearance of the drawer.
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // Implementation specific to rendering the drawer
        // ...
    }
}

/**
 * Define the custom element "md-drawer" with MDDrawerComponent.
 */
customElements.define("md-drawer", MDDrawerComponent);

export { MDDrawerComponent };
