import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { MDComponent } from "../component/component.js";
import { marked } from "marked";


/**
 * {{desc}}
 * @extends MDComponent
 * @tagname md-markdown
 */
class MDMarkdownComponent extends MDComponent {
    
    /**
     * @property {String} href - {{desc}}
     */
    static properties = {
        href: { type: String },
    };

    constructor() {
        super();
        this.text = this.textContent;
        this.textContent = "";
    }

    render() {
        return unsafeHTML(marked.parse(this.text));
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
