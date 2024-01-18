import { LitElement, html, nothing } from "lit";
import { MdStateController } from "../state/state";

class MdPanelComponent extends LitElement {
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

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`<div class="md-panel__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-panel");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-panel");
    }

    firstUpdated() {
    }

    updated(_changedProperties) {
    }
}

customElements.define("md-panel", MdPanelComponent);

export { MdPanelComponent };
