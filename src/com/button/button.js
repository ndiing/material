import { html } from "lit";
import { MdElement } from "../../lib/element/element.js";

class MdButton extends MdElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    // prettier-ignore
    render(){
        return html``
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    firstUpdated(_changedProperties) {}

    updated(_changedProperties) {}
}

customElements.define("md-button", MdButton);

export { MdButton };
