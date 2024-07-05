import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

class DevButtonComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                    ></md-button>
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="elevated icon-right"
                        label="Elevated button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="filled"
                        label="Filled button"
                    ></md-button>
                    <md-button
                        variant="filled"
                        label="Filled button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="filled icon-right"
                        label="Filled button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="filled"
                        label="Filled button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="tonal"
                        label="Tonal button"
                    ></md-button>
                    <md-button
                        variant="tonal"
                        label="Tonal button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="tonal icon-right"
                        label="Tonal button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="tonal"
                        label="Tonal button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                    ></md-button>
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="outlined icon-right"
                        label="Outlined button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="Text button"></md-button>
                    <md-button
                        label="Text button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="icon-right"
                        label="Text button"
                        icon="add"
                    ></md-button>
                    <md-button
                        label="Text button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-button", DevButtonComponent);

export default document.createElement("dev-button");
