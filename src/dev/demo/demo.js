import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDemo extends MDComponent {
    render() {
        return html`
            <md-layout variant="column">
                <md-layout-item expanded="4" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-layout-item region="center" class="dev-demo__container">
                            demo
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-demo", DevDemo);

export default document.createElement("dev-demo");
