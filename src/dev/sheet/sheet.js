import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSheet extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-sheet open variant="north" headline="north"></md-sheet>
                <md-sheet open variant="east" headline="east"></md-sheet>
                <md-sheet open variant="south" headline="south"></md-sheet>
                <md-sheet open variant="west" headline="west"></md-sheet>
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4">center</md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                        <md-layout-item expanded="12" medium="8" compact="4"></md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-sheet", DevSheet);

export default document.createElement("dev-sheet");
