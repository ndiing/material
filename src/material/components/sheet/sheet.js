import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { MdLayoutItem } from "../layout/layout-item.js";
import { MdSheetHeader } from "./sheet-header.js";
import { MdSheetFooter } from "./sheet-footer.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdSheet extends MdLayoutItem {
    static properties = {
        ...MdLayoutItem.properties,
        ...MdSheetHeader.properties,
        ...MdSheetFooter.properties,
        inner: { type: Object },
    };

    constructor() {
        super();

        this.region = "east";
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length||this.headline||this.trailing?.length?html`
                <md-sheet-header 
                    .leading="${ifDefined(this.leading)}" 
                    .headline="${ifDefined(this.headline)}" 
                    .trailing="${ifDefined(this.trailing)}"
                ></md-sheet-header>
            `:nothing}
            ${this.inner||this.buttons?.length?html`
                <md-sheet-body>
                    <md-sheet-main>${this.inner}</md-sheet-main>
                    <md-sheet-footer 
                        .buttons="${ifDefined(this.buttons)}"
                    ></md-sheet-footer>
                </md-sheet-body>
            `:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.tabIndex = 0;

        this.classList.add("md-sheet");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-sheet");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
}

customElements.define("md-sheet", MdSheet);

export { MdSheet };
