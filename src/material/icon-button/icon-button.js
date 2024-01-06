import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDRipple } from "../foundation/ripple";

/**
 * Custom icon button component extending MDComponent.
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Properties for the MDIconButtonComponent.
     * @property {boolean} toggle - Indicates whether the button behaves as a toggle.
     * @property {boolean} activated - Indicates whether the button is activated.
     * @property {string} appearance - The appearance of the button. Possible values: "filled", "tonal", "outlined".
     */
    static get properties() {
        return {
            toggle: { type: Boolean },
            activated: { type: Boolean, reflect: true },
            appearance: { type: String },
        };
    }

    constructor() {
        super();
    }

    /**
     * Renders the MDIconButtonComponent.
     * @private
     * @returns {TemplateResult} The rendered template result.
     */
    render() {
        // prettier-ignore
        return html``
    }

    /**
     * Lifecycle method called when the element is attached to the DOM.
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-icon-button");
        new MDRipple(this, {
            bounded: false,
            diameter: this.appearance ? (40 / 40) * 100 : (40 / 24) * 100,
            centered: true,
            fadeout: true,
        });
        this.addEventListener("click", this.handleClick);
    }

    /**
     * Lifecycle method called when the element is detached from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleClick);
    }

    /**
     * Lifecycle method called when the element's properties have been updated for the first time.
     * @param {Map} changedProperties - The properties that have changed.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle method called when the element's properties have been updated.
     * @param {Map} changedProperties - The properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("toggle")) {
            this.toggle ? this.classList.add("md-icon-button--toggle") : this.classList.remove("md-icon-button--toggle");
        }
        if (changedProperties.has("activated")) {
            this.activated ? this.classList.add("md-icon-button--activated") : this.classList.remove("md-icon-button--activated");
        }
        if (changedProperties.has("appearance")) {
            const validAppearances = ["filled", "tonal", "outlined"];
            const { appearance } = this;
            if (validAppearances.includes(appearance)) {
                validAppearances.forEach((validAppearance) => {
                    this.classList.remove(`md-icon-button--${validAppearance}`);
                });
                this.classList.add(`md-icon-button--${appearance}`);
            }
        }
    }

    /**
     * Handles the click event on the icon button.
     * @private
     * @param {Event} event - The click event.
     */
    handleClick(event) {
        if (this.toggle) this.activated = !this.activated;
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
