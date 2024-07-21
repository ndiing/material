import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBottomSheet extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-bottom-sheet id="bottomSheet">
                    <div style="height:56px;"></div>
                </md-bottom-sheet>
                <md-bottom-sheet id="bottomSheet2">
                    <div style="height:56px;"></div>
                </md-bottom-sheet>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-button
                                label="toggle bottom sheet"
                                variant="tonal"
                                @click="${() => bottomSheet.toggle()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            
                            <md-button
                                label="toggle bottom sheet"
                                variant="tonal"
                                @click="${() => bottomSheet2.toggle(true)}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheet);

export default document.createElement("dev-bottom-sheet");
