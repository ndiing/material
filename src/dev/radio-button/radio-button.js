import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevRadioButton extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form
                        @onFormNativeReset="${event=>console.log(event)}"
                        @onFormNativeSubmit="${event=>console.log(event.detail.data)}"
                    >
                        <div class="md-layout-column">
                            
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-radio-button
                                    name="radio"
                                    value="1"
                                    @onRadioButtonNativeInput="${console.log}"
                                    @onRadioButtonNativeReset="${console.log}"
                                ></md-radio-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-radio-button
                                    name="radio"
                                    value="2"
                                    @onRadioButtonNativeInput="${console.log}"
                                    @onRadioButtonNativeReset="${console.log}"
                                ></md-radio-button>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-radio-button
                                    name="radio"
                                    value="3"
                                    checked
                                    @onRadioButtonNativeInput="${console.log}"
                                    @onRadioButtonNativeReset="${console.log}"
                                ></md-radio-button>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-button type="reset" label="Reset" variant="outlined"></md-button>
                                <md-button type="submit" label="Submit" variant="filled"></md-button>
                            </div>
    
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-radio-button", DevRadioButton);

export default document.createElement("dev-radio-button");
