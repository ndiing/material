import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

/**
 * MDCardComponent represents a card component.
 *
 * @extends MDComponent
 */
class MDCardComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} ui - The UI style of the card (e.g., "elevated", "filled", "outlined").
     */
    static properties={
        ui:{type:String}
    }

    /**
     * Constructor for MDCardComponent.
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

        this.classList.add("md-card");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card");
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
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["elevated", "filled", "outlined"].forEach((ui) => {
                this.classList.remove(`md-card--${ui}`);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-card--${ui}`);
                });
            }
        }
    }

    /**
     * Renders the card.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {}
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };
