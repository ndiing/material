import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDatetimePicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-datetime-picker open value="1990-10-17T20:30"></md-datetime-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-datetime-picker", DevDatetimePicker);

export default document.createElement("dev-datetime-picker");
