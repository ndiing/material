import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevMarkdownComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-markdown href="./src/assets/markdown.md"></md-markdown>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-markdown", DevMarkdownComponent);

export default document.createElement("dev-markdown");
