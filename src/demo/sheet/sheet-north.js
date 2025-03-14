import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSheetNorth extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button variant="filled-tonal" label="Toggle Sheet" @click="${(event) => sheet.toggle()}"></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-sheet id="sheet" region="north" style="height:64px" open>Body</md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-sheet-north", DemoSheetNorth);

export default document.createElement("demo-sheet-north");
