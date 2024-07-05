import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevRippleComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="button"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="image"></md-icon-button>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-ripple", DevRippleComponent);

export default document.createElement("dev-ripple");
