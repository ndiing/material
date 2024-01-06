import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom fab component extending MDComponent.
 */
class MDFabComponent extends MDComponent {
    /**
     * Properties for the MDFabComponent.
     * @property {string} icon - The icon displayed within the fab.
     * @property {string} label - The label or text displayed within the fab.
     * @property {string} type - The type of the fab (e.g., "button", "submit", "reset").
     * @property {string} appearance - The appearance style of the fab ("extended").
     * @property {string} size - The size style of the fab ("small", "large").
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            appearance: { type: String },
            size: { type: String },
        };
    }

    /**
     * Constructor for MDFabComponent.
     */
    constructor() {
        super();
        // Default fab type
        this.type = "button";
    }

    /**
     * Retrieves the native fab element.
     * @returns {HTMLElement} The native fab element.
     */
    get native() {
        return this.querySelector(".md-fab__native");
    }

    /**
     * Renders the MDFabComponent.
     * @returns {TemplateResult} The rendered template result.
     */
    render() {
        // prettier-ignore
        return html`
            ${this.icon ? html`<div class="md-fab__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
            <button class="md-fab__native" .type="${this.type}"></button>
        `;
    }

    /**
     * Lifecycle method called when the element is attached to the DOM.
     * Initializes the fab component and its ripple effect.
     * @returns {Promise<void>} A Promise that resolves when initialization is complete.
     */
     connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
        
    }

    async firstUpdated(){
        await this.updateComplete;
        // Initialize ripple effect for the fab
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    /**
     * Lifecycle method called when the element's properties have been updated.
     * Updates fab styles based on property changes.
     * @param {Map} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("appearance")) {
            const validAppearances = ["extended"];
            const { appearance } = this;
            if (validAppearances.includes(appearance)) {
                validAppearances.forEach((validAppearance) => {
                    this.classList.remove(`md-fab--${validAppearance}`);
                });
                this.classList.add(`md-fab--${appearance}`);
            }
        }
        if (changedProperties.has("size")) {
            const validSizes = ["small", "large"];
            const { size } = this;
            if (validSizes.includes(size)) {
                validSizes.forEach((validSize) => {
                    this.classList.remove(`md-fab--${validSize}`);
                });
                this.classList.add(`md-fab--${size}`);
            }
        }
    }
}

// Define the custom element "md-fab"
customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
