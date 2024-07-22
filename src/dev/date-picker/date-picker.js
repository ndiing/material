import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDatePicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-date-picker open value="1990-10-17"></md-date-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-date-picker", DevDatePicker);

export default document.createElement("dev-date-picker");
