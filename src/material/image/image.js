import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * Represents an image component.
 * @extends MDComponent
 * @tagname md-image
 * @fires MDImageComponent#onImageNativeLoad - Fires when the native image element successfully loads an image.
 * @fires MDImageComponent#onImageNativeError - Fires when the native image element encounters an error while loading an image.
 */
class MDImageComponent extends MDComponent {
    /**
     * @property {String} src - The URL of the image.
     * @property {String} alt - The alternative text description of the image.
     * @property {String} srcset - A list of one or more strings separated by commas indicating a set of possible images to use for different viewport sizes.
     * @property {String} sizes - The sizes attribute specifies the sizes of the images for different viewport widths.
     * @property {String} crossorigin - The CORS settings for the image element.
     * @property {String} usemap - The name of the image map associated with the image element.
     * @property {Boolean} ismap - Indicates that the image is a server-side image map.
     * @property {Number} width - The displayed width of the image element.
     * @property {Number} height - The displayed height of the image element.
     * @property {String} referrerpolicy - The referrer policy for the image element.
     * @property {String} decoding - The decoding hint for the image element.
     * @property {String} loading - The lazy-loading strategy of the image element.
     * @property {String} title - The title of the image.
     * @property {String} longdesc - The URL to a detailed description of the image.
     * @property {String} fetchpriority - The image loading priority.
     * @property {String} ratio - The aspect ratio of the image container.
     * @property {String} variant - The variant styles for the image. Currently supports "rounded".
     */
    static properties = {
        src: { type: String },
        alt: { type: String },
        srcset: { type: String },
        sizes: { type: String },
        crossorigin: { type: String },
        usemap: { type: String },
        ismap: { type: Boolean },
        width: { type: Number },
        height: { type: Number },
        referrerpolicy: { type: String },
        decoding: { type: String },
        loading: { type: String },
        title: { type: String },
        longdesc: { type: String },
        fetchpriority: { type: String },

        ratio: { type: String },
        variant: { type: String },
    };

    variants = ["rounded"];

    get nativeStyle() {
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

    constructor() {
        super();

        // Default loading strategy and alt text for accessibility.
        this.loading = "lazy";
        this.alt = "alt";
    }

    render() {
        /* prettier-ignore */
        return html`
            <img 
                class="md-image__native"
                style="${styleMap(this.nativeStyle)}"
                .src="${ifDefined(this.src)}"
                .alt="${ifDefined(this.alt)}"
                .srcset="${ifDefined(this.srcset)}"
                .sizes="${ifDefined(this.sizes)}"
                .crossorigin="${ifDefined(this.crossorigin)}"
                .usemap="${ifDefined(this.usemap)}"
                .ismap="${ifDefined(this.ismap)}"
                .width="${ifDefined(this.width)}"
                .height="${ifDefined(this.height)}"
                .referrerpolicy="${ifDefined(this.referrerpolicy)}"
                .decoding="${ifDefined(this.decoding)}"
                .loading="${ifDefined(this.loading)}"
                .title="${ifDefined(this.title)}"
                .longdesc="${ifDefined(this.longdesc)}"
                .fetchpriority="${ifDefined(this.fetchpriority)}"
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        // Add specific CSS class for styling the image component.
        this.classList.add("md-image");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            // Toggle variant classes based on the variant property.
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-image--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    handleImageNativeLoad(event) {
        // Emit custom event when the native image element successfully loads an image.
        this.emit("onImageNativeLoad", event);
    }

    handleImageNativeError(event) {
        const native = event.currentTarget;

        // Handle image load error by replacing with a placeholder image.
        native.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        // Emit custom event for image load error.
        this.emit("onImageNativeError", event);
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
