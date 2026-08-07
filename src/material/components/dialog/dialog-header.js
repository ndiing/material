import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { choose } from "lit/directives/choose.js";

class MdDialogHeader extends MdElement {
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
    renderAvatar(properties){
        return html`
            <md-image 
                class="md-dialog__avatar"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'round')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="md-dialog__icon"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="md-dialog__icon-button"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
                .variant="${ifDefined(properties.variant)}"
                .size="${ifDefined(properties.size)}"
                .shape="${ifDefined(properties.shape)}"
                .color="${ifDefined(properties.color)}"
                .width="${ifDefined(properties.width)}"
                .selected="${ifDefined(properties.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
            ></md-icon-button>
        `
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
    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => this.renderAvatar(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['icon-button', () => this.renderIconButton(properties)],
            ['button', () => this.renderButton(properties)],
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
