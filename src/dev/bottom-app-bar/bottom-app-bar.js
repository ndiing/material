import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBottomAppBar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-bottom-app-bar id="bottomAppBar0" leadingActions='[{"icon":"search"},{"icon":"delete"},{"icon":"archive"},{"icon":"reply"}]' trailingActions='[{"component":"spacer"},{"component":"fab","icon":"add","variant":"unelevated"}]'></md-bottom-app-bar>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-bottom-app-bar id="bottomAppBar1" leadingActions='[{"icon":"search"},{"icon":"delete"},{"icon":"archive"},{"icon":"reply"}]'></md-bottom-app-bar>
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="show bottom app bar" variant="tonal" @click="${() => bottomAppBar0.toggle()}"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="show bottom app bar" variant="tonal" @click="${() => bottomAppBar1.toggle()}"></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
