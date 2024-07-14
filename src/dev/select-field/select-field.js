import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSelectField extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-form @onFormNativeReset="${(event) => console.log(event)}" @onFormNativeSubmit="${(event) => console.log(event.detail.data)}">
                        <div class="md-layout-column">
                            
                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select"
                                    map='{"label":"label","value":"value"}'
                                    .options="${[
                                        { label: "Indonesia", value: "ID" },
                                        { label: "United States", value: "US" },
                                        { label: "Germany", value: "DE" },
                                        { label: "Japan", value: "JP" },
                                        { label: "Brazil", value: "BR" },
                                        { label: "Canada", value: "CA" },
                                        { label: "Australia", value: "AU" },
                                        { label: "United Kingdom", value: "GB" },
                                        { label: "France", value: "FR" },
                                        { label: "South Korea", value: "KR" },
                                        { label: "India", value: "IN" },
                                        { label: "Russia", value: "RU" },
                                        { label: "Mexico", value: "MX" },
                                        { label: "Italy", value: "IT" },
                                        { label: "Spain", value: "ES" },
                                        { label: "Netherlands", value: "NL" },
                                        { label: "Switzerland", value: "CH" },
                                        { label: "Sweden", value: "SE" },
                                        { label: "Norway", value: "NO" },
                                        { label: "Denmark", value: "DK" },
                                        { label: "Argentina", value: "AR" },
                                        { label: "South Africa", value: "ZA" },
                                        { label: "Saudi Arabia", value: "SA" },
                                        { label: "Turkey", value: "TR" },
                                        { label: "Singapore", value: "SG" },
                                        // Dan lain-lain
                                    ]}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${event=>console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
                            </div>

                            <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                <md-select-field
                                    name="select2"
                                    map='{"label":"label","value":"value"}'
                                    .options="${[
                                        { label: "Indonesia", value: "ID" },
                                        { label: "United States", value: "US" },
                                        { label: "Germany", value: "DE" },
                                        { label: "Japan", value: "JP" },
                                        { label: "Brazil", value: "BR" },
                                        { label: "Canada", value: "CA" },
                                        { label: "Australia", value: "AU" },
                                        { label: "United Kingdom", value: "GB" },
                                        { label: "France", value: "FR" },
                                        { label: "South Korea", value: "KR" },
                                        { label: "India", value: "IN" },
                                        { label: "Russia", value: "RU" },
                                        { label: "Mexico", value: "MX" },
                                        { label: "Italy", value: "IT",selected:true },
                                        { label: "Spain", value: "ES" },
                                        { label: "Netherlands", value: "NL" },
                                        { label: "Switzerland", value: "CH" },
                                        { label: "Sweden", value: "SE" },
                                        { label: "Norway", value: "NO" },
                                        { label: "Denmark", value: "DK" },
                                        { label: "Argentina", value: "AR" },
                                        { label: "South Africa", value: "ZA" },
                                        { label: "Saudi Arabia", value: "SA" },
                                        { label: "Turkey", value: "TR" },
                                        { label: "Singapore", value: "SG" },
                                        // Dan lain-lain
                                    ]}"
                                    @onPickerMenuListItemClick="${console.log}"
                                    @onPickerMenuListItemSelected="${console.log}"
                                    @onTextFieldNativeInput="${event=>console.log(event.detail.currentTarget.value)}"
                                ></md-select-field>
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

customElements.define("dev-select-field", DevSelectField);

export default document.createElement("dev-select-field");
