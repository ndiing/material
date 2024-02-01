import { html } from "lit";
import { MDComponent } from "../base/component";


class MDSegmentedButtonComponent extends MDComponent {
    

    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    
    constructor() {
        super();

        // default
        this.items = [];
        this.type = "single-select";
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-segmented-button");
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-segmented-button");
    }

    
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    
    updated(changedProperties) {
        // Implement logic if needed
    }

    
    renderItem(item = {}) {
        // prettier-ignore
        return html`
            <md-button
                .item="${item}"
                .icon="${item.icon}"
                .label="${item.label}"
                .activated="${item.activated}"
                .type="${item.type}"
                .ui="${item.ui ?? "outlined"}"
                @click="${this.handleButtonClick}"
            ></md-button>
        `;
    }

    
    render() {
        // prettier-ignore
        return this.items.map(item => this.renderItem(item));
    }

    
    handleButtonClick(event) {
        const button = event.currentTarget;

        if (this.type === "multi-select") {
            // multi-select
            button.item.activated = !button.item.activated;
        } else {
            // single-select
            for (const item of this.items) {
                item.activated = item === button.item;
            }
        }

        this.requestUpdate();

        
        this.emit("onButtonClick", { event, button });
    }
}


customElements.define("md-segmented-button", MDSegmentedButtonComponent);

export { MDSegmentedButtonComponent };
