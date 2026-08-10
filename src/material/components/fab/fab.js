import { html, nothing } from "lit";
import { MdElement } from "../../base/element.js";
import { renderIcon } from "../../core/template.js";
import { RippleController } from "../../controller/ripple.js";

class MdFab extends MdElement {
    static properties = {
        size: { type: String },
        color: { type: String },
        icon: { type: String },
        label: { type: String },
        rippleController: { type: Object },
        unelevated: { type: Boolean },
    };

    sizes = ["small", "medium", "large"];
    colors = ["primary-container", "secondary-container", "tertiary-container", "primary", "secondary", "tertiary"];

    constructor() {
        super();

        this.size = "small";
        this.color = "primary-container";

        this.rippleController = new RippleController(this, {});

        this._handleFabClick = this._handleFabClick.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            ${this.icon?renderIcon({
                classMap:{
                    'md-fab__icon':true,
                },
                icon: this.icon
            }):nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.on("click", this._handleFabClick);

        this.classList.add("md-fab");
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this._handleFabClick);

        this.classList.remove("md-fab");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("size")) {
            this.sizes.forEach((size) => {
                this.classList.toggle(`md-fab--${size}`, this.size === size);
            });
        }
        if (_changedProperties.has("color")) {
            this.colors.forEach((color) => {
                this.classList.toggle(`md-fab--${color}`, this.color === color);
            });
        }
        if (_changedProperties.has("unelevated")) {
            this.classList.toggle(`md-fab--unelevated`, Boolean(this.unelevated));
        }
        if (_changedProperties.has("rippleController")) {
            this.rippleController.reinit(this.rippleController);
        }
    }

    _handleFabClick(event) {
        this.emit("onFabClick", { event, element: this });
    }
}

customElements.define("md-fab", MdFab);

export { MdFab };
