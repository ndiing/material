import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";
import { renderBadge, renderCheckbox, renderIcon, renderIconButton, renderImage, renderRadioButton, renderSwitch } from "../../core/template.js";

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
        return this.leading?.some((i) => i.component === "radio-button") || this.trailing?.some((i) => i.component === "radioButton");
    }

    get hasSwitch() {
        return this.leading?.some((i) => i.component === "switch") || this.trailing?.some((i) => i.component === "switch");
    }

    listSupporting = createRef();

    constructor() {
        super();
        this.leading = [];
        this.trailing = [];
        this.interactive = true;

        this.rippleController = new RippleController(this, {
            register: false,
        });
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
            ['avatar', () => renderImage({ classMap: { "md-list__avatar": true, ...properties.classMap }, shape: "round", ...properties })],
            ['image', () => renderImage({ classMap: { "md-list__image": true, ...properties.classMap }, shape: "sharp", ...properties })],
            ['video', () => renderImage({ classMap: { "md-list__video": true, ...properties.classMap }, shape: "sharp", ...properties })],
            ['icon', () => renderIcon({ classMap: { "md-list__icon": true, ...properties.classMap }, ...properties })],
            ['icon-button', () => renderIconButton({ classMap: { "md-list__icon-button": true, ...properties.classMap }, ...properties })],
            ['checkbox', () => renderCheckbox({ classMap: { "md-list__checkbox": true, ...properties.classMap }, tabIndex: -1, checked: this.selected, ...properties })],
            ['radio-button', () => renderRadioButton({ classMap: { "md-list__radio-button": true, ...properties.classMap }, tabIndex: -1, checked: this.selected, ...properties })],
            ['switch', () => renderSwitch({ classMap: { "md-list__switch": true, ...properties.classMap }, tabIndex: -1, checked: this.selected, ...properties })],
            ['badge', () => renderBadge({ classMap: { "md-list__badge": true, ...properties.classMap }, ...properties })],
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
                ${this.supporting?html`<div ${ref(this.listSupporting)} class="md-list__supporting">${this.supporting}</div>`:nothing}
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

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");

        if (this.interactive) {
            this.rippleController.init();
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        if (this.interactive) {
            this.rippleController.destroy();
        }

        this.classList.remove("md-list__item");
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        if (this.supporting) {
            const clientHeight = this.listSupporting.value.clientHeight;
            const lineHeight = parseInt(window.getComputedStyle(this.listSupporting.value).getPropertyValue("line-height"));
            this.layout = clientHeight > lineHeight ? "three-line" : "two-line";
        } else {
            this.layout = "one-line";
        }

        this.layouts.forEach((layout) => {
            this.classList.toggle(`md-list__item--${layout}`, this.layout === layout);
        });
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }
}

customElements.define("md-list-item", MdListItem);

export { MdListItem };
