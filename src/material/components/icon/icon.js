import { html } from "lit";
import { MdElement } from "../../base/element.js";


/**
 * @class MdIcon
 * @extends MdElement
 */
class MdIcon extends MdElement {
    
    /**
     * @property {String} icon - 
     */
    static properties = {
        icon: { type: String },
    };

    /* prettier-ignore */
    render(){
        return this.icon
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon");
    }
}

customElements.define("md-icon", MdIcon);

export { MdIcon };
