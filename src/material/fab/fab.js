import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";


class MDFabComponent extends MDComponent {
    
    static properties = {
        icon: { type: String },
        label: { type: String },
        type: { type: String },
        ui: { type: String },
        size: { type: String },
    };

    
    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    
    constructor() {
        super();

        // default
        this.type = "button";
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-fab");
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-fab");
    }

    
    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.fabNative,
        });
    }

    
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-fab--extended");

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-fab--${ui}`);
                });
            }
        }

        if (changedProperties.has("size")) {
            this.classList.remove("md-fab--small");
            this.classList.remove("md-fab--large");

            if (this.size) {
                this.classList.add(`md-fab--${this.size}`);
            }
        }
    }

    
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-fab__native"
                .type="${this.type}"
            ></button>
            ${this.icon ? html`<div class="md-fab__icon">${this.icon}</div>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }
}


customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
