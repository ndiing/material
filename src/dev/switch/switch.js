import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSwitchComponent extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            name="switch"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            name="switch"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            icons='["close","check"]'
                            name="switch2"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["close","check"]'
                            name="switch2"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleFormNativeReset(event) {
        console.log(event);
    }

    handleFormNativeSubmit(event) {
        console.log(JSON.stringify(event.detail.data, null, 4));
    }
}

customElements.define("dev-switch", DevSwitchComponent);

export default document.createElement("dev-switch");
