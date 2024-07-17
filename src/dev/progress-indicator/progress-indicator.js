import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevProgressIndicator extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Linear progress indicator</md-markdown>
                            <md-progress-indicator
                                variant="circular"
                                value="50"
                                max="100"
                            ></md-progress-indicator>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Circular progress indicator</md-markdown>
                            <md-progress-indicator
                                variant="linear"
                                value="50"
                                max="100"
                            ></md-progress-indicator>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-progress-indicator", DevProgressIndicator);

export default document.createElement("dev-progress-indicator");
