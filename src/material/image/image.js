import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * MDImageComponent represents an image component that extends MDComponent.
 * This component supports various properties for image attributes and styling.
 * @extends MDComponent
 * @tagname md-image
 * @fires MDImageComponent#onImageNativeLoad - Fires when the native image has loaded successfully.
 * @fires MDImageComponent#onImageNativeError - Fires when there is an error loading the native image.
 */
class MDImageComponent extends MDComponent {
    /**
     * @property {String} src - The URL of the image.
     * @property {String} alt - The alternate text for the image.
     * @property {String} srcset - The image sourceset attribute.
     * @property {String} sizes - The image sizes attribute.
     * @property {String} crossorigin - The CORS attribute for the image.
     * @property {String} usemap - The usemap attribute for image maps.
     * @property {Boolean} ismap - Indicates if the image is part of an image map.
     * @property {Number} width - The width of the image.
     * @property {Number} height - The height of the image.
     * @property {String} referrerpolicy - The referrer policy for the image.
     * @property {String} decoding - The decoding hint for the image.
     * @property {String} loading - The lazy-loading strategy for the image ('lazy', 'eager', or 'auto').
     * @property {String} title - The title attribute of the image.
     * @property {String} longdesc - The long description URL for the image.
     * @property {String} fetchpriority - The priority hint for fetching the image ('auto', 'high', 'low', or 'none').
     * @property {String} ratio - The aspect ratio of the image container (e.g., '16/9', '1.5', etc.).
     * @property {String} variant - The variant style for the image (e.g., 'rounded').
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

        this.classList.add("md-image");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-image--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    handleImageNativeLoad(event) {
        this.emit("onImageNativeLoad", event);
    }

    handleImageNativeError(event) {
        const native = event.currentTarget;

        native.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this.emit("onImageNativeError", event);
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
