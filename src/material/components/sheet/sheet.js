import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdSheet extends MdElement {
    static properties = {
        modal: { type: Boolean },
        open: { type: Boolean },
    };

    constructor() {
        super();
    }

    /* prettier-ignore */
    render(){
    }

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-sheet");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-sheet");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("modal")) {
            this.classList.toggle("md-sheet--modal", Boolean(this.modal));
        }

        if (_changedProperties.has("open")) {
            this.classList.toggle("md-sheet--open", Boolean(this.open));
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

customElements.define("md-sheet", MdSheet);

export { MdSheet };
