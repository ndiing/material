import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";
import { MdComponent } from "../component/component";

class MdBadgeComponent extends MdComponent {
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

    render() {
        /*prettier-ignore*/
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
}

customElements.define("md-badge", MdBadgeComponent);

export { MdBadgeComponent };
