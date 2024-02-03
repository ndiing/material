import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class RadioButtonComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-radio-button name="radio-button"></md-radio-button>
                    <md-radio-button name="radio-button" checked></md-radio-button>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("radio-button-component", RadioButtonComponent);

export default document.createElement("radio-button-component");
