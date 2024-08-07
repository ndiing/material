import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevFab extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-fab variant="small" icon="image"></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-fab variant="" icon="image"></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-fab variant="large" icon="image"></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-fab variant="surface" icon="image"></md-fab>
                            <md-fab variant="secondary" icon="image"></md-fab>
                            <md-fab variant="tertiary" icon="image"></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-fab variant="extended" label="label"></md-fab>
                            <md-fab variant="extended" icon="image" label="label"></md-fab>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-fab variant="unelevated" icon="image"></md-fab>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-fab", DevFab);

export default document.createElement("dev-fab");
