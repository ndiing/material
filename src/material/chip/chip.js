import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";
/**
 * A custom chip component with enhanced functionality.
 * @element md-chip
 * @extends MDComponent
 * @fires MDChipComponent#onChipActionClick - Event emitted when the chip action button is clicked.
 */
class MDChipComponent extends MDComponent {
    /**
     * Defines the properties of the MDChipComponent.
     * @property {String} variant - The variant of the chip, which can be one of "assist", "filter", "input", or "suggestion".
     * @property {String} avatar - The URL of the avatar image to display in the chip.
     * @property {String} icon - The icon to display in the chip.
     * @property {String} label - The text label of the chip.
     * @property {String} action - The icon for the action button in the chip.
     * @property {Boolean} selected - Indicates whether the chip is selected.
     * @property {Boolean} disabled - Indicates whether the chip is disabled.
     */
    static properties = {
        variant: { type: String },
        avatar: { type: String },
        icon: { type: String },
        label: { type: String },
        action: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };
    variants = ["assist", "filter", "input", "suggestion"];
    /**
     * Creates an instance of MDChipComponent.
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    /**
     * Renders the chip component.
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.selected ? html`<md-icon class="md-chip__icon">check</md-icon>` : nothing}

            ${!this.selected && this.avatar ? html`<md-image class="md-chip__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
            ${!this.selected && this.icon ? html`<md-icon class="md-chip__icon">${this.icon}</md-icon>` : nothing}
            <div class="md-chip__label">${this.label}</div>
            ${this.action ? html`<md-icon-button class="md-chip__action" .icon="${this.action}" @click="${this.handleChipActionClick}"></md-icon-button>` : nothing}
        `;
    }
    /**
     * Called when the component is added to the DOM.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
    }

    /**
     * Called when the component is updated.
     * @param {Map} changedProperties - The properties that have changed.
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-chip--${variant}`, variants.includes(variant));
            });
        }

        if (changedProperties.has("disabled")) {
            if (this.disabled) {
                this.setAttribute("aria-disabled", "true");
                this.setAttribute("tabindex", "-1");
            } else {
                this.removeAttribute("aria-disabled");
                this.removeAttribute("tabindex");
            }
        }
    }
    /**
     * Handles the click event on the chip action button.
     * @param {Event} event - The click event object.
     * @private
     */
    handleChipActionClick(event) {
        this.emit("onChipActionClick", event);
    }
}
customElements.define("md-chip", MDChipComponent);
export { MDChipComponent };
