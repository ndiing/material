import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTimeField extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="width:480px;height:800px;position:relative;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form
                        @onFormNativeReset="${event=>console.log(event)}"
                        @onFormNativeSubmit="${event=>console.log(event.detail.data)}"
                    >
                        <div class="md-layout-column">
                            
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-time-field
                                name="time"
                            ></md-time-field>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-time-field
                                name="time2"
                                value="20:30"
                            ></md-time-field>
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

customElements.define("dev-time-field", DevTimeField);

export default document.createElement("dev-time-field");
