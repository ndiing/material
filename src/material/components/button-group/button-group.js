import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderButton, renderIconButton } from "../../core/template.js";
import { choose } from "lit/directives/choose.js";

class MdButtonGroup extends MdElement {
    static properties = {
        buttons: { type: Array },
        variant: { type: String },
        size: { type: String },
        shape: { type: String },
        color: { type: String },
        vertical: { type: Boolean },
        singleSelect: { type: Boolean },
        multiSelect: { type: Boolean },
    };

    variants = ["standard", "connected"];
    sizes = ["extra-small", "small", "medium", "large", "extra-large"];
    shapes = ["round", "square"];
    colors = ["elevated", "filled", "tonal", "outlined", "text"];

    constructor() {
        super();

        this.buttons = [];
        this.variant = "standard";
        this.size = "small";
        this.shape = "round";
        this.color = "tonal";
        this.vertical = false;

        this.selectedButtons = new Set();

        this._handleButtonGroupItemClick = this._handleButtonGroupItemClick.bind(this);
    }

    /* prettier-ignore */
    renderComponent(component,properties){
        const defaultProperties = {
            variant: 'toggle',
            size: this.size,
            shape: this.shape,
            color: this.color,
            selected:this.selectedButtons.has(properties.id),
            selectOnToggle:false
        }
        return choose(component,[
            ['icon-button', () => renderIconButton({ classMap: { "md-button-group__icon-button": true, ...properties.classMap }, ...defaultProperties,...properties, onIconButtonClick:this._handleButtonGroupItemClick })],
            ['button', () => renderButton({ classMap: { "md-button-group__button": true, ...properties.classMap }, ...defaultProperties,...properties, onButtonClick:this._handleButtonGroupItemClick })],
        ],() => nothing)
    }

    /* prettier-ignore */
    render(){
        return this.buttons.map(({component,...properties}) => this.renderComponent(component,properties))
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-button-group");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-button-group");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-button-group--${variant}`, this.variant === variant);
            });
        }
        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-button-group--${size}`, this.size === size);
            });
        }
        if (_changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-button-group--${shape}`, this.shape === shape);
            });
        }
        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-button-group--${color}`, this.color === color);
            });
        }
        if (_changedProperties.has("vertical")) {
            this.classList.toggle(`md-button-group--vertical`, Boolean(this.vertical));
            this.classList.toggle(`md-button-group--horizontal`, !Boolean(this.vertical));
        }
    }

    _handleButtonGroupItemClick(event) {
        const originalEvent = event.detail.event;
        const data = originalEvent.currentTarget.data;

        if (this.multiSelect && originalEvent.ctrlKey) {
            if (this.selectedButtons.has(data.id)) {
                this.selectedButtons.delete(data.id);
            } else {
                this.selectedButtons.add(data.id);
            }

            this.emit("onButtonGroupItemSelection", { event, element: this });
        } else if (this.singleSelect) {
            this.selectedButtons.clear();
            this.selectedButtons.add(data.id);

            this.emit("onButtonGroupItemSelection", { event, element: this });
        }

        this.requestUpdate();

        this.emit("onButtonGroupItemClick", { event, element: this });
    }
}

customElements.define("md-button-group", MdButtonGroup);

export { MdButtonGroup };
