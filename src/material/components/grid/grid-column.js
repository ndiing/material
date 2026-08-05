import { html } from "lit";
import { MdElement } from "../../base/element.js";

class MdGridColumn extends MdElement {
    static properties = {
        expanded: { type: Number },
        medium: { type: Number },
        compact: { type: Number },
    };
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-grid__column");
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-grid__column");
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has("expanded")) {
            for (let index = 1; index <= 12; index++) {
                this.classList.toggle(`md-grid__column--expanded${index}`, index === this.expanded);
            }
        }
        if (changedProperties.has("medium")) {
            for (let index = 1; index <= 8; index++) {
                this.classList.toggle(`md-grid__column--medium${index}`, index === this.medium);
            }
        }
        if (changedProperties.has("compact")) {
            for (let index = 1; index <= 4; index++) {
                this.classList.toggle(`md-grid__column--compact${index}`, index === this.compact);
            }
        }
    }
}

customElements.define("md-grid-column", MdGridColumn);

export { MdGridColumn };
