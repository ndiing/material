import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialog extends MdElement {
    static properties = {
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

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-dialog");

        this.on("animationend", this._handleDialogAnimationend);

        if (!this.scrimElement) {
            this.scrimElement = document.createElement("md-scrim");
            this.parentElement.insertBefore(this.scrimElement, this.nextElementSibling);
        }
        this.scrimElement.on("onScrimClick", this._handleDialogScrimClick);
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

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-dialog--open");
            } else {
                this.classList.remove("md-dialog--open");
                this.classList.add("md-dialog--close");
            }
        }

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-dialog--${variant}`, this.variant === variant);
            });
        }

        if (changedProperties.has("heroIcon")) {
            this.classList.toggle(`md-dialog--hero-icon`, !!this.heroIcon);
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("open") && this.variant === "basic") {
            if (this.open) {
                this.scrimElement.show();
            } else {
                this.scrimElement.close();
            }
        }
    }

    _handleDialogScrimClick(event) {
        this.close();
    }

    _handleDialogAnimationend(event) {
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
