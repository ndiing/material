import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-image
 * @fires MDImageComponent#onImageNativeLoad - {{desc}}
 * @fires MDImageComponent#onImageNativeError - {{desc}}
 */
class MDImageComponent extends MDComponent {
    /**
     * @property {String} src - {{desc}}
     * @property {String} alt - {{desc}}
     * @property {String} srcset - {{desc}}
     * @property {String} sizes - {{desc}}
     * @property {String} crossorigin - {{desc}}
     * @property {String} usemap - {{desc}}
     * @property {Boolean} ismap - {{desc}}
     * @property {Number} width - {{desc}}
     * @property {Number} height - {{desc}}
     * @property {String} referrerpolicy - {{desc}}
     * @property {String} decoding - {{desc}}
     * @property {String} loading - {{desc}}
     * @property {String} title - {{desc}}
     * @property {String} longdesc - {{desc}}
     * @property {String} fetchpriority - {{desc}}
     * @property {String} ratio - {{desc}}
     * @property {String} variant - {{desc}}
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
