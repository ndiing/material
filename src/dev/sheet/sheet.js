import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSheet extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-low);margin:24px;width:1280px;height:720px;">
                <md-sheet
                    open
                    variant="north"
                    @onSheetScrimClick="${console.log}"
                    @onSheetShow="${console.log}"
                    @onSheetClose="${console.log}"
                >north</md-sheet>
                <md-sheet
                    open
                    variant="east"
                    @onSheetScrimClick="${console.log}"
                    @onSheetShow="${console.log}"
                    @onSheetClose="${console.log}"
                >east</md-sheet>
                <md-sheet
                    open
                    variant="south"
                    @onSheetScrimClick="${console.log}"
                    @onSheetShow="${console.log}"
                    @onSheetClose="${console.log}"
                >south</md-sheet>
                <md-sheet
                    open
                    variant="west"
                    @onSheetScrimClick="${console.log}"
                    @onSheetShow="${console.log}"
                    @onSheetClose="${console.log}"
                >west</md-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            center
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-sheet", DevSheet);

export default document.createElement("dev-sheet");
