import { html } from "lit";
import { MdComponent } from "../../lib/component/component.js";

class MdButton extends MdComponent {
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
