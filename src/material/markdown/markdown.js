import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MDComponent } from "../component/component.js";
import { marked } from "marked";
import { html, nothing } from "lit";

/**
 * A custom element for rendering Markdown content.
 * @element md-markdown
 * @extends MDComponent
 */
class MDMarkdownComponent extends MDComponent {
    /**
     * Defines the properties of the element.
     * @property {String} href - The URL to fetch Markdown content from.
     * @property {String} text - The Markdown text to be rendered.
     */
    static properties = {
        href: { type: String },
        text: { type: String },
    };

    /**
     * Creates an instance of MDMarkdownComponent.
     */
    constructor() {
        super();
        this.text = this.textContent;
        this.textContent = "";
    }

    /**
     * Renders the Markdown content as HTML.
     * @private
     */
    render() {
        return html` ${this.text ? html`<div class="md-markdown__body">${unsafeHTML(marked(this.text))}</div>` : nothing} `;
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-markdown");
    }

    /**
     * Called when the element's properties are updated.
     * @private
     * @param {Map} changedProperties - The properties that changed.
     */
    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("href")) {
            try {
                const response = await fetch(this.href);
                const text = await response.text();
                this.text = text;
                this.requestUpdate();
            } catch (error) {
                console.error(error);
            }
        }
    }
}

customElements.define("md-markdown", MDMarkdownComponent);

export { MDMarkdownComponent };
