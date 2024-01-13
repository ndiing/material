import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDPanel.
 * @extends MDComponent
 */
class MDPanelComponent extends MDComponent {
    /**
     * Properties for the MDPanelComponent.
     * @returns {Object} Property configuration.
     */
    static get properties() {
        return {};
    }

    /**
     * Constructor for MDPanelComponent.
     */
    constructor() {
        super();
    }

    /**
     * Renders the MDPanelComponent template using Lit.
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

        this.classList.add("md-panel");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-panel");
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

customElements.define("md-panel", MDPanelComponent);

export { MDPanelComponent };
