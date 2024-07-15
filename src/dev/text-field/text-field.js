import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextField extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field label="label" name="text" pattern="^(\\d{4} ){3}\\d{4}$" mask="0000 0000 0000 0000" placeholder="0000 0000 0000 0000"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field label="label" name="text2" variant="filled"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field label="label" name="text3" variant="outlined"></md-text-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field label="label" name="text4" value="text4" variant="rounded"></md-text-field>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-text-field label="label" name="text6" value="text6" variant="outlined rounded"></md-text-field>
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

customElements.define("dev-text-field", DevTextField);

export default document.createElement("dev-text-field");
