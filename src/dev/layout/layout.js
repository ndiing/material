import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class LayoutComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`

            <div class="md-layout md-layout--border">
                <md-sheet region="north" class="md-layout__item md-layout__item--north" style="height:64px;">
                </md-sheet>
                <md-sheet region="east" class="md-layout__item md-layout__item--east" style="width:360px;">
                </md-sheet>
                <div class="md-layout__item md-layout__item--center" style="padding:24px;">
                    <div class="md-layout md-layout--grid">
                        <div style="background:var(--md-sys-color-surface-container-high);height:56px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            expanded4,medium4,compact4
                        </div>
                        <div style="background:var(--md-sys-color-surface-container-high);height:56px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            expanded4,medium4,compact4
                        </div>
                        <div style="background:var(--md-sys-color-surface-container-high);height:56px;" class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                            expanded4,medium4,compact4
                        </div>
                    </div>
                </div>
                <md-sheet region="south" class="md-layout__item md-layout__item--south" style="height:80px;">
                </md-sheet>
                <md-sheet region="west" class="md-layout__item md-layout__item--west" style="width:360px;">
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("layout-component", LayoutComponent);

export default document.createElement("layout-component");
