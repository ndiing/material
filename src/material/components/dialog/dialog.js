import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdDialog extends MdElement {
    static properties = {
        open: { type: Boolean },
    };

    constructor() {
        super();
        this._handleDialogScrimClick = this._handleDialogScrimClick.bind(this);
        this._handleDialogAnimationend = this._handleDialogAnimationend.bind(this);
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

        this.scrimElement.off("onScrimClick", this._handleDialogScrimClick);
        this.scrimElement.remove();
        this.scrimElement = null;

        this.off("animationend", this._handleDialogAnimationend);

        this.classList.remove("md-dialog");
    }

    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-dialog--open");
                this.scrimElement.show();
            } else {
                this.classList.remove("md-dialog--open");
                this.classList.add("md-dialog--close");
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

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
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
