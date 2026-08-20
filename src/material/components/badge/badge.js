import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";


/**
 * @class MdBadge
 * @extends MdElement
 */
class MdBadge extends MdElement {
    
    /**
     * @property {String} label - 
     * @property {Number} max - 
     * @property {Number} maxLength - 
     */
    static properties = {
        label: { type: String },
        max: { type: Number },
        maxLength: { type: Number },
    };

    constructor() {
        super();
        this.max = 999;
        this.maxLength = 4;
    }

    render() {
        if (!this.label) {
            return nothing;
        }

        const rawLabel = String(this.label).trim();

        const labelAsNumber = Number(rawLabel);
        if (!isNaN(labelAsNumber)) {
            return labelAsNumber > this.max ? `${this.max}+` : labelAsNumber;
        }

        if (rawLabel.length > this.maxLength) {
            return rawLabel.slice(0, this.maxLength);
        }

        return rawLabel;
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

customElements.define("md-badge", MdBadge);

export { MdBadge };
