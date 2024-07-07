import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Icon button component for Material Design.
 * @extends MDComponent
 * @tagname md-icon-button
 * @fires MDIconButtonComponent#onIconButtonClick - Event fired when the icon button is clicked.
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * @property {String} variant - The variant style of the icon button (e.g., filled, tonal, outlined, toggle).
     * @property {String} icon - The icon to display inside the icon button.
     * @property {Boolean} selected - Indicates if the icon button is selected.
     * @property {Boolean} disabled - Indicates if the icon button is disabled.
     */
    static properties = {
        variant: { type: String },
        icon: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["filled", "tonal", "outlined", "toggle"];

    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            size: 40,
            centered: true,
            fadeOut: true,
        });
    }

    render() {
        /* prettier-ignore */
        return this.icon ? html`<div class="md-icon md-icon-button__icon">${this.icon}</div>` : nothing;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon-button");

        this.on("click", this.handleIconButtonClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("click", this.handleIconButtonClick);
    }

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

    handleIconButtonClick(event) {
        if (this.variant && this.variant.includes("toggle")) {
            this.selected = !this.selected;
        }

        this.emit("onIconButtonClick", event);
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
