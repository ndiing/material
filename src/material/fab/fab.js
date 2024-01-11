import { html, nothing } from "lit";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDFab.
 * @extends MDComponent
 */
class MDFabComponent extends MDComponent {
    /**
     * Properties for the MDFabComponent.
     * @returns {Object} Property configuration.
     * @property {String} appearance - The appearance style of the fab ("extended").
     * @property {String} size - The size of the fab ("small" or "large").
     * @property {String} type - The type of the native button element ("button" by default).
     * @property {String} icon - The icon for the fab.
     * @property {String} label - The label for the fab.
     */
    static get properties() {
        return {
            appearance: { type: String },
            size: { type: String },
            type: { type: String },
            icon: { type: String },
            label: { type: String },
        };
    }

    /**
     * Constructor for MDFabComponent.
     */
    constructor() {
        super();
        this.type = "button";
    }

    get fabNative() {
        return this.querySelector(".md-fab__native");
    }

    /**
     * Renders the MDFabComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            <button class="md-fab__native" .type="${this.type}"></button>
            ${this.icon?html`<div class="md-fab__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-fab__label">${this.label}</div>`:nothing}
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

        this.classList.add("md-fab");

        this.mdState = new MDState(this, {
            trigger: this.fabNative,
        });
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-fab");

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
        if (_changedProperties.has("size")) {
            ["small", "large"].forEach((size) => {
                this.classList.remove("md-fab--" + size);
            });
            if (this.size) this.classList.add("md-fab--" + this.size);
        }
        if (_changedProperties.has("appearance")) {
            ["extended"].forEach((appearance) => {
                this.classList.remove("md-fab--" + appearance);
            });
            if (this.appearance) this.classList.add("md-fab--" + this.appearance);
        }
    }
}

customElements.define("md-fab", MDFabComponent);

export { MDFabComponent };
