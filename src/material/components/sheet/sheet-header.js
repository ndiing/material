import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";
import { renderButton, renderIcon, renderIconButton, renderImage } from "../../core/template.js";

class MdSheetHeader extends MdElement {
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
            ['avatar', () => renderImage({classMap:{'md-sheet__avatar':true,...properties.classMap},shape:'round',...properties})],
            ['icon', () => renderIcon({classMap:{'md-sheet__icon':true,...properties.classMap},...properties})],
            ['icon-button', () => renderIconButton({classMap:{'md-sheet__icon-button':true,...properties.classMap},...properties})],
            ['button', () => renderButton({classMap:{'md-sheet__button':true,...properties.classMap},...properties})],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return html`
            <div class="md-sheet__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return html`
            <div class="md-sheet__trailing">
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderContent(){
        return html`
            <div class="md-sheet__content">
                ${this.headline?html`<div class="md-sheet__headline">${this.headline}</div>`:nothing}
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
        console.log("connectedCallback");

        this.classList.add("md-sheet__header");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log("disconnectedCallback");

        this.classList.remove("md-sheet__header");
    }
}

customElements.define("md-sheet-header", MdSheetHeader);

export { MdSheetHeader };
