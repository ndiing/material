import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { renderButton } from "../../core/template.js";

/**
 * @class MdDialogFooter
 * @extends MdElement
 */
class MdDialogFooter extends MdElement {
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
            ${this.buttons?.length?this.buttons.map(({component,...properties}) => renderButton({styleMap:{'md-dialog__button':true,...properties.styleMap},...properties})):nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__footer");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__footer");
    }
}

customElements.define("md-dialog-footer", MdDialogFooter);

export { MdDialogFooter };
