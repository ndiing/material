import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSideSheet extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Side Sheet"
                                    @click="${(event) => sideSheet.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-side-sheet
                    id="sideSheet"
                    .actions="${[{ icon: "image" }]}"
                    label="Label"
                    .buttons="${[{ component: "spacer" }, { label: "Label" }, { label: "Label" }]}"
                    open
                    @onSideSheetIconButtonClick="${(event) => sideSheet.toggle()}"
                    @onSideSheetButtonClick="${(event) => sideSheet.toggle()}"
                    >Body</md-side-sheet
                >
            </div>
        `;
    }
}

customElements.define("demo-side-sheet", DemoSideSheet);

export default document.createElement("demo-side-sheet");
