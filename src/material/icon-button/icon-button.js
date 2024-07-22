import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-icon-button
 * @fires MDIconButtonComponent#onIconButtonToggleClick - {{desc}}
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} tooltip - {{desc}}
     * @property {String} variant - {{desc}}
     * @property {String} icon - {{desc}}
     * @property {Boolean} selected - {{desc}}
     * @property {Boolean} disabled - {{desc}}
     * @property {String} name - {{desc}}
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
        name: { type: String, reflect: true },
    };
    variants = ["filled", "tonal", "outlined", "toggle"];

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.ripple = new MDRippleController(this, {
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    /**
     * {{desc}}
     */
    render() {
        /* prettier-ignore */
        return html`<md-icon class="md-icon-button__icon" .icon="${this.icon}"></md-icon>`
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        this.on("click", this.handleIconButtonToggleClick);
    }

    /**
     * {{desc}}
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.off("click", this.handleIconButtonToggleClick);
    }

    /**
     * {{desc}}
     * @param {Any} changedProperties - {{desc}}
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-icon-button--${variant}`, variants.includes(variant));
            });
        }
        if (changedProperties.has("disabled")) {
            if (this.disabled) {
                this.setAttribute("aria-disabled", "true");
                this.setAttribute("tabindex", "-1");
            } else {
                this.removeAttribute("aria-disabled");
                this.removeAttribute("tabindex");
            }
        }
    }

    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleIconButtonToggleClick(event) {
        if (this.variant && this.variant.includes("toggle")) {
            this.selected = !this.selected;
            this.emit("onIconButtonToggleClick", event);
        }
    }
}
customElements.define("md-icon-button", MDIconButtonComponent);
export { MDIconButtonComponent };
