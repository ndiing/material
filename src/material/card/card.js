import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { renderComponent } from "../template/template.js";

/**
 * {{description}}
 * @element md-card
 * @extends MDComponent
 */
class MDCardComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} variant - {{description}}
     * @property {Array} leadingActions - {{description}}
     * @property {String} label - {{description}}
     * @property {String} subLabel - {{description}}
     * @property {Array} trailingActions - {{description}}
     * @property {Array} actions - {{description}}
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
     * {{description}}
     */
    constructor() {
        super();
        this.childNodes_ = Array.from(this.childNodes);
    }

    /**
     * @private
     */
    renderHeader() {
        /* prettier-ignore */
        return this.leadingActions?.length || this.label || this.subLabel || this.trailingActions?.length ? html`
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
        ` : nothing;
    }

    /**
     * @private
     */
    renderBody() {
        /* prettier-ignore */
        return this.childNodes_?.length || this.actions?.length ? html`
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
        ` : nothing;
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.renderHeader()}
            ${this.renderBody()}
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    /**
     * @private
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
