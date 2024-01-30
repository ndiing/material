import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class SwitchComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-switch></md-switch>
                    <md-switch checked></md-switch>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("switch-component", SwitchComponent);

export default document.createElement('switch-component')
