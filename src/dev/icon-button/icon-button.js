import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevIconButtonComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button
                        variant="filled"
                        icon="favorite"
                    ></md-icon-button>
                    <md-icon-button
                        variant="filled toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="filled toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        variant="filled"
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button
                        variant="tonal"
                        icon="favorite"
                    ></md-icon-button>
                    <md-icon-button
                        variant="tonal toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="tonal toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        variant="tonal"
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button
                        variant="outlined"
                        icon="favorite"
                    ></md-icon-button>
                    <md-icon-button
                        variant="outlined toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="outlined toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        variant="outlined"
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="favorite"></md-icon-button>
                    <md-icon-button
                        variant="toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-icon-button", DevIconButtonComponent);

export default document.createElement("dev-icon-button");
