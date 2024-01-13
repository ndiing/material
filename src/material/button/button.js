import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDButton.
 * @extends MDComponent
 * @example
 * // Example usage:
 * // <md-button appearance="elevated" label="Label"></md-button>
 */
class MDButtonComponent extends MDComponent {
    /**
     * Properties for the MDButtonComponent.
     * @returns {Object} Property configuration.
     * @property {String} appearance - The appearance style of the button ("elevated", "filled", "filled-tonal", "outlined").
     * @property {String} type - The type of the native button element ("button" by default).
     * @property {String} icon - The icon for the button.
     * @property {String} label - The label for the button.
     * @property {Boolean} activated - A boolean reflecting the activated state of the button.
     */
    static get properties() {
        return {
            appearance: { type: String },
            type: { type: String },
            icon: { type: String },
            label: { type: String },
            activated: { type: Boolean, reflect:true },
        };
    }

    /**
     * Constructor for MDButtonComponent.
     */
    constructor() {
        super();
        this.type = "button";
    }

    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     * Renders the MDButtonComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            <button class="md-button__native" .type="${this.type}"></button>
            ${this.icon?html`<div class="md-button__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
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

        this.classList.add("md-button");

        this.mdState = new MDState(this, {
            trigger: this.buttonNative,
            inverted: this.appearance === "filled",
        });
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-button");

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
            ["elevated", "filled", "filled-tonal", "outlined"].forEach((appearance) => {
                this.classList.remove("md-button--" + appearance);
            });
            if (this.appearance) this.classList.add("md-button--" + this.appearance);
        }
    }
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
