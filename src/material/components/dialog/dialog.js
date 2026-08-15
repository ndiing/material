import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdDialogHeader } from "./dialog-header.js";
import { MdDialogFooter } from "./dialog-footer.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdDialog extends MdElement {
    static properties = {
        ...MdDialogHeader.properties,
        ...MdDialogFooter.properties,
        open: { type: Boolean, reflect: true },
        variant: { type: String },
        heroIcon: { type: Boolean },
    };

    variants = ["basic", "full-screen"];

    constructor() {
        super();

        this.variant = "basic";

        this._handleDialogScrimClick = this._handleDialogScrimClick.bind(this);
        this._handleDialogAnimationend = this._handleDialogAnimationend.bind(this);
        this._handleWindowKeydown = this._handleWindowKeydown.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length||this.headline||this.trailing?.length?html`
                <md-dialog-header 
                    .leading="${ifDefined(this.leading)}" 
                    .headline="${ifDefined(this.headline)}" 
                    .trailing="${ifDefined(this.trailing)}"
                ></md-dialog-header>
            `:nothing}
            ${this.inner||this.buttons?.length?html`
                ${this.inner?html`<md-dialog-body>${this.inner}</md-dialog-body>`:nothing}
                ${this.buttons?.length?html`
                    <md-dialog-footer 
                        .buttons="${ifDefined(this.buttons)}"
                    ></md-dialog-footer>
                `:nothing}
            `:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-dialog");

        this.on("animationend", this._handleDialogAnimationend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
            this.scrimElement.on("onScrimClick", this._handleDialogScrimClick);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        window.removeEventListener("keydown", this._handleWindowKeydown);

        if (this.scrimElement) {
            this.scrimElement.off("onScrimClick", this._handleDialogScrimClick);
            this.scrimElement.remove();
            this.scrimElement = null;
        }

        this.off("animationend", this._handleDialogAnimationend);

        this.classList.remove("md-dialog");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-dialog--${variant}`, this.variant === variant);
            });
        }

        if (_changedProperties.has("heroIcon")) {
            this.classList.toggle(`md-dialog--hero-icon`, Boolean(this.heroIcon));
        }

        if (_changedProperties.has("open")) {
            this.classList.toggle("md-dialog--open", Boolean(this.open));
            if (this.open) {
                if (this.variant === "basic") {
                    this.scrimElement.show();
                }
            } else {
                this.classList.add("md-dialog--close");
                this.scrimElement.close();
            }
        }
    }

    _handleDialogScrimClick(event) {
        this.close();
    }

    _handleDialogAnimationend(event) {
        if (event.target !== event.currentTarget) {
            return;
        }
        if (!this.open) {
            this.classList.remove("md-dialog--close");
        }
    }

    _handleWindowKeydown(event) {
        if (event.code === "Escape") {
            event.preventDefault();
            this.close();
        }
    }

    show() {
        if (this.open) {
            return;
        }
        this.open = true;
        this.focus();
        window.addEventListener("keydown", this._handleWindowKeydown);
    }

    close() {
        if (!this.open) {
            return;
        }
        this.open = false;
        window.removeEventListener("keydown", this._handleWindowKeydown);
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }
}

customElements.define("md-dialog", MdDialog);

export { MdDialog };
