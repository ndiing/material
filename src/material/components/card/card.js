import { html } from "lit";
import { MdElement } from "../../base/element.js";


/**
 * @class MdCard
 * @extends MdElement
 */
class MdCard extends MdElement {
    
    /**
     * @property {String} color - elevated,filled,outlined
     */
    static properties = {
        color: { type: String },
    };

    colors = ["elevated", "filled", "outlined"];

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-card");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-card");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-card--${color}`, this.color === color);
            });
        }
    }
}

customElements.define("md-card", MdCard);

export { MdCard };
