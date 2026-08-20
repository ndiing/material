import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { renderButton } from "../../core/template.js";


/**
 * @class MdSheetFooter
 * @extends MdElement
 */
class MdSheetFooter extends MdElement {
    
    /**
     * @property {Array} buttons - 
     */
    static properties = {
        buttons: { type: Array },
    };

    constructor() {
        super();

        this.buttons = [];
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.buttons?.length?this.buttons.map(({component,...properties}) => renderButton({classMap:{'md-sheet__button':true,...properties.classMap},...properties})):nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-sheet__footer");
    }
}

customElements.define("md-sheet-footer", MdSheetFooter);

export { MdSheetFooter };
