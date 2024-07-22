import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextareaField extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-textarea-field name="textarea"></md-textarea-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-textarea-field name="textarea2" value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae?"></md-textarea-field>
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

customElements.define("dev-textarea-field", DevTextareaField);

export default document.createElement("dev-textarea-field");
