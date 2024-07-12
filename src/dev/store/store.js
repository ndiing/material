import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevStore extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-store
                            ></md-store>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-store", DevStore);

export default document.createElement("dev-store");
