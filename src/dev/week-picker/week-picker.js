import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevWeekPicker extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-week-picker open value="1990-W42"></md-week-picker>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-week-picker", DevWeekPicker);

export default document.createElement("dev-week-picker");
