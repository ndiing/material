import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevIconComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-badge label=""></md-badge>
                    <md-badge label="1"></md-badge>
                    <md-badge label="11"></md-badge>
                    <md-badge label="111"></md-badge>
                    <md-badge label="1111"></md-badge>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-badge", DevIconComponent);

export default document.createElement("dev-badge");
