import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdDialogFooter extends MdElement {
    static properties = {
        buttons: { type: Array },
    };

    constructor() {
        super();

        this.buttons = [];
    }

    /* prettier-ignore */
    renderButton(properties){
        return html`
            <md-button 
                class="md-dialog__button"
                style="${styleMap(properties.style??{})}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .label="${ifDefined(properties.label)}"
                .icon="${ifDefined(properties.icon)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .type="${ifDefined(properties.type)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                @click="${properties.onDialogButtonClick}"
            ></md-button>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.buttons?.length?this.buttons.map(({component,...properties}) => this.renderButton(properties)):nothing}
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
