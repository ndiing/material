import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

class MDChipComponent extends MDComponent {
    static properties = {
        leadingIcon: { type: String },
        avatar: { type: String },
        trailingIcon: { type: String },
        label: { type: String },
        activated: { type: Boolean, reflect: true },
    };

    constructor() {
        super();

        // default
        // this.label = "Label";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-chip");
    }

    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {});
    }

    updated(changedProperties) {
        // Implement logic if needed
    }

    render() {
        // prettier-ignore
        return html`
            ${this.leadingIcon ? html`<md-icon class="md-chip__icon">${this.leadingIcon}</md-icon>` : nothing}
            ${this.avatar ? html`<md-image class="md-chip__image" .src="${this.avatar}"></md-image>` : nothing}
            ${this.label ? html`<div class="md-chip__label">${this.label}</div>` : nothing}
            ${this.trailingIcon ? html`<md-icon class="md-chip__icon">${this.trailingIcon}</md-icon>` : nothing}
        `;
    }
}

customElements.define("md-chip", MDChipComponent);

export { MDChipComponent };
