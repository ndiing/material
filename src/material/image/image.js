import { LitElement, html } from "lit";
import { MdStateController } from "../state/state";

class MdImageComponent extends LitElement {
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

    createRenderRoot() {
        return this;
    }

    render() {
        /*prettier-ignore*/() {
                return html`
            <img 
                .src="${this.src}" 
                .alt="${this.alt}" 
                @error="${this.onImageNativeError}"
                @load="${this.onImageNativeLoad}"
                class="md-image__native">
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-image");
    }

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

export { MdImageComponent };
