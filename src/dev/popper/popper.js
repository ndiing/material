import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevPopper extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-card> popper </md-card>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-popper", DevPopper);

export default document.createElement("dev-popper");
