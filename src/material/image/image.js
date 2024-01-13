import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../foundation/component";
import { MDState } from "../foundation/state";

/**
 * Custom Lit web component representing an MDImage.
 * @extends MDComponent
 */
class MDImageComponent extends MDComponent {
    /**
     * Properties for the MDImageComponent.
     * @returns {Object} Property configuration.
     * @property {String} src - The source URL of the image.
     * @property {String} alt - The alternative text for the image.
     * @property {String} ratio - The aspect ratio of the image. For example, "16/9".
     * @property {Boolean} shape - Indicates whether the image should be displayed in a circular shape.
     */
    static get properties() {
        return {
            src: { type: String },
            alt: { type: String },
            ratio: { type: String },
            shape: { type: Boolean },
        };
    }

    /**
     * Constructor for MDImageComponent.
     */
    constructor() {
        super();
        this.ratio='1/1'
    }

    /**
     * Renders the MDImageComponent template using Lit.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        // prettier-ignore
        return html`
            <img 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}" 
                class="md-image__native"
            >
        `;
    }

    /**
     * Lifecycle callback called when the element is added to the DOM.
     * @async
     * @returns {Promise<void>} A Promise that resolves when rendering is complete.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }

    /**
     * Lifecycle callback called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-image");
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
        if (_changedProperties.has("ratio")) {
            if (this.ratio) this.style.setProperty("aspect-ratio", this.ratio);
            else this.style.removeProperty("aspect-ratio");
        }
        if (_changedProperties.has("shape")) {
            if (this.shape) {
                let radius = eval(this.ratio) * 100;
                this.style.setProperty("border-radius", `100% / ${radius}%`);
            } else this.style.removeProperty("border-radius");
        }
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
