import { html } from "lit";
import { MDComponent } from "../base/component";


class MDImageComponent extends MDComponent {
    
    static properties = {
        src: { type: String },
        alt: { type: String },
        ui: { type: String },
    };

    
    constructor() {
        super();

        // default
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }

    
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-image");
    }

    
    firstUpdated(changedProperties) {
        // Implement logic if needed
    }

    
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            this.classList.remove(`md-image--shape`);

            if (this.ui) {
                this.classList.add(`md-image--${this.ui}`);
            }
        }
    }

    
    render() {
        // prettier-ignore
        return html`
            <img 
                .src="${this.src}" 
                .alt="${this.alt}" 
                class="md-image__native"
                @load="${this.handleImageLoad}"
                @error="${this.handleImageError}"
            >
        `;
    }

    
    handleImageLoad(event) {
        this.emit("onImageLoad", { event });
    }

    
    handleImageError(event) {
        this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this.emit("onImageError", { event });
    }
}


customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
