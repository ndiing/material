import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

/**
 * MDTabComponent represents a tab component.
 *
 * @extends MDComponent
 * @fires MDTabComponent#onTabActivated
 */
class MDTabComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} icon - The icon to be displayed in the tab.
     * @property {String} label - The label to be displayed in the tab.
     * @property {String} badge - The badge to be displayed in the tab.
     * @property {Boolean} activated - Indicates whether the tab is activated.
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        badge: { type: String },
        activated: { type: Boolean, reflect: true },
    };

    /**
     * Constructor for MDTabComponent.
     */
    constructor() {
        super();
        // Default label is set to "Label" if not provided.
        // this.label = "Label";
    }

    /**
     * Called when the element is connected to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tab");
    }

    /**
     * Called when the element is disconnected from the DOM.
     * @override
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tab");
    }

    /**
     * Called after the component's first update.
     *
     * @param {Map} changedProperties - Map of changed properties.
     * @override
     */
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);

        // Initialize the ripple effect for the tab.
        this.ripple = new MDRippleController(this, {
            fadeout: true,
        });
    }

    /**
     * Called when the component is updated.
     *
     * @param {Map} changedProperties - Map of changed properties.
     * @override
     */
    updated(changedProperties) {
        if (changedProperties.has("activated")) {
            if (this.activated) {
                // Emit the 'onTabActivated' event when the tab is activated.
                this.updateComplete.then(() => {
                    this.emit("onTabActivated", { tab: this });
                });
            }
        }
    }

    /**
     * Renders the tab component.
     *
     * @returns {TemplateResult} - The rendered template.
     * @override
     */
    render() {
        // prettier-ignore
        return html`
            <div class="md-tab__wrapper">
                ${this.icon ? html`<md-icon class="md-tab__icon">${this.icon}</md-icon>` : nothing}
                ${this.label ? html`<div class="md-tab__label">${this.label}</div>` : nothing}
                ${this.badge ? html`<md-badge class="md-tab__badge" .label="${this.badge}"></md-badge>` : nothing}
            </div>
        `;
    }
}

// Define the custom element
customElements.define("md-tab", MDTabComponent);

// Export the component
export { MDTabComponent };
