import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class LayoutComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`

            <div class="md-layout md-layout--border">
                <div class="md-layout__item md-layout__item--north">
                    <md-sheet>
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                </div>
                <div class="md-layout__item md-layout__item--east">
                    <md-sheet style="height:100%;">
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                </div>
                <div class="md-layout__item md-layout__item--center" style="padding:24px;">
                    <div class="md-layout md-layout--grid">
                        <div style="background:var(--md-sys-color-surface-container-high);height:56px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                        <div style="background:var(--md-sys-color-surface-container-high);height:56px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                        <div style="background:var(--md-sys-color-surface-container-high);height:56px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                    </div>
                </div>
                <div class="md-layout__item md-layout__item--south">
                    <md-sheet>
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                </div>
                <div class="md-layout__item md-layout__item--west" open>
                    <md-sheet style="height:100%;">
                        <md-sheet-header
                            label="Label"
                            trailingIconButton="close"
                        ></md-sheet-header>
                        <md-sheet-body>
                        </md-sheet-body>
                    </md-sheet>
                </div>
            </div>
        `;
    }
}

customElements.define("layout-component", LayoutComponent);

export default document.createElement("layout-component");
