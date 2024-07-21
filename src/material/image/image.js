import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-image
 * @fires MDImageComponent#onImageNativeLoad - {{desc}}
 * @fires MDImageComponent#onImageNativeError - {{desc}}
 */
class MDImageComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} src - {{desc}}
     * @property {String} alt - {{desc}}
     * @property {String} loading - {{desc}}
     * @property {String} ratio - {{desc}}
     * @property {String} variant - {{desc}}
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
     * {{desc}}
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
     * {{desc}}
     */
    constructor() {
        super();
        this.loading = "lazy";
        this.alt = "alt";
    }

    /**
     * {{desc}}
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
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    /**
     * {{desc}}
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
     * {{desc}}
     */
    handleImageNativeLoad(event) {
        this.emit("onImageNativeLoad", event);
    }

    /**
     * {{desc}}
     */
    handleImageNativeError(event) {
        this.imageNative.value.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.emit("onImageNativeError", event);
    }
}
customElements.define("md-image", MDImageComponent);
export { MDImageComponent };
