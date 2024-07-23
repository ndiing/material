import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSheet extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-sheet open style="--md-comp-sheet-height:80px;" id="north" variant="north" headline="north"></md-sheet>
                <md-sheet open style="--md-comp-sheet-width:360px;" id="east" variant="east" headline="east"></md-sheet>
                <md-sheet open style="--md-comp-sheet-height:80px;" id="south" variant="south" headline="south"></md-sheet>
                <md-sheet open style="--md-comp-sheet-width:360px;" id="west" variant="west" headline="west"></md-sheet>
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4">
                            <md-button variant="tonal" label="north" @click="${() => north.toggle()}"></md-button>
                            <md-button variant="tonal" label="east" @click="${() => east.toggle()}"></md-button>
                            <md-button variant="tonal" label="south" @click="${() => south.toggle()}"></md-button>
                            <md-button variant="tonal" label="west" @click="${() => west.toggle()}"></md-button>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-sheet", DevSheet);

export default document.createElement("dev-sheet");
