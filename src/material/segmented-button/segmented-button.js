import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDSegmentedButton.
 * @extends MDComponent
 * @fires MDSegmentedButtonComponent#onSegmentedButtonClick
 * @example
 * // Example usage:
 * // <md-segmented-button type="single-select" .items="${[
 * //     {label:"Label 1", activated:true},
 * //     {label:"Label 2"},
 * //     {label:"Label 3"},
 * // ]}"></md-segmented-button>
 */
class MDSegmentedButtonComponent extends MDComponent {
/**
     * Properties for the MDSegmentedButtonComponent.
     * @returns {Object} Property configuration.
     * @property {String} type - The type of the native segmented-button element ("single-select" or "multi-select" by default).
     * @property {Array} items - An array of items representing the buttons in the segmented button.
     * Each item should be an object with properties like "type", "icon", "label", and "activated".
     */
    static get properties() {
        return {
            type: { type: String },
            items: { type: Array },
        };
    }

    /**
     * Constructor for MDSegmentedButtonComponent.
     */
    constructor() {
        super();
        this.type = "single-select";
        this.items = [];
    }

    /**
     * Renders the MDSegmentedButtonComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.items.map(item=>html`
                <md-button
                    .item="${item}"
                    .appearance="${"outlined"}"
                    .type="${item.type}"
                    .icon="${item.icon}"
                    .label="${item.label}"
                    .activated="${item.activated}"
                    @click="${this.handleSegmentedButtonClick}"
                ></md-button>
            `)}
        `
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-segmented-button");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-segmented-button");
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

    /**
     * Handles the click event on the segmented button.
     * Toggles the activation state of the buttons based on the type ("single-select" or "multi-select").
     * Emits the 'onSegmentedButtonClick' event.
     * @param {Event} event - The click event.
     * @fires MDSegmentedButtonComponent#onSegmentedButtonClick
     */
    handleSegmentedButtonClick(event) {
        const button = event.currentTarget;
        if (this.type === "multi-select") button.item.activated = !button.item.activated;
        else for (const item of this.items) item.activated = item === button.item;
        this.requestUpdate();
        this.emit("onSegmentedButtonClick", { event, button });
    }
}

customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
