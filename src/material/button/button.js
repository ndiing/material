import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom button component extending MDComponent.
 */
class MDButtonComponent extends MDComponent {
    /**
     * Properties for the MDButtonComponent
     * @property {string} icon - The icon displayed within the button.
     * @property {string} label - The label or text displayed within the button.
     * @property {string} type - The type of the button (e.g., "button", "submit", "reset").
     * @property {boolean} elevated - Determines whether the button has an elevated appearance.
     * @property {boolean} filled - Determines whether the button has a filled appearance.
     * @property {boolean} tonal - Determines whether the button has a tonal appearance.
     * @property {boolean} outlined - Determines whether the button has an outlined appearance.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            type: { type: String },
            elevated: { type: Boolean },
            filled: { type: Boolean },
            tonal: { type: Boolean },
            outlined: { type: Boolean },
        };
    }

    /**
     * Constructor for MDButtonComponent.
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     * Retrieves the native button element.
     * @returns {HTMLElement} The native button element.
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
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-button");
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    /**
     * Lifecycle method called when the element is detached from the DOM.
     * Performs cleanup or tasks when the button is removed.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /**
     * Lifecycle method called when the element's properties have been updated.
     * @param {Map} changedProperties - The properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Additional logic if needed for first update
    }

    /**
     * Lifecycle method called when the element's properties have been updated.
     * Updates button styles based on property changes.
     * @param {Map} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("elevated"))
            this.elevated ? this.classList.add("md-button--elevated") : this.classList.remove("md-button--elevated");
        if (changedProperties.has("filled"))
            this.filled ? this.classList.add("md-button--filled") : this.classList.remove("md-button--filled");
        if (changedProperties.has("tonal"))
            this.tonal ? this.classList.add("md-button--tonal") : this.classList.remove("md-button--tonal");
        if (changedProperties.has("outlined"))
            this.outlined ? this.classList.add("md-button--outlined") : this.classList.remove("md-button--outlined");
    }
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
