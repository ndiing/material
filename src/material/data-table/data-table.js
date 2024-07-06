import { MDCardComponent } from "../card/card.js";
import { MDComponent } from "../component/component.js";

class MDDataTableComponent extends MDCardComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-table");
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };
