import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBottomAppBar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <md-bottom-app-bar
                    open
                    leadingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                    trailingActions='[{"component":"fab","icon":"image"}]'
                ></md-bottom-app-bar>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
