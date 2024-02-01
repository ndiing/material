import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class CheckboxComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-checkbox></md-checkbox>
                    <md-checkbox indeterminate></md-checkbox>
                    <md-checkbox checked></md-checkbox>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("checkbox-component", CheckboxComponent);

export default document.createElement("checkbox-component");
