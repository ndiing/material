import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextField3Component extends MDComponent {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            label="Text field"
                            type="text"
                            value="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="textarea"
                            label="Textarea field"
                            type="textarea"
                            value="textarea"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="select"
                            label="Select field"
                            type="select"
                            .options="${[
                                { label: "Option 1", value: "1" },
                                { label: "Option 2", value: "2" },
                                { label: "Option 3", value: "3" },
                                { label: "Option 4", value: "4" },
                                { label: "Option 5", value: "5", selected: true },
                            ]}"
                        ></md-text-field>
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

customElements.define("dev-text-field3", DevTextField3Component);

export default document.createElement("dev-text-field3");
