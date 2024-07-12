import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDialog extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog open label="Lorem ipsum dolor" actions='[{"label":"label"},{"label":"label"}]'> Lorem ipsum dolor sit amet. Recusandae ut velit quo delectus. Qui recusandae placeat minus architecto? </md-dialog>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-dialog", DevDialog);

export default document.createElement("dev-dialog");
