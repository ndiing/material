import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderCardFooter, renderCardHeader } from "../template/template.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-card
 */
class MDCardComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {String} leadingIcon - {{desc}}
     * @property {Array} leadingActions - {{desc}}
     * @property {String} headline - {{desc}}
     * @property {String} subhead - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     */
    static properties = {
        variant: { type: String },
        leadingIcon: { type: String },
        leadingActions: { type: Array },
        headline: { type: String },
        subhead: { type: String },
        trailingActions: { type: Array },
        actions: { type: Array },
    };
    variants = ["elevated", "filled", "outlined"];

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.childNodes_ = Array.from(this.childNodes);
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingActions?.length || this.headline || this.subhead || this.trailingActions?.length?renderCardHeader({
                leadingIcon: this.leadingIcon,
                leadingActions: this.leadingActions,
                headline: this.headline,
                supportingText: this.subhead,
                trailingActions: this.trailingActions,
            }):nothing}
            ${this.childNodes_?.length || this.actions?.length?html`
                <div class="md-card__body">
                    ${this.childNodes_?.length ? html`<div class="md-card__inner">${this.childNodes_}</div>` : nothing}
                    ${this.actions?.length ? renderCardFooter({
                        defaultTrailingActionComponent: 'button',
                        trailingActions:this.actions
                    }): nothing}
                </div>
            `:nothing}
        `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
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
                this.classList.toggle(`md-card--${variant}`, variants.includes(variant));
            });
        }
    }
}
customElements.define("md-card", MDCardComponent);
export { MDCardComponent };
