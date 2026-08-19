import { html } from "lit";
import { MdElement } from "../../base/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";

class MdImage extends MdElement {
    static properties = {
        src: { type: String },
        alt: { type: String },
        loading: { type: String },
        shape: { type: String },
        errorSrc: { type: String },
        error: { type: Boolean, state: true },
        loaded: { type: Boolean, state: true },
    };

    shapes = ["round", "square", "sharp"];

    constructor() {
        super();
        this.loading = "lazy";
        this.shape = "square";
        this.errorSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this._handleImageResizeObserver = this._handleImageResizeObserver.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <img 
                class="md-image__native"
                src="${this.error?this.errorSrc:ifDefined(this.src)}"
                alt="${ifDefined(this.alt??'alt')}"
                loading="${ifDefined(this.loading)}"
                @load="${this._handleImageNativeLoad}"
                @error="${this._handleImageNativeError}"
            >
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");

        this.resizeObserver = new ResizeObserver(this._handleImageResizeObserver);
        this.resizeObserver.observe(this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.resizeObserver.disconnect(this);

        this.classList.remove("md-image");
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        if (_changedProperties.has("shape")) {
            this.shapes.forEach((shape) => {
                this.classList.toggle(`md-image--${shape}`, this.shape === shape);
            });
            this._updateSquareRadius();
        }

        if (_changedProperties.has("loaded")) {
            this.classList.toggle(`md-image--loaded`, Boolean(this.loaded));
        }

        if (_changedProperties.has("error")) {
            this.classList.toggle(`md-image--error`, Boolean(this.error));
        }
    }

    _updateSquareRadius() {
        if (this.shape === "square") {
            const radius = Math.ceil(Math.sqrt(Math.max(this.clientWidth, this.clientHeight)) * 2);

            this.style.setProperty("--md-comp-image-radius", `${radius}px`);
        } else {
            this.style.removeProperty("--md-comp-image-radius");
        }
    }

    _handleImageResizeObserver() {
        window.requestAnimationFrame(() => {
            this._updateSquareRadius();
        });
    }

    _handleImageNativeLoad(event) {
        this.loaded = true;

        this.emit("onImageNativeLoad", { event, element: this });
    }

    _handleImageNativeError(event) {
        this.error = true;

        this.emit("onImageNativeError", { event, element: this });
    }
}

customElements.define("md-image", MdImage);

export { MdImage };
