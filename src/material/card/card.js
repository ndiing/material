import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

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
     * @property {Array} leadingActions - {{desc}}
     * @property {String} label - {{desc}}
     * @property {String} subLabel - {{desc}}
     * @property {Array} trailingActions - {{desc}}
     * @property {Array} actions - {{desc}}
     */
    static properties = {
        variant: { type: String },
        leadingActions: { type: Array },
        label: { type: String },
        subLabel: { type: String },
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
            ${this.leadingActions?.length || this.label || this.subLabel || this.trailingActions?.length?html`
                <div class="md-card__header">
                    ${this.leadingActions?.length ? html`
                        <div class="md-card__actions">
                            ${this.leadingActions.map(item => {
                                item.component=item.component||'icon-button'
                                return renderComponent(item)    
                            })}
                        </div>
                    ` : nothing}
                    ${this.label || this.subLabel ? html`
                        <div class="md-card__label">
                            ${this.label ? html`<div class="md-card__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-card__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingActions?.length ? html`
                        <div class="md-card__actions md-card__actions--end">
                            ${this.trailingActions.map(item=> {
                                item.component=item.component||'icon-button'
                                return renderComponent(item)    
                            })}
                        </div>
                    ` : nothing}
                </div>
            `:nothing}
            ${this.childNodes_?.length || this.actions?.length?html`
                <div class="md-card__body">
                    ${this.childNodes_?.length ? html`<div class="md-card__inner">${this.childNodes_}</div>` : nothing}
                    ${this.actions?.length ? html`
                        <div class="md-card__footer">
                            ${this.actions.map(item => {
                                item.component=item.component||'button'
                                return renderComponent(item)    
                            })}
                        </div>
                    ` : nothing}
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
