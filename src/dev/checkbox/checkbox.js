import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevCheckbox extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-checkbox name="checkbox" value="1" @onCheckboxNativeInput="${console.log}" @onCheckboxNativeReset="${console.log}"></md-checkbox>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-checkbox name="checkbox" value="2" checked @onCheckboxNativeInput="${console.log}" @onCheckboxNativeReset="${console.log}"></md-checkbox>
                            </div>
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-checkbox name="checkbox" value="3" indeterminate @onCheckboxNativeInput="${console.log}" @onCheckboxNativeReset="${console.log}"></md-checkbox>
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

customElements.define("dev-checkbox", DevCheckbox);

export default document.createElement("dev-checkbox");
