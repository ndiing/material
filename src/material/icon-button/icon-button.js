import { html, nothing } from "lit";
import { MDComponent } from "../base/component";
import { MDRippleController } from "../ripple/ripple";

class MDIconButtonComponent extends MDComponent {
    static properties = {
        icon: { type: String },
        type: { type: String },
        ui: { type: String },
        activated: { type: Boolean, reflect: true },
        toggle: { type: Boolean },
    };

    get iconButtonNative() {
        return this.querySelector(".md-icon-button__native");
    }

    constructor() {
        super();

        // default
        this.type = "button";
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon-button");
    }

    firstUpdated(changedProperties) {
        this.ripple = new MDRippleController(this, {
            button: this.iconButtonNative,
            size: this.ui ? (40 / 40) * 100 : (40 / 24) * 100,
            containment: false,
            centered: true,
            fadeout: true,
            // inverted:this.ui==='filled'
        });
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove("md-icon-button--filled");
            this.classList.remove("md-icon-button--filled-tonal");
            this.classList.remove("md-icon-button--outlined");

            if (this.ui) {
                this.classList.add(`md-icon-button--${this.ui}`);
            }
        }

        if (changedProperties.has("toggle")) {
            this.classList.remove("md-icon-button--toggle");

            if (this.toggle) {
                this.classList.add(`md-icon-button--toggle`);
            }
        }
    }

    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-icon-button__native"
                .type="${this.type}"
                @click="${this.handleIconButtonClick}"
            ></button>
            ${this.icon?html`<div class="md-icon-button__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-icon-button__label">${this.label}</div>`:nothing}
        `;
    }

    handleIconButtonClick(event) {
        if (this.toggle) {
            this.activated = !this.activated;
        }

        this.emit("onIconButtonClick", { event });
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
