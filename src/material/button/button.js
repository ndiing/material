import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";


class MDButtonComponent extends MDComponent {
    
    static properties = {
        icon: { type: String },
        label: { type: String },
        activated: { type: Boolean, reflect: true },
        type: { type: String },
        ui: { type: String },
    };

    
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    
    constructor() {
        super();

        // default
        this.type = "button";
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button");
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-button");
    }

    
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.buttonNative,
            inverted: this.ui === "filled",
        });
    }

    
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-button--elevated");
            this.classList.remove("md-button--filled");
            this.classList.remove("md-button--filled-tonal");
            this.classList.remove("md-button--outlined");

            if (this.ui) {
                this.classList.add(`md-button--${this.ui}`);
            }
        }
    }

    
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-button__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-button__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }
}


customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
