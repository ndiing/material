import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevEmoji extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card> </md-card>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-emoji", DevEmoji);

export default document.createElement("dev-emoji");
