import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSheetCenter extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-sheet
                            region="center"
                            icons=""
                            actions=""
                            label=""
                            sublabel=""
                            buttons=""
                            region=""
                            modal=""
                        ></md-sheet>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-sheet-center", DemoSheetCenter);

export default document.createElement("demo-sheet-center");
