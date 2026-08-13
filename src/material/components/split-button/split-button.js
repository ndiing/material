import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { renderButton, renderIconButton } from "../../core/template.js";
import { RippleController } from "../../controller/ripple.js";

class MdSplitButton extends MdElement {
    static properties = {
        icon: { type: String },
        label: { type: String },
        trailingIcon: { type: String },
        size: { type: String },
        color: { type: String },
        selected: { type: Boolean },
    };

    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    colors = ["elevated", "filled", "tonal", "outlined", "text"];

    constructor() {
        super();

        this.size = "small";
        this.color = "filled";
        this.trailingIcon = "keyboard_arrow_down";

        this.leadingRippleController = new RippleController(this, {
            container: ".md-split-button__leading",
            trigger: ".md-split-button__leading",
        });
        this.trailingRippleController = new RippleController(this, {
            container: ".md-split-button__trailing",
            trigger: ".md-split-button__trailing",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <div 
                class="md-split-button__leading"
                tabindex="0"
                @click="${this._handleSplitButtonClick}"
                @keydown="${this._handleSplitButtonKeydown}"
            >
                ${this.icon?html`<md-icon class="md-split-button__icon" .icon="${this.icon}"></md-icon>`:nothing}
                ${this.label?html`<div class="md-split-button__label">${this.label}</div>`:nothing}
            </div>
            <div 
                class="md-split-button__trailing"
                tabindex="0"
                @click="${this._handleSplitButtonIconClick}"
                @keydown="${this._handleSplitButtonIconKeydown}"
            >
                <md-icon class="md-split-button__icon" .icon="${this.trailingIcon}"></md-icon>
            </div>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-split-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-split-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-split-button--${color}`, this.color === color);
            });
        }
        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-split-button--${size}`, this.size === size);
            });
        }
        if (_changedProperties.has("selected")) {
            this.classList.toggle(`md-split-button--selected`, Boolean(this.selected));
        }
    }

    _handleSplitButtonClick(event) {
        this.emit("onSplitButtonClick", { event, element: this });
    }

    _handleSplitButtonKeydown(event) {
        if (event.key === "Enter" || event.code === "Space") {
            event.preventDefault();
            this.emit("onSplitButtonPress", { event, element: this });
        }
        this.emit("onSplitButtonKeydown", { event, element: this });
    }

    _handleSplitButtonIconClick(event) {
        this.toggleSelect(event);
        this.emit("onSplitButtonIconClick", { event, element: this });
    }

    _handleSplitButtonIconKeydown(event) {
        if (event.key === "Enter" || event.code === "Space") {
            event.preventDefault();
            this.emit("onSplitButtonPress", { event, element: this });
            this.toggleSelect(event);
        }
        this.emit("onSplitButtonKeydown", { event, element: this });
    }

    toggleSelect(event = {}) {
        this.selected = !this.selected;
        this.emit("onSplitButtonSelection", { event, element: this, selected: this.selected });
    }
}

customElements.define("md-split-button", MdSplitButton);

export { MdSplitButton };
