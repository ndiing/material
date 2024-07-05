import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevProgressIndicatorComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator value="25"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator value="50"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator value="100"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator variant="circular"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator
                        variant="circular"
                        value="25"
                    ></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator
                        variant="circular"
                        value="50"
                    ></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator
                        variant="circular"
                        value="100"
                    ></md-progress-indicator>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-progress-indicator", DevProgressIndicatorComponent);

export default document.createElement("dev-progress-indicator");
