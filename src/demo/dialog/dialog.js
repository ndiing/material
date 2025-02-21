import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDialog extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled-tonal" label="Toggle Dialog" @click="${(event) => dialog.toggle()}"></md-button>
                        <md-dialog id="dialog" label="label" .buttons="${[{ component: "spacer" }, { label: "Label" }, { label: "Label" }]}" @onDialogButtonClick="${() => dialog.toggle()}">body</md-dialog>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-dialog", DemoDialog);

export default document.createElement("demo-dialog");
