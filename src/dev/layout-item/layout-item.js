import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevLayoutItem extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="1" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="2" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="3" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="4" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="5" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="6" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="7" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="8" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="9" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="10" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="11" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="1" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="2" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="3" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="4" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="5" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="6" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="7" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                    </md-layout>

                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="1"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="2"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="3"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-layout-item", DevLayoutItem);

export default document.createElement("dev-layout-item");
