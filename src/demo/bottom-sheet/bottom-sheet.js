import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoBottomSheet extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Bottom Sheet"
                                    @click="${() => bottomSheet.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-bottom-sheet
                    id="bottomSheet"
                    open
                    @onBottomSheetIconButtonClick="${console.log}"
                    @onBottomSheetButtonClick="${console.log}"
                    @onBottomSheetShown="${console.log}"
                    @onBottomSheetClosed="${console.log}"
                    @onBottomSheetScrimClosed="${console.log}"
                    >Body</md-bottom-sheet
                >
            </div>
        `;
    }
}

customElements.define("demo-bottom-sheet", DemoBottomSheet);

export default document.createElement("demo-bottom-sheet");
