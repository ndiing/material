import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

class MdListItem extends MdElement {
    static properties = {
        leading: { type: Array },
        trailing: { type: Array },
        overline: { type: String },
        label: { type: String },
        supporting: { type: String },
        routerLink: { type: String, reflect: true },
        interactive: { type: Boolean },
        rippleOptions: { type: Object },
        selected: { type: Boolean },
    };

    layouts = ["one-line", "two-line", "three-line"];

    get hasCheckbox() {
        return this.leading?.some((i) => i.component === "checkbox") || this.trailing?.some((i) => i.component === "checkbox");
    }

    get hasRadioButton() {
        return this.leading?.some((i) => i.component === "radioButton") || this.trailing?.some((i) => i.component === "radioButton");
    }

    get hasSwitch() {
        return this.leading?.some((i) => i.component === "switch") || this.trailing?.some((i) => i.component === "switch");
    }

    constructor() {
        super();
        this.leading = [];
        this.trailing = [];
        this.interactive = true;
        this.rippleOptions = {
            register: false,
        };
        this.rippleController = new RippleController(this, this.rippleOptions);
    }

    /* prettier-ignore */
    renderAvatar(properties){
        return html`
            <md-image 
                class="md-list__avatar"
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
    renderImage(properties){
        return html`
            <md-image 
                class="md-list__image"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'sharp')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderVideo(properties){
        return html`
            <md-image 
                class="md-list__video"
                style="${styleMap(properties.style??{})}"
                .src="${ifDefined(properties.src)}"
                .alt="${ifDefined(properties.alt)}"
                .loading="${ifDefined(properties.loading)}"
                .shape="${ifDefined(properties.shape??'sharp')}"
                .error="${ifDefined(properties.error)}"
                .errorSrc="${ifDefined(properties.errorSrc)}"
            ></md-image>
        `
    }

    /* prettier-ignore */
    renderIcon(properties){
        return html`
            <md-icon 
                class="md-list__icon"
                style="${styleMap(properties.style??{})}"
                .icon="${ifDefined(properties.icon)}"
            ></md-icon>
        `
    }

    /* prettier-ignore */
    renderIconButton(properties){
        return html`
            <md-icon-button 
                class="md-list__icon-button"
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
    renderCheckbox(properties){
        return html`
            <md-checkbox 
                class="md-list__checkbox"
                style="${styleMap(properties.style??{})}"
                .ariaLabel="${ifDefined(properties.ariaLabel)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .indeterminate="${ifDefined(properties.indeterminate)}"
                .checked="${ifDefined(properties.checked??this.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .required="${ifDefined(properties.required)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                .validateOnInput="${ifDefined(properties.validateOnInput)}"
                .tabIndex="${ifDefined(properties.tabIndex??-1)}"
            ></md-checkbox>
        `
    }

    /* prettier-ignore */
    renderRadioButton(properties){
        return html`
            <md-radio-button 
                class="md-list__radio-button"
                style="${styleMap(properties.style??{})}"
                .ariaLabel="${ifDefined(properties.ariaLabel)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .checked="${ifDefined(properties.checked??this.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .required="${ifDefined(properties.required)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                .tabIndex="${ifDefined(properties.tabIndex??-1)}"
            ></md-radio-button>
        `
    }

    /* prettier-ignore */
    renderSwitch(properties){
        return html`
            <md-switch 
                class="md-list__switch"
                style="${styleMap(properties.style??{})}"
                .ariaLabel="${ifDefined(properties.ariaLabel)}"
                .name="${ifDefined(properties.name)}"
                .value="${ifDefined(properties.value)}"
                .checked="${ifDefined(properties.checked??this.selected)}"
                .disabled="${ifDefined(properties.disabled)}"
                .required="${ifDefined(properties.required)}"
                .rippleOptions="${ifDefined(properties.rippleOptions)}"
                .tabIndex="${ifDefined(properties.tabIndex??-1)}"
            ></md-switch>
        `
    }

    /* prettier-ignore */
    renderText(properties){
        return html`
            <div 
                class="md-list__text"
                style="${styleMap(properties.style??{})}"
            >${properties.text}</div>
        `
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        return choose(component,[
            ['avatar', () => this.renderAvatar(properties)],
            ['image', () => this.renderImage(properties)],
            ['video', () => this.renderVideo(properties)],
            ['icon', () => this.renderIcon(properties)],
            ['iconButton', () => this.renderIconButton(properties)],
            ['checkbox', () => this.renderCheckbox(properties)],
            ['radioButton', () => this.renderRadioButton(properties)],
            ['switch', () => this.renderSwitch(properties)],
            ['text', () => this.renderText(properties)],
        ],() => nothing)
    }

    /* prettier-ignore */
    renderLeading(){
        return html`
            <div class="md-list__leading">
                ${this.leading.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderTrailing(){
        return html`
            <div class="md-list__trailing">
                ${this.trailing.map(({component,...properties}) => {
                    return this.renderComponent(component,properties)
                })}
            </div>
        `
    }

    /* prettier-ignore */
    renderContent(){
        return html`
            <div class="md-list__content">
                ${this.overline?html`<div class="md-list__overline">${this.overline}</div>`:nothing}
                ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
                ${this.supporting?html`<div class="md-list__supporting">${this.supporting}</div>`:nothing}
            </div>
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.leading?.length?this.renderLeading():nothing}
            ${(this.overline||this.label||this.supporting)?this.renderContent():nothing}
            ${this.trailing?.length?this.renderTrailing():nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");

        if (this.interactive) {
            await this.rippleController.init();
        }

        if (!this.layout) {
            await this._setLayoutClass();
        }
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        if (this.interactive) {
            await this.rippleController.destroy();
        }

        this.classList.remove("md-list__item");
    }

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    async _setLayoutClass() {
        await this.updateComplete;
        if (this.supporting) {
            const supportingElement = this.querySelector(".md-list__supporting");
            const clientHeight = supportingElement.clientHeight;
            const lineHeight = parseInt(window.getComputedStyle(supportingElement).getPropertyValue("line-height"));
            this.layout = clientHeight > lineHeight ? "three-line" : "two-line";
        } else {
            this.layout = "one-line";
        }
        this._toggleClassList(this.layouts, this.layout);
    }

    _toggleClass(modifier) {
        this.classList.toggle(`md-list__item--${modifier}`, Boolean(this[modifier]));
    }

    _toggleClassList(list, value) {
        list.forEach((item) => {
            this.classList.toggle(`md-list__item--${item}`, value === item);
        });
    }
}

customElements.define("md-list-item", MdListItem);

export { MdListItem };
