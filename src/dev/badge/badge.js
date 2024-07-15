import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBadge extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Small badge</md-markdown>
                            <md-badge></md-badge>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Large badge</md-markdown>
                            <md-badge label="1"></md-badge>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Large badge with max characters</md-markdown>
                            <md-badge label="1111" limit="999"></md-badge>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-badge", DevBadge);

export default document.createElement("dev-badge");
