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
     * @property {boolean} filled - Determines whether the button has a filled appearance.
     * @property {boolean} tonal - Determines whether the button has a tonal appearance.
     * @property {boolean} outlined - Determines whether the button has an outlined appearance.
     */
    static get properties() {
        return {
            toggle: { type: Boolean },
            activated: { type: Boolean, reflect: true },
            filled: { type: Boolean },
            tonal: { type: Boolean },
            outlined: { type: Boolean },
        };
    }

    /**
     * Checks if the button has a container appearance.
     * @private
     * @returns {boolean} True if the button has a container appearance, otherwise false.
     */
    get hasContainer() {
        return this.filled || this.tonal || this.outlined;
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
            diameter: this.hasContainer ? (40 / 40) * 100 : (40 / 24) * 100,
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
        if (changedProperties.has("filled")) {
            this.filled ? this.classList.add("md-icon-button--filled") : this.classList.remove("md-icon-button--filled");
        }
        if (changedProperties.has("tonal")) {
            this.tonal ? this.classList.add("md-icon-button--tonal") : this.classList.remove("md-icon-button--tonal");
        }
        if (changedProperties.has("outlined")) {
            this.outlined ? this.classList.add("md-icon-button--outlined") : this.classList.remove("md-icon-button--outlined");
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
