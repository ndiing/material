import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevMediaObserver extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-media-observer></md-media-observer>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-media-observer", DevMediaObserver);

export default document.createElement("dev-media-observer");
