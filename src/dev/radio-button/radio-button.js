import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class RadioButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-radio-button name="radio-button"></md-radio-button>
                    <md-radio-button name="radio-button" checked></md-radio-button>
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
                <div class="md-layout__column md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("radio-button-component", RadioButtonComponent);

export default document.createElement('radio-button-component')
