import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevLayout extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item
                            expanded="4"
                            medium="4"
                            compact="4"
                            >4/4/4</md-layout-item
                        >
                        <md-layout-item
                            expanded="4"
                            medium="4"
                            compact="4"
                            >4/4/4</md-layout-item
                        >
                        <md-layout-item
                            expanded="4"
                            medium="4"
                            compact="4"
                            >4/4/4</md-layout-item
                        >
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
