import { html, nothing } from "lit";
import { MDComponent } from "../base/component";

class MDChipSetComponent extends MDComponent {
    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    constructor() {
        super();

        // default
        this.items = [];
        // this.type=""
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-chip-set");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-chip-set");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    renderItem(item = {}) {
        // prettier-ignore
        return html`
            <md-chip
                .item="${item}"
                .leadingIcon="${item.leadingIcon}"
                .avatar="${item.avatar}"
                .trailingIcon="${item.trailingIcon}"
                .label="${item.label}"
                .activated="${item.activated}"
                @click="${this.handleChipClick}"
            ></md-chip>
        `
    }

    render() {
        // prettier-ignore
        return this.items.map(item=>this.renderItem(item))
    }

    handleChipClick(event) {
        const chip = event.currentTarget;

        // multi-select
        chip.item.activated = !chip.item.activated;

        this.requestUpdate();

        this.emit("onChipClick", { event });
    }
}

customElements.define("md-chip-set", MDChipSetComponent);

export { MDChipSetComponent };
