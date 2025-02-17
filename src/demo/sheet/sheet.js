import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSheet extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-sheet
                            icons=""
                            actions=""
                            label=""
                            sublabel=""
                            buttons=""
                            region=""
                            modal=""
                            @onSheetIconButtonClick="${console.log}"
                            @onSheetButtonClick="${console.log}"
                            @onSheetShown="${console.log}"
                            @onSheetClosed="${console.log}"
                            @onSheetScrimClosed="${console.log}"
                        ></md-sheet>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-sheet", DemoSheet);

export default document.createElement("demo-sheet");
