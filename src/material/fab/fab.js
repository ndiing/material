import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom fab component extending MDComponent.
 * @fires fab-click - Triggered when the fab is clicked.
 */
class MDFabComponent extends MDComponent {
    /**
     * Properties for the MDFabComponent.
     * @property {string} icon - The icon displayed within the fab.
     * @property {string} label - The label or text displayed within the fab.
     * @property {string} type - The type of the fab (e.g., "fab", "submit", "reset").
     * @property {boolean} small - Determines whether the fab has a small size.
     * @property {boolean} large - Determines whether the fab has a large size.
     * @property {boolean} extended - Determines whether the fab is extended.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            small: { type: Boolean },
            large: { type: Boolean },
            extended: { type: Boolean },
        };
    }

    /**
     * Constructor for MDFabComponent.
     */
    constructor() {
        super();
        // Default fab type
        this.type = "fab";
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
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-fab");
        // Initialize ripple effect for the fab
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    /**
     * Lifecycle method called when the element is detached from the DOM.
     * Performs cleanup or tasks when the fab is removed.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up resources if needed
    }

    /**
     * Lifecycle method called when the element's properties have been updated for the first time.
     * @param {Map} changedProperties - The properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Additional logic if needed for the first update
    }

    /**
     * Lifecycle method called when the element's properties have been updated.
     * Updates fab styles based on property changes.
     * @param {Map} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("small")) {
            this.small ? this.classList.add("md-fab--small") : this.classList.remove("md-fab--small");
        }
        if (changedProperties.has("large")) {
            this.large ? this.classList.add("md-fab--large") : this.classList.remove("md-fab--large");
        }
        if (changedProperties.has("extended")) {
            this.extended ? this.classList.add("md-fab--extended") : this.classList.remove("md-fab--extended");
        }
    }
}

// Define the custom element "md-fab"
customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
