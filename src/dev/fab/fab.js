import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevFab extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>FAB</md-markdown>
                            <md-fab
                                variant=""
                                icon="image"
                            ></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Small FAB</md-markdown>
                            <md-fab
                                variant="small"
                                icon="image"
                            ></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Large FAB</md-markdown>
                            <md-fab
                                variant="large"
                                icon="image"
                            ></md-fab>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Surface</md-markdown>
                            <md-fab
                                variant="surface"
                                icon="image"
                            ></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Secondary</md-markdown>
                            <md-fab
                                variant="secondary"
                                icon="image"
                            ></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Tertiary</md-markdown>
                            <md-fab
                                variant="tertiary"
                                icon="image"
                            ></md-fab>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Unelevated</md-markdown>
                            <md-fab
                                variant="unelevated"
                                icon="image"
                            ></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Extended FAB with both icon and label text</md-markdown>
                            <md-fab
                                variant="extended"
                                icon="image"
                                label="label"
                            ></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Extended FAB without icon</md-markdown>
                            <md-fab
                                variant="extended"
                                label="label"
                            ></md-fab>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-fab", DevFab);

export default document.createElement("dev-fab");
