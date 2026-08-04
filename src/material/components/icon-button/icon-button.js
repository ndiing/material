import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { RippleController } from "../../controller/ripple.js";

const converter = (value) => {
    if (!value) return [];
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
};

/**
 * @fires md-icon-button#onIconButtonSelection
 * @fires md-icon-button#onIconButtonClick
 */
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

        this._handleIconButtonClick = this._handleIconButtonClick.bind(this);

        this.rippleOptions = {};
        this.rippleController = new RippleController(this, this.rippleOptions);
    }

    render() {
        const icons = Array.isArray(this.icon) ? this.icon : [this.icon];
        const index = this.selected ? 1 : 0;
        const icon = icons[index] ?? icons[0] ?? "";

        return html` <md-icon class="md-icon-button__native" .icon="${icon}"></md-icon> `;
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
        if (changedProperties.has("width")) {
            this._toggleClassList(this.widths, this.width);
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
        this.classList.toggle(`md-icon-button--${modifier}`, Boolean(this[modifier]));
    }

    _toggleClassList(list, value) {
        list.forEach((item) => {
            this.classList.toggle(`md-icon-button--${item}`, value === item);
        });
    }

    _handleIconButtonClick(event) {
        if (this.variant === "toggle") {
            this.selected = !this.selected;
            
            this.emit("onIconButtonSelection", { event, element: this });
        }

        this.emit("onIconButtonClick", { event, element: this });
    }
}

customElements.define("md-icon-button", MdIconButton);

export { MdIconButton };
