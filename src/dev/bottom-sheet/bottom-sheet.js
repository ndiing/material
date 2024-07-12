import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBottomSheet extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <md-bottom-sheet id="bottomSheet" open>
                    <md-list
                        .list="${[
                            { icon: "share", label: "Share" },
                            { icon: "link", label: "Get link" },
                            { icon: "edit", label: "Edit name" },
                        ]}"
                    ></md-list>
                </md-bottom-sheet>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="toggle bottom sheet" @click="${() => bottomSheet.toggle()}"></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheet);

export default document.createElement("dev-bottom-sheet");
