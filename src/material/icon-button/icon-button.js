import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDIconButton.
 * @extends MDComponent
 * @fires MDIconButtonComponent#onIconButtonNativeClick
 * @example
 * // Example usage:
 * // <md-icon-button appearance="filled" icon="image"></md-icon-button>
 */
class MDIconButtonComponent extends MDComponent {
    /**
     * Properties for the MDIconButtonComponent.
     * @returns {Object} Property configuration.
     * @property {String} appearance - The appearance style of the icon-button ("filled", "filled-tonal", "outlined").
     * @property {String} type - The type of the native button element ("button" by default).
     * @property {String} icon - The icon for the icon-button.
     * @property {Boolean} toggle - A boolean indicating whether the icon-button is toggleable.
     * @property {Boolean} activated - A boolean reflecting the activated state of the icon-button.
     */
    static get properties() {
        return {
            appearance: { type: String },
            type: { type: String },
            icon: { type: String },
            toggle: { type: Boolean },
            activated: { type: Boolean, reflect: true },
        };
    }

    /**
     * Constructor for MDIconButtonComponent.
     */
    constructor() {
        super();
        this.type = "button";
    }

    get iconButtonNative() {
        return this.querySelector(".md-icon-button__native");
    }

    /**
     * Renders the MDIconButtonComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            <button 
                class="md-icon-button__native" 
                .type="${this.type}"
                @click="${this.handleIconButtonNativeClick}"
            ></button>
            ${this.icon?html`<div class="md-icon-button__icon">${this.icon}</div>`:nothing}
        `
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.classList.add("md-icon-button");

        this.mdState = new MDState(this, {
            trigger: this.iconButtonNative,
            inverted: this.appearance === "filled",
            size: this.appearance ? (40 / 40) * 100 : (40 / 24) * 100,
            bounded: false,
            centered: true,
            fadeout: true,
        });
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-icon-button");

        this.mdState.destroy();
    }

    /**
     * Lifecycle callback called after the first render and element is added to the DOM.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    firstUpdated(_changedProperties) {}

    /**
     * Lifecycle callback called when properties are updated.
     * @param {Map} _changedProperties - A map of changed properties.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("appearance")) {
            ["filled", "filled-tonal", "outlined"].forEach((appearance) => {
                this.classList.remove("md-icon-button--" + appearance);
            });
            if (this.appearance) this.classList.add("md-icon-button--" + this.appearance);
        }
        if (_changedProperties.has("toggle")) {
            if (this.toggle) this.classList.add("md-icon-button--toggle");
            else this.classList.remove("md-icon-button--toggle");
        }
    }

    /**
     * Handles the click event on the native button element.
     * Toggles the activated state and emits the 'onIconButtonNativeClick' event.
     * @param {Event} event - The click event.
     * @fires MDIconButtonComponent#onIconButtonNativeClick
     */
    handleIconButtonNativeClick(event) {
        if (this.toggle) this.activated = !this.activated;
        this.emit("onIconButtonNativeClick", { event });
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
