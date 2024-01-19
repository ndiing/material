import { LitElement, html } from "lit";
import { MdStateController } from "../state/state";

class MdSegmentedButtonComponent extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
            type: { type: String },
        };
    }

    constructor() {
        super();
        this.items = [];
    }

    createRenderRoot() {
        return this;
    }

    render() {
        /*prettier-ignore*/() {
                return this.items.map(item=>html`
            <md-button
                .item="${item}"
                .ui="${"outlined"}"
                .label="${item.label}"
                .icon="${item.icon}"
                .activated="${item.activated}"
                @click="${this.onSegmentedButtonClick}"
            ></md-button>
        `);
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-segmented-button");
    }

    onSegmentedButtonClick(event) {
        const button = event.currentTarget;

        if (this.type === "multi-select") {
            button.item.activated = !button.item.activated;
        } else {
            for (const item of this.items) {
                item.activated = item === button.item;
            }
        }

        this.requestUpdate();

        this.dispatchEvent(
            new CustomEvent("onSegmentedButtonClick", {
                bubbles: true,
                cancelable: true,
                detail: { event, button },
            })
        );
    }
}

customElements.define("md-segmented-button", MdSegmentedButtonComponent);

export { MdSegmentedButtonComponent };
