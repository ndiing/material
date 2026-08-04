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
        this.rippleOptions = {
            trigger: ".md-button__native",
        };
        this.rippleController = new RippleController(this, this.rippleOptions);
        this._handleButtonClick = this._handleButtonClick.bind(this);
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

    update(changedProperties) {
        super.update(changedProperties);

        if (changedProperties.has("variant")) {
            this._toggleClassList(this.variants, this.variant);
        }
        if (changedProperties.has("size")) {
            this._toggleClassList(this.sizes, this.size);
        }
        if (changedProperties.has("shape")) {
            this._toggleClassList(this.shapes, this.shape);
        }
        if (changedProperties.has("color")) {
            this._toggleClassList(this.colors, this.color);
        }
        if (changedProperties.has("selected")) {
            this._toggleClass("selected");
        }
        if (changedProperties.has("disabled")) {
            this._toggleClass("disabled");
        }
        if (changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    _toggleClass(modifier) {
        this.classList.toggle(`md-button--${modifier}`, Boolean(this[modifier]));
    }

    _toggleClassList(list, value) {
        list.forEach((item) => {
            this.classList.toggle(`md-button--${item}`, value === item);
        });
    }

    _handleButtonClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;
            this.emit("onButtonSelection", { event, element: this, selected: this.selected });
        }
        this.emit("onButtonClick", { event, element: this });
    }
}

customElements.define("md-button", MdButton);

export { MdButton };
