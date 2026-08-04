import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";

class MdBadge extends MdElement {
    static properties = {
        label: { type: Number },
        min: { type: Number },
        max: { type: Number },
    };
    constructor(){
        super()
        this.label=0
        this.min=1
        this.max=999
    }
    /* prettier-ignore */
    render(){
        return this.label>=this.min?this.label>=this.max?`${this.max}+`:this.label:nothing
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
