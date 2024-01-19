import { LitElement, html } from "lit";
import { MdStateController } from "../state/state";

/**
 * Custom element representing an image with additional features.
 *
 * @fires MdImageComponent#onImageNativeError
 * @fires MdImageComponent#onImageNativeLoad
 */
class MdImageComponent extends LitElement {
    /**
     * Defines the properties of the MdImageComponent.
     *
     * @property {String} src - The source URL of the image.
     * @property {String} alt - The alternative text for the image.
     * @property {String} ratio - The aspect ratio of the image (default is '1/1').
     * @property {Boolean} shape - Indicates whether the image should have a circular shape.
     */
    static get properties() {
        return {
            src: { type: String },
            alt: { type: String },
            ratio: { type: String },
            shape: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.ratio = "1/1";
    }

    /**
     * Overrides the default rendering behavior to create a render root.
     *
     * @returns {this}
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Renders the image element based on the provided properties.
     *
     * @returns {TemplateResult}
     */
    render() {
        // prettier-ignore
        return html`
            <img 
                .src="${this.src}" 
                .alt="${this.alt}" 
                @error="${this.onImageNativeError}"
                @load="${this.onImageNativeLoad}"
                class="md-image__native">
        `;
    }

    /**
     * Called when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    /**
     * Called when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-image");
    }

    /**
     * Called after the element's DOM has been updated.
     *
     * @param {Map} _changedProperties - Map of properties that have changed.
     */
    updated(_changedProperties) {
        if (_changedProperties.has("ratio")) {
            if (this.ratio) {
                this.style.setProperty("aspect-ratio", this.ratio);
            } else {
                this.style.removeProperty("aspect-ratio");
            }
        }
        if (_changedProperties.has("shape")) {
            if (this.ratio) {
                this.style.setProperty("border-radius", `100% / ${eval(this.ratio) * 100}%`);
            } else {
                this.style.removeProperty("border-radius");
            }
        }
    }

    /**
     * Handles the 'error' event of the native image element.
     *
     * @param {Event} event - The error event.
     * @fires MdImageComponent#onImageNativeError
     */
    onImageNativeError(event) {
        this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.dispatchEvent(
            new CustomEvent("onImageNativeError", {
                bubbles: true,
                cancelable: true,
                detail: { event },
            })
        );
    }

    /**
     * Handles the 'load' event of the native image element.
     *
     * @param {Event} event - The load event.
     * @fires MdImageComponent#onImageNativeLoad
     */
    onImageNativeLoad(event) {
        this.dispatchEvent(
            new CustomEvent("onImageNativeLoad", {
                bubbles: true,
                cancelable: true,
                detail: { event },
            })
        );
    }
}

customElements.define("md-image", MdImageComponent);
/**
 * Exports MdImageComponent for external use.
 *
 * @exports {MdImageComponent}
 */
export { MdImageComponent };
