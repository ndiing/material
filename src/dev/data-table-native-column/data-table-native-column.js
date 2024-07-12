import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDataTableNativeColumn extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:360px;height:640px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-data-table-native-column
                            ></md-data-table-native-column>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table-native-column", DevDataTableNativeColumn);

export default document.createElement("dev-data-table-native-column");
