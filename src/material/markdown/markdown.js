import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MDComponent } from "../component/component.js";
import { marked } from "marked";
import { nothing } from "lit";

/**
 * Custom element for rendering Markdown content.
 * @extends MDComponent
 * @tagname md-markdown
 */
class MDMarkdownComponent extends MDComponent {
    /**
     * @property {String} href - The URL from which to fetch Markdown content.
     */
    static properties = {
        href: { type: String },
        text: { type: String },
    };

    constructor() {
        super();
        this.text = this.textContent;
        this.textContent = "";
    }

    render() {
        return this.text ? unsafeHTML(marked(this.text)) : nothing;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-markdown");
        // this.classList.add("markdown-body");

        if (this.href) {
            fetch(this.href)
                .then((res) => res.text())
                .then((text) => {
                    this.text = text;
                    this.requestUpdate();
                });
        }
    }

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
