import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDIconComponent represents an icon component.
 *
 * @extends MDComponent
 */
class MDIconComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     */
    static properties = {};

    /**
     * Constructor for MDIconComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {}

    /**
     * Renders the icon component.
     */
    render() {
        // You may add content here when implementing the rendering logic.
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
