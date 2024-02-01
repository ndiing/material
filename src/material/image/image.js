import { html } from "lit";
import { MDComponent } from "../base/component";

/**
 * `MDImageComponent` is a custom web component for displaying images.
 * @extends MDComponent
 */
class MDImageComponent extends MDComponent {
    /**
     * Properties for MDImageComponent.
     * @static
     * @type {object}
     * @property {String} src - The source URL of the image.
     * @property {String} alt - The alternative text for the image.
     * @property {String} ui - The UI style for the image.
     */
    static properties = {
        src: { type: String },
        alt: { type: String },
        ui: { type: String },
    };

    /**
     * Constructs an instance of MDImageComponent.
     */
    constructor() {
        super();

        // default
    }

    /**
     * Callback triggered when the element is connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }

    /**
     * Callback triggered when the element is disconnected from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-image");
    }

    /**
     * Callback triggered after the element's first update.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    /**
     * Callback triggered after the element has been updated.
     * @param {Map} changedProperties - A Map of properties that have changed.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove(`md-image--shape`);

            if (this.ui) {
                this.classList.add(`md-image--${this.ui}`);
            }
        }
    }

    /**
     * Renders the content of the MDImageComponent.
     * @returns {TemplateResult} The lit-html template result.
     */
    render() {
        // prettier-ignore
        return html`
            <img 
                .src="${this.src}" 
                .alt="${this.alt}" 
                class="md-image__native"
                @load="${this.handleImageLoad}"
                @error="${this.handleImageError}"
            >
        `;
    }

    /**
     * Handles the image load event.
     * @param {Event} event - The load event.
     * @fires MDImageComponent#onImageLoad
     */
    handleImageLoad(event) {
        this.emit("onImageLoad", { event });
    }

    /**
     * Handles the image error event.
     * @param {Event} event - The error event.
     * @fires MDImageComponent#onImageError
     */
    handleImageError(event) {
        this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this.emit("onImageError", { event });
    }
}

/**
 * Define the custom element "md-image" with MDImageComponent.
 */
customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
