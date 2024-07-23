import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSheet extends MDComponent {
    render() {
        return html`
            <md-layout variant="border">
                <md-sheet id="north1" variant="north modal" headline="north modal"></md-sheet>
                <md-sheet id="east1" variant="east modal" headline="east modal"></md-sheet>
                <md-sheet id="south1" variant="south modal" headline="south modal"></md-sheet>
                <md-sheet id="west1" variant="west modal" headline="west modal"></md-sheet>
                <md-layout-item region="center">
                    <md-layout variant="column">
                        <md-layout-item expanded="12" medium="8" compact="4">
                            <md-button variant="tonal" label="north1" @click="${() => north1.toggle(true)}"></md-button>
                            <md-button variant="tonal" label="east1" @click="${() => east1.toggle(true)}"></md-button>
                            <md-button variant="tonal" label="south1" @click="${() => south1.toggle(true)}"></md-button>
                            <md-button variant="tonal" label="west1" @click="${() => west1.toggle(true)}"></md-button>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `;
    }
}

customElements.define("dev-sheet2", DevSheet);

export default document.createElement("dev-sheet2");
