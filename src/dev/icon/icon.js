import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevIcon extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4"> </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-icon", DevIcon);

export default document.createElement("dev-icon");
