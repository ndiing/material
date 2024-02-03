import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDFabComponent represents a floating action button component.
 *
 * @extends MDComponent
 */
class MDFabComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} size - The size of the floating action button (e.g., "small", "large").
     * @property {String} ui - The UI style of the floating action button (e.g., "extended", "unelevated").
     * @property {String} icon - The icon for the floating action button.
     * @property {String} label - The label for the floating action button.
     */
    static properties = {
        size: { type: String },
        ui: { type: String },
        icon: { type: String },
        label: { type: String },
    };

    /**
     * Constructor for MDFabComponent.
     */
    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-fab");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {});
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("size")) {
            ["small", "large"].forEach((size) => {
                this.classList.remove(`md-fab--${size}`);
            });
            if (this.size) {
                this.size.split(" ").forEach((size) => {
                    this.classList.add(`md-fab--${size}`);
                });
            }
        }
        if (changedProperties.has("ui")) {
            ["extended", 'unelevated'].forEach((ui) => {
                this.classList.remove(`md-fab--${ui}`);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-fab--${ui}`);
                });
            }
        }
    }

    /**
     * Renders the floating action button component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.icon ? html`<div class="md-fab__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }
}

customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
