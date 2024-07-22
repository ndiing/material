import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevLayoutItem extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4">
                            layout-item
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-layout-item", DevLayoutItem);

export default document.createElement("dev-layout-item");
