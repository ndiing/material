import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";
import { renderButton, renderIcon, renderIconButton, renderImage } from "../../core/template.js";

/**
 * @class MdDialogHeader
 * @extends MdElement
 */
class MdDialogHeader extends MdElement {
    /**
     * @property {Array} leading -
     * @property {String} headline -
     * @property {Array} trailing -
     */
    static properties = {
        leading: { type: Array },
        headline: { type: String },
        trailing: { type: Array },
    };

    constructor() {
        super();

        this.leading = [];
        this.trailing = [];
    }

    /* prettier-ignore */

    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => renderImage({classMap:{'md-dialog__avatar':true,...properties.classMap},shape:'round',...properties})],
            ['icon', () => renderIcon({classMap:{'md-dialog__icon':true,...properties.classMap},...properties})],
            ['icon-button', () => renderIconButton({classMap:{'md-dialog__icon-button':true,...properties.classMap},...properties})],
            ['button', () => renderButton({classMap:{'md-dialog__button':true,...properties.classMap},...properties})],
        ],() => nothing)
    }

    /* prettier-ignore */

    renderLeading(){
        return html`
            <div class="md-dialog__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */

    renderTrailing(){
        return html`
            <div class="md-dialog__trailing">
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */

    renderContent(){
        return html`
            <div class="md-dialog__content">
                ${this.headline?html`<div class="md-dialog__headline">${this.headline}</div>`:nothing}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length?this.renderLeading():nothing}
            ${(this.headline)?this.renderContent():nothing}
            ${this.trailing?.length?this.renderTrailing():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-dialog__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-dialog__header");
    }
}

customElements.define("md-dialog-header", MdDialogHeader);

export { MdDialogHeader };
