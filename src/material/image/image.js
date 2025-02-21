import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
/**
 * @extends MdComponent
 * @element md-image
 */
class MDImageComponent extends MdComponent {
    /**
     * @property {String} [src]
     * @property {String} [alt]
     * @property {String} [ratio]
     * @property {Boolean} [circular]
     */
    static properties = {
        src: { type: String },
        alt: { type: String },
        ratio: { type: String },
        circular: { type: Boolean },
    };

    constructor() {
        super();
    }

    get styleImageNative() {
        const style = {};

        if (this.ratio) {
            style["aspect-ratio"] = this.ratio;
        }

        if (this.circular) {
            if (this.ratio) {
                const [x, y] = this.ratio.split("/").map(Number);
                style["border-radius"] = `50% / ${(50 * x) / y}%`;
            } else {
                style["border-radius"] = "50%";
            }
        }
        return style;
    }
    render() {
        /* prettier-ignore */
        return html`
            <img
                .src="${ifDefined(this.src)}"
                .alt="${ifDefined(this.alt)}"
                class="md-image__native"
                style="${styleMap(this.styleImageNative)}"
            />
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
