import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoWeekField extends MdComponent {
    render() {
        return html`
            <md-form
                @onFormNativeFormdata="${console.log}"
                @onFormNativeReset="${console.log}"
                @onFormNativeSubmit="${console.log}"
            >
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-week-field
                                label="week"
                                name="week"
                                required
                                cancelAction
                            ></md-week-field>
                        </div>
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-week-field
                                label="week"
                                name="week"
                                required
                                value="1990-W42"
                                cancelAction
                            ></md-week-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Reset"
                                type="reset"
                            ></md-button>
                            <md-button
                                variant="filled-tonal"
                                label="Submit"
                                type="submit"
                            ></md-button>
                        </div>
                        <div style="height:100vh;"></div>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("demo-week-field", DemoWeekField);

export default document.createElement("demo-week-field");
