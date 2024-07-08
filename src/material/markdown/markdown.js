import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MDComponent } from "../component/component.js";
import { marked } from "marked";
import { nothing } from "lit";

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
        return this.text ? unsafeHTML(marked(this.text)) : nothing;
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element.
     * @private
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-markdown");

        if (this.href) {
            fetch(this.href)
                .then((res) => res.text())
                .then((text) => {
                    this.text = text;
                    this.requestUpdate();
                });
        }
    }

    /**
     * Called when the element's properties are updated.
     * @private
     * @param {Map} changedProperties - The properties that changed.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("href") && changedProperties.get("href")) {
            fetch(this.href)
                .then((res) => res.text())
                .then((text) => {
                    this.text = text;
                    this.requestUpdate();
                });
        }
    }
}

customElements.define("md-markdown", MDMarkdownComponent);

export { MDMarkdownComponent };
