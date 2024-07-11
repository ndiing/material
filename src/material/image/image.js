import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{description}}
 * @element md-image
 * @extends MDComponent
 * @fires MDImageComponent#onImageNativeLoad - {{description}}
 * @fires MDImageComponent#onImageNativeError - {{description}}
 */
class MDImageComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} src - {{description}}
     * @property {String} alt - {{description}}
     * @property {String} srcset - {{description}}
     * @property {String} sizes - {{description}}
     * @property {String} crossorigin - {{description}}
     * @property {String} usemap - {{description}}
     * @property {Boolean} ismap - {{description}}
     * @property {Number} width - {{description}}
     * @property {Number} height - {{description}}
     * @property {String} referrerpolicy - {{description}}
     * @property {String} decoding - {{description}}
     * @property {String} loading - {{description}}
     * @property {String} title - {{description}}
     * @property {String} longdesc - {{description}}
     * @property {String} fetchpriority - {{description}}
     * @property {String} ratio - {{description}}
     * @property {String} variant - {{description}}
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

    /**
     * {{description}}
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
     * {{description}}
     */
    constructor() {
        super();
        this.loading = "lazy";
        this.alt = "alt";
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <img 
                class="md-image__native"
                style="${styleMap(this.imageNativeStyle)}"
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
                ${ref(this.imageNative)}
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `;
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    /**
     * @private
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-image--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    /**
     * @private
     */
    handleImageNativeLoad(event) {
        this.emit("onImageNativeLoad", event);
    }

    /**
     * @private
     */
    handleImageNativeError(event) {
        this.imageNative.value.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.emit("onImageNativeError", event);
    }
}
customElements.define("md-image", MDImageComponent);
export { MDImageComponent };
