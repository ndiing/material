import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * {{description}}
 * @element md-icon-button
 * @extends MDComponent
 * @fires MDIconButtonComponent#onIconButtonClick - {{description}}
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} variant - {{description}}
     * @property {String} icon - {{description}}
     * @property {Boolean} selected - {{description}}
     * @property {Boolean} disabled - {{description}}
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["filled", "tonal", "outlined", "toggle"];

    /**
     * {{description}}
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
     * @private
     */
    render() {
        /* prettier-ignore */
        return this.icon ? html`<div class="md-icon md-icon-button__icon">${this.icon}</div>` : nothing;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.on("click", this.handleIconButtonClick);
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this.handleIconButtonClick);
    }

    /**
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-icon-button--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
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
     * @private
     */
    handleIconButtonClick(event) {
        if (this.variant && this.variant.includes("toggle")) {
            this.selected = !this.selected;
        }

        this.emit("onIconButtonClick", event);
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
