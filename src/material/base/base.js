import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdBaseComponent extends LitElement {
    static get properties() {
        return {
            label: { type: String },
        };
    }

    constructor() {
        super();
        this.label = "Label";
    }

    createRenderRoot() {
        return this;
    }

   /*prettier-ignore*/
 render() {
                return html`
            ${this.label ? html`<div class="md-base__label">${this.label}</div>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-base");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-base");
    }

    firstUpdated() {}

    updated(_changedProperties) {}
}

customElements.define("md-base", MdBaseComponent);

export { MdBaseComponent };
