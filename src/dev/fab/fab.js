import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevIconComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="small"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant=""
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="large"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="surface"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="secondary"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="tertiary"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="surface unelevated"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="secondary unelevated"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="tertiary unelevated"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="extended"
                        icon="edit"
                        label="Navigate"
                    ></md-fab>
                    <md-fab
                        variant="extended"
                        label="Reroute"
                    ></md-fab>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-fab", DevIconComponent);

export default document.createElement("dev-fab");
