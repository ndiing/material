import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdBadgeComponent extends LitElement {
    static get properties() {
        return {
            label: { type: Number },
            limit: { type: Number },
        };
    }

    constructor() {
        super();
        this.limit = 999;
    }

    createRenderRoot() {
        return this;
    }

    /*prettier-ignore*/
    render() {
                return html`${this.label ? html`<div class="md-badge__label">${this.label > this.limit ? this.limit + '+' : this.label}</div>` : nothing}`;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-badge");
    }

    firstUpdated() {}

    updated(_changedProperties) {}
}

customElements.define("md-badge", MdBadgeComponent);

export { MdBadgeComponent };
