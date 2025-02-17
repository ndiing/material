import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { Ripple } from "../ripple/ripple";
import { ifDefined } from "lit/directives/if-defined.js";
/**
 * @extends MdComponent
 * @element md-icon-button
 */
class MdIconButtonComponent extends MdComponent {
    /**
     * @property {String} [icon]
     * @property {filled|filled-tonal|outlined} [variant]
     * @property {String} [type]
     * @property {Boolean} [toggle]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     */
    static properties = {
        icon: { type: String },
        variant: { type: String },
        type: { type: String },
        toggle: { type: Boolean, reflect: true },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    variants = ["filled", "filled-tonal", "outlined"];
    get icons() {
        if (typeof this.icon === "string") {
            if (/^\[/.test(this.icon)) {
                return JSON.parse(this.icon);
            }
            return [this.icon];
        }
        return this.icon;
    }

    constructor() {
        super();
        this.type = "button";
    }

    render() {
        return html`
            <button
                class="md-icon-button__native"
                .type="${ifDefined(this.type)}"
            >
                icon-button
            </button>
            <md-icon class="md-icon-button__icon">${this.toggle ? this.icons[~~this.selected] : this.icons[0]}</md-icon>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        this.handleIconButtonClick = this.handleIconButtonClick.bind(this);
        this.addEventListener("click", this.handleIconButtonClick);
        await this.updateComplete;
        this.ripple = new Ripple(this, {
            trigger: ".md-icon-button__native",
            unbounded: true,
            radius: 40,
            ...this.rippleOptions,
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleIconButtonClick);

        if (this.ripple) this.ripple.destroy();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-icon-button--${variant}`, variant === this.variant);
            });
        }
    }

    handleIconButtonClick(event) {
        if (this.toggle) {
            this.selected = !this.selected;
        }
        /**
         * @event onIconButtonClick
         * @property {Object} event
         */
        this.emit("onIconButtonClick", { event });
    }
}

customElements.define("md-icon-button", MdIconButtonComponent);

export { MdIconButtonComponent };
