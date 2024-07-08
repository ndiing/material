import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MDComponent } from "../component/component.js";
import { marked } from "marked";
import { nothing } from "lit";

/**
 * {{description}}
 * @element md-markdown
 * @extends MDComponent
 */
class MDMarkdownComponent extends MDComponent {
    /**
     * {{description}}
     * @property {String} href - {{description}}
     * @property {String} text - {{description}}
     */
    static properties = {
        href: { type: String },
        text: { type: String },
    };

    /**
     * {{description}}
     */
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
