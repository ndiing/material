import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSheetEast extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Sheet"
                                    @click="${(event) => sheet.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-sheet
                    id="sheet"
                    region="east"
                    style="width:256px"
                    open
                    @onSheetIconButtonClick="${console.log}"
                    @onSheetButtonClick="${console.log}"
                    @onSheetShown="${console.log}"
                    @onSheetClosed="${console.log}"
                    @onSheetScrimClosed="${console.log}"
                    >Body</md-sheet
                >
            </div>
        `;
    }
}

customElements.define("demo-sheet-east", DemoSheetEast);

export default document.createElement("demo-sheet-east");
