import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";

const converter = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

class MdIconButton extends MdElement {
    static properties = {
        icon: { type: String, converter },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        width: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        rippleOptions: { type: Object },
        selectOnToggle: { type: Boolean },
    };

    variants = ["default", "toggle"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["filled", "tonal", "outlined", "standard"];
    widths = ["narrow", "default", "wide"];

    constructor() {
        super();

        this.variant = "default";
        this.size = "small";
        this.shape = "round";
        this.color = "filled";
        this.width = "default";
        this.selectOnToggle = true;

        this._handleIconButtonClick = this._handleIconButtonClick.bind(this);

        this.rippleController = new RippleController(this, {});
    }

    /* prettier-ignore */
    render() {
        const icons = Array.isArray(this.icon) ? this.icon : [this.icon];
        const index = this.selected ? 1 : 0;
        const icon = icons[index] ?? icons[0] ?? "";

        return html`
            <md-icon 
                class="md-icon-button__native" 
                .icon="${icon}"
            ></md-icon>
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.on("click", this._handleIconButtonClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleIconButtonClick);

        this.classList.remove("md-icon-button");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-icon-button--${variant}`, this.variant === variant);
            });
        }

        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-icon-button--${size}`, this.size === size);
            });
        }

        if (_changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-icon-button--${shape}`, this.shape === shape);
            });
        }

        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-icon-button--${color}`, this.color === color);
            });
        }

        if (_changedProperties.has("width")) {
            this.widths.forEach((width) => {
                this.classList.toggle(`md-icon-button--${width}`, this.width === width);
            });
        }

        if (_changedProperties.has("selected")) {
            this.classList.toggle(`md-icon-button--selected`, Boolean(this.selected));
        }

        if (_changedProperties.has("disabled")) {
            this.classList.toggle(`md-icon-button--disabled`, Boolean(this.disabled));
        }

        if (_changedProperties.has("rippleOptions")) {
            this.rippleController.reinit(this.rippleOptions);
        }
    }

    _handleIconButtonClick(event) {
        if (this.variant === "toggle" && this.selectOnToggle) {
            this.selected = !this.selected;

            this.emit("onIconButtonSelection", { event, element: this });
        }

        this.emit("onIconButtonClick", { event, element: this });
    }
}

customElements.define("md-icon-button", MdIconButton);

export { MdIconButton };
