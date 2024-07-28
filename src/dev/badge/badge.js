import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBadge extends MDComponent {
    render() {
        return html`
            <md-layout variant="column">
                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="demo">
                        <md-layout-item region="center" class="demo__container">
                            <md-badge></md-badge>
                            <md-badge label="1"></md-badge>
                            <md-badge label="1111" limit="999"></md-badge>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-badge", DevBadge);

export default document.createElement("dev-badge");
