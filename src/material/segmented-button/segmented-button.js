import { html } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDSegmentedButtonComponent class represents a custom web component for segmented buttons.
 * @extends MDComponent
 * @fires MDSegmentedButtonComponent#onButtonClick - Emitted when a segmented button is clicked.
 */
class MDSegmentedButtonComponent extends MDComponent {
    /**
     * Properties for MDSegmentedButtonComponent.
     * @static
     * @type {object}
     * @property {Array} items - An array of items to be displayed as segmented buttons.
     * @property {String} type - The type of segmented button, either "single-select" or "multi-select".
     */

    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    /**
     * Constructs an instance of MDSegmentedButtonComponent.
     * Initializes default values.
     */
    constructor() {
        super();

        // default
        this.items = [];
        this.type = "single-select";
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-segmented-button");
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
     * Renders a segmented button item using lit-html.
     * @param {Object} item - The item to be rendered as a segmented button.
     * @returns {TemplateResult} The lit-html template result for the segmented button item.
     */
    renderItem(item = {}) {
        // prettier-ignore
        return html`
            <md-button
                .item="${item}"
                .icon="${item.icon}"
                .label="${item.label}"
                .activated="${item.activated}"
                .type="${item.type}"
                .ui="${item.ui ?? "outlined"}"
                @click="${this.handleButtonClick}"
            ></md-button>
        `;
    }

    /**
     * Renders the segmented button component.
     * @returns {Array<TemplateResult>} An array of lit-html template results for each segmented button item.
     */
    render() {
        // prettier-ignore
        return this.items.map(item => this.renderItem(item));
    }

    /**
     * Handles the click event on a segmented button.
     * @param {Event} event - The click event.
     * @fires MDSegmentedButtonComponent#onButtonClick
     */
    handleButtonClick(event) {
        const button = event.currentTarget;

        if (this.type === "multi-select") {
            // multi-select
            button.item.activated = !button.item.activated;
        } else {
            // single-select
            for (const item of this.items) {
                item.activated = item === button.item;
            }
        }

        this.requestUpdate();

        /**
         * Emitted when a segmented button is clicked.
         * @event MDSegmentedButtonComponent#onButtonClick
         * @type {object}
         * @property {Event} event - The original click event.
         * @property {MDButtonComponent} button - The button component that triggered the event.
         */
        this.emit("onButtonClick", { event, button });
    }
}

/**
 * Define the custom element "md-segmented-button" with MDSegmentedButtonComponent.
 */
customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
