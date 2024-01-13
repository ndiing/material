import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDIcon.
 * @extends MDComponent
 * @example
 * // Example usage:
 * // <md-icon>image</md-icon>
 */
class MDIconComponent extends MDComponent {
    /**
     * Properties for the MDIconComponent.
     * @returns {Object} Property configuration.
     */
    static get properties() {
        return {};
    }

    /**
     * Constructor for MDIconComponent.
     */
    constructor() {
        super();
    }

    /**
     * Renders the MDIconComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html``
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon");
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {}
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
