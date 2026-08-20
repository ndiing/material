import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderButton, renderIconButton } from "../../core/template.js";
import { choose } from "lit/directives/choose.js";

/**
 * @class MdButtonGroup
 * @extends MdElement
 *
 * @fires MdButtonGroup#item-select
 * @fires MdButtonGroup#item-select
 * @fires MdButtonGroup#item-click
 */
class MdButtonGroup extends MdElement {
    /**
     * @property {Array} buttons -
     * @property {String} variant - standard,connected
     * @property {String} size - extra-small,small,medium,large,extra-large
     * @property {String} shape - round,square
     * @property {String} color - elevated,filled,tonal,outlined,text
     * @property {Boolean} vertical -
     * @property {Boolean} singleSelect -
     * @property {Boolean} multiSelect -
     */
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

        this._handleItemClick = this._handleItemClick.bind(this);
    }

    /* prettier-ignore */

    renderComponent(component,properties){
        const computedProperties = {
            variant: 'toggle',
            size: this.size,
            shape: this.shape,
            color: this.color,
            selected:this.selectedButtons.has(properties.id),
            selectOnToggle:false
        }
        return choose(component,[
            ['icon-button', () => renderIconButton({ classMap: { "md-button-group__icon-button": true, ...properties.classMap },...properties, click:this._handleItemClick, ...computedProperties })],
            ['button', () => renderButton({ classMap: { "md-button-group__button": true, ...properties.classMap },...properties, click:this._handleItemClick, ...computedProperties })],
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

    willUpdate(_changedProperties) {
        super.willUpdate(_changedProperties);
        if (_changedProperties.has("buttons")) {
            this.selectedButtons.clear();
            this.buttons.forEach((button) => {
                if (button.selected) {
                    this.selectedButtons.add(button.id);
                }
            });
        }
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

    _handleItemClick(event) {
        const data = event.currentTarget.data;

        if (this.multiSelect && originalEvent.ctrlKey) {
            if (this.selectedButtons.has(data.id)) {
                this.selectedButtons.delete(data.id);
            } else {
                this.selectedButtons.add(data.id);
            }

            this.emit("item-select", { event, element: this, data });
        } else if (this.singleSelect) {
            this.selectedButtons.clear();
            this.selectedButtons.add(data.id);

            this.emit("item-select", { event, element: this, data });
        }

        this.requestUpdate();

        this.emit("item-click", { event, element: this });
    }
}

customElements.define("md-button-group", MdButtonGroup);

export { MdButtonGroup };
