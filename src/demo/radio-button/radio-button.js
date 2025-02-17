import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoRadioButton extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-radio-button
                            name="radio-button"
                            value="radio-button"
                            checked=""
                            @onRadioButtonNativeInput="${console.log}"
                            @onRadioButtonNativeReset="${console.log}"
                        ></md-radio-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-radio-button
                            name="radio-button"
                            value="radio-button"
                            @onRadioButtonNativeInput="${console.log}"
                            @onRadioButtonNativeReset="${console.log}"
                        ></md-radio-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-radio-button", DemoRadioButton);

export default document.createElement("demo-radio-button");
