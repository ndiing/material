import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";
import { ifDefined } from "lit/directives/if-defined.js";

class MdButton extends MdElement {
    static properties = {
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        label: { type: String },
        icon: { type: String },
        selected: { type: Boolean },
        disabled: { type: Boolean },
        type: { type: String },
        rippleOptions: { type: Object },
        selectOnToggle: { type: Boolean },
    };

    variants = ["default", "toggle"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["elevated", "filled", "tonal", "outlined", "text"];

    constructor() {
        super();

        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.type = "button";
        this.selectOnToggle = true;

        this._handleButtonClick = this._handleButtonClick.bind(this);

        this.rippleController = new RippleController(this, {
            trigger: ".md-button__native",
        });
    }

    /* prettier-ignore */
    render(){
        return html`
            <button 
                class="md-button__native"
                type="${ifDefined(this.type)}"
                ?disabled="${ifDefined(this.disabled)}"
            >${this.label}</button>
            ${this.icon?html`<md-icon class="md-button__icon" .icon="${this.icon}"></md-icon>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.on("click", this._handleButtonClick);

        this.classList.add("md-button");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleButtonClick);

        this.classList.remove("md-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-button--${variant}`, this.variant === variant);
            });
        }

        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-button--${size}`, this.size === size);
            });
        }

        if (_changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-button--${shape}`, this.shape === shape);
            });
        }

        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-button--${color}`, this.color === color);
            });
        }

        if (_changedProperties.has("selected")) {
            this.classList.toggle(`md-button--selected`, Boolean(this.selected));
        }

        if (_changedProperties.has("disabled")) {
            this.classList.toggle(`md-button--disabled`, Boolean(this.disabled));
        }

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    _handleButtonClick(event) {
        if (this.variant === "toggle" && this.selectOnToggle) {
            this.selected = !this.selected;

            this.emit("onButtonSelection", { event, element: this, selected: this.selected });
        }

        this.emit("onButtonClick", { event, element: this });
    }
}

customElements.define("md-button", MdButton);

export { MdButton };
