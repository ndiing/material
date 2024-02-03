import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDButtonComponent represents a button component.
 *
 * @extends MDComponent
 */
class MDButtonComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} ui - The UI style of the button (e.g., "elevated", "filled", "filled-tonal", "outlined").
     * @property {String} icon - The icon for the button.
     * @property {String} label - The label for the button.
     * @property {String} type - The type of the button (e.g., "button", "submit", "reset").
     * @property {Boolean} activated - Indicates whether the button is activated.
     */
    static properties = {
        ui: { type: String },
        icon: { type: String },
        label: { type: String },
        type: { type: String },
        activated: { type: Boolean, reflect: true },
    };

    /**
     * Constructor for MDButtonComponent.
     */
    constructor() {
        super();

        // default
        this.type = 'button';
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-button");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.querySelector('.md-button__native'),
            inverted: this.ui === 'filled'
        });
    }

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["elevated", "filled", "filled-tonal", "outlined"].forEach((ui) => {
                this.classList.remove(`md-button--${ui}`);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-button--${ui}`);
                });
            }
        }
    }

    /**
     * Renders the button component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-button__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
