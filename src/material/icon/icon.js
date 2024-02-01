import { MDComponent } from "../base/component";

/**
 * `MDIconComponent` is a custom web component for displaying icons.
 * @extends MDComponent
 */
class MDIconComponent extends MDComponent {
    /**
     * Default properties for MDIconComponent.
     * @static
     * @type {object}
     */
    static properties = {};

    /**
     * Constructs an instance of MDIconComponent.
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

        this.classList.add("md-icon");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Renders the content of the MDIconComponent.
     */
    render() {
        // Implement rendering logic using lit-html
    }
}

/**
 * Define the custom element "md-icon" with MDIconComponent.
 */
customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
