import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MDComponent } from "../component/component.js";
import { marked } from "marked";
import { html, nothing } from "lit";

/**
 * {{desc}}
 * @extends MDComponent
 * @element md-markdown
 */
class MDMarkdownComponent extends MDComponent {
    /**
     * {{desc}}
     * @property {String} href - {{desc}}
     * @property {String} text - {{desc}}
     */
    static properties = {
        href: { type: String },
        text: { type: String },
    };

    /**
     * {{desc}}
     */
    constructor() {
        super();
        this.text = this.textContent;
        this.textContent = "";
    }

    /**
     * {{desc}}
     */
    render() {
        return html` ${this.text ? html`<div class="md-markdown__body">${unsafeHTML(marked(this.text))}</div>` : nothing} `;
    }

    /**
     * {{desc}}
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-markdown");
    }

    /**
     * {{desc}}
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("href")) {
            const response = await fetch(this.href);
            const text = await response.text();
            this.text = text;
            this.requestUpdate();
        }
    }
}
customElements.define("md-markdown", MDMarkdownComponent);
export { MDMarkdownComponent };
