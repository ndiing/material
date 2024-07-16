import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSwitch extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form
                        @onFormNativeReset="${(event) => console.log(event)}"
                        @onFormNativeSubmit="${(event) => console.log(event.detail.data)}"
                    >
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch
                                    name="switch"
                                    value="1"
                                    checked
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch
                                    name="switch2"
                                    value="2"
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch
                                    name="switch3"
                                    value="3"
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch
                                    name="switch4"
                                    value="1"
                                    checked
                                    icons='["close","check"]'
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch
                                    name="switch5"
                                    value="2"
                                    icons='["close","check"]'
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-switch
                                    name="switch6"
                                    value="3"
                                    icons='["mood_bad","mood"]'
                                    @onSwitchNativeInput="${console.log}"
                                    @onSwitchNativeReset="${console.log}"
                                ></md-switch>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-button
                                    type="reset"
                                    label="Reset"
                                    variant="outlined"
                                ></md-button>
                                <md-button
                                    type="submit"
                                    label="Submit"
                                    variant="filled"
                                ></md-button>
                            </div>
                        </div>
                    </md-form>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-switch", DevSwitch);

export default document.createElement("dev-switch");
