import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

class MDButtonComponent extends MDComponent {
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

    constructor() {
        super();

        this.type = "button";
    }

    get native() {
        return this.querySelector(".md-button__native");
    }

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-button__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
            <button class="md-button__native" .type="${this.type}"></button>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-button");
        this.mdripple = new MDRipple(this, {
            trigger: this.native,
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("elevated"))
            if (this.elevated) this.classList.add("md-button--elevated");
            else this.classList.remove("md-button--elevated");
        if (changedProperties.has("filled"))
            if (this.filled) this.classList.add("md-button--filled");
            else this.classList.remove("md-button--filled");
        if (changedProperties.has("tonal"))
            if (this.tonal) this.classList.add("md-button--tonal");
            else this.classList.remove("md-button--tonal");
        if (changedProperties.has("outlined"))
            if (this.outlined) this.classList.add("md-button--outlined");
            else this.classList.remove("md-button--outlined");
    }
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
