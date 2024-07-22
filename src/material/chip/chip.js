import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-chip
 * @fires MDChipComponent#onChipActionClick - {{desc}}
 */
class MDChipComponent extends MDComponent {
    
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {String} avatar - {{desc}}
     * @property {String} icon - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} action - {{desc}}
     * @property {Boolean} selected - {{desc}}
     * @property {Boolean} disabled - {{desc}}
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
     * {{desc}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }
    
    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.selected ? html`<md-icon class="md-chip__icon" .icon="${"check"}"></md-icon>` : nothing}
            ${!this.selected && this.avatar ? html`<md-image class="md-chip__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
            ${!this.selected && this.icon ? html`<md-icon class="md-chip__icon" .icon="${this.icon}"></md-icon>` : nothing}
            <div class="md-chip__label">${this.label}</div>
            ${this.action ? html`<md-icon-button class="md-chip__action" .icon="${this.action}" @click="${this.handleChipActionClick}"></md-icon-button>` : nothing}
        `;
    }
    
    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
    }
    
    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleChipActionClick(event) {
        this.emit("onChipActionClick", event);
    }
}
customElements.define("md-chip", MDChipComponent);
export { MDChipComponent };
