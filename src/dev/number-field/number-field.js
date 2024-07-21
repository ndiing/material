import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNumberField extends MDComponent {
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
                                <md-number-field name="number"></md-number-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-number-field
                                    name="number2"
                                    value="123456789"
                                ></md-number-field>
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

customElements.define("dev-number-field", DevNumberField);

export default document.createElement("dev-number-field");
