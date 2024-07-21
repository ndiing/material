import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";
/**
 * A custom image component that supports various properties and styles.
 * @element md-image
 * @extends MDComponent
 * @fires MDImageComponent#onImageNativeLoad - Fired when the image successfully loads.
 * @fires MDImageComponent#onImageNativeError - Fired when there is an error loading the image.
 */
class MDImageComponent extends MDComponent {
    /**
     * Properties for the md-image component.
     * @property {String} src - The source URL of the image.
     * @property {String} alt - The alternative text for the image.
     * @property {String} loading - The loading attribute for the image (e.g., "lazy" or "eager").
     * @property {String} ratio - The aspect ratio of the image (e.g., "16/9").
     * @property {String} variant - The variant of the image (e.g., "rounded").
     */
    static properties = {
        src: { type: String },
        alt: { type: String },
        loading: { type: String },
        ratio: { type: String },
        variant: { type: String },
    };
    variants = ["rounded"];
    /**
     * Computes the styles for the image based on its properties.
     * @returns {Object} The computed styles.
     */
    get imageNativeStyle() {
        let style = {};
        if (this.ratio) {
            style["aspect-ratio"] = this.ratio;
        }

        if (this.variant && this.variant.includes("rounded")) {
            if (this.ratio) {
                style["border-radius"] = `50% / calc(50% * ${this.ratio})`;
            } else {
                style["border-radius"] = "50%";
            }
        }
        return style;
    }
    imageNative = createRef();
    /**
     * Constructs an instance of MDImageComponent.
     * Sets default values for loading and alt properties.
     */
    constructor() {
        super();
        this.loading = "lazy";
        this.alt = "alt";
    }

    /**
     * Renders the image component.
     * @private
     * @returns {TemplateResult} - The rendered template.
     */
    render() {
        /* prettier-ignore */
        return html`
            <img 
                class="md-image__native"
                style="${styleMap(this.imageNativeStyle)}"
                .src="${ifDefined(this.src)}"
                .alt="${ifDefined(this.alt)}"
                .loading="${ifDefined(this.loading)}"
                ${ref(this.imageNative)}

                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `;
    }
    /**
     * Invoked when the component is added to the document's DOM.
     * Adds the base class for the image component.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    /**
     * Called when properties change.
     * Updates the image's classes and attributes based on the changed properties.
     * @private
     * @param {Map} changedProperties - The properties that changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            const variants = (this.variant ?? "").split(" ").filter(Boolean);
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-image--${variant}`, variants.includes(variant));
            });
        }
    }
    /**
     * Handles the load event for the image.
     * Emits the onImageNativeLoad event.
     * @private
     * @param {Event} event - The load event.
     */
    handleImageNativeLoad(event) {
        this.emit("onImageNativeLoad", event);
    }

    /**
     * Handles the error event for the image.
     * Emits the onImageNativeError event.
     * @private
     * @param {Event} event - The error event.
     */
    handleImageNativeError(event) {
        this.imageNative.value.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.emit("onImageNativeError", event);
    }
}
customElements.define("md-image", MDImageComponent);
export { MDImageComponent };
