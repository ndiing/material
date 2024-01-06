import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom button component extending MDComponent.
 */
class MDButtonComponent extends MDComponent {
    /**
     * Properties for the MDButtonComponent.
     * @property {string} icon - The icon displayed within the button.
     * @property {string} label - The label or text displayed within the button.
     * @property {string} type - The type of the button (e.g., "button", "submit", "reset").
     * @property {string} appearance - The appearance style of the button ("elevated", "filled", "tonal", "outlined").
     * @property {boolean} activated - Represents whether the button is activated or not.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            appearance: { type: String },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Constructor for MDButtonComponent.
     */
    constructor() {
        super();
        // Default button type
        this.type = "button";
    }

    /**
     * Retrieves the native button element.
     * @returns {HTMLButtonElement} The native button element.
     */
    get native() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Renders the MDButtonComponent.
     * @returns {TemplateResult} The rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
            <button class="md-button__native" .type="${this.type}"></button>
        `;
    }

    /**
     * Lifecycle method called when the element is attached to the DOM.
     * Initializes the button component and its ripple effect.
     * @returns {Promise<void>} A Promise that resolves when initialization is complete.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
        
    }
    
    async firstUpdated(){
        await this.updateComplete;
        // Initialize ripple effect for the button
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    /**
     * Lifecycle method called when the element's properties have been updated.
     * Updates button styles based on property changes.
     * @param {Map<string, unknown>} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("appearance")) {
            const validAppearances = ["elevated", "filled", "tonal", "outlined"];
            const { appearance } = this;
            if (validAppearances.includes(appearance)) {
                validAppearances.forEach((validAppearance) => {
                    this.classList.remove(`md-button--${validAppearance}`);
                });
                this.classList.add(`md-button--${appearance}`);
            }
        }
    }
}

// Define the custom element "md-button"
customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
