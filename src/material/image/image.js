import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDComponent } from "../base/component";

/**
 * MDImageComponent represents an image component.
 *
 * @extends MDComponent
 */
class MDImageComponent extends MDComponent {
    /**
     * Properties of the component.
     *
     * @type {Object}
     * @property {String} src - The source URL of the image.
     * @property {String} alt - The alternative text for the image.
     * @property {String} aspectRatio - The aspect ratio of the image (e.g., "1/1").
     * @property {String} ui - The UI styles for the image.
     */
    static properties = {
        src: { type: String },
        alt: { type: String },
        aspectRatio: { type: String },
        ui: { type: String },
    };

    /**
     * Constructor for MDImageComponent.
     */
    constructor() {
        super();

        // default
        this.aspectRatio = "1/1";
    }

    /**
     * Lifecycle callback when the element is added to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }

    /**
     * Lifecycle callback when the element is removed from the DOM.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-image");
    }

    /**
     * Lifecycle callback when the element is first updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Lifecycle callback when the element is updated.
     *
     * @param {Map} changedProperties - A Map of changed properties.
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["shape"].forEach((ui) => {
                this.classList.remove(`md-image--${ui}`);
            });
            this.style.removeProperty("border-radius");
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add(`md-image--${ui}`);
                });
            }
        }

        if (changedProperties.has("aspectRatio")) {
            if (this.aspectRatio) {
                let [x, y] = this.aspectRatio.split("/").map((string) => string.trim());
                x = parseInt(x);
                y = parseInt(y);

                this.style.setProperty("aspect-ratio", `${x} / ${y}`);

                if (this.ui === "shape") {
                    this.style.setProperty("border-radius", `100% / ${(x / y) * 100}%`);
                }
            } else {
                this.style.removeProperty("aspect-ratio");
            }
        }
    }

    /**
     * Renders the image component.
     *
     * @returns {TemplateResult} - The HTML template result.
     */
    render() {
        // prettier-ignore
        return html`
            <img 
                src="${ifDefined(this.src)}" 
                alt="${ifDefined(this.alt)}" 
                class="md-image__native"
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `;
    }

    /**
     * Event handler for the 'load' event of the native image.
     *
     * @param {Event} event - The 'load' event.
     */
    handleImageNativeLoad(event) {
        this.emit("onImageNativeLoad", { event });
    }

    /**
     * Event handler for the 'error' event of the native image.
     *
     * @param {Event} event - The 'error' event.
     */
    handleImageNativeError(event) {
        this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.emit("onImageNativeError", { event });
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
