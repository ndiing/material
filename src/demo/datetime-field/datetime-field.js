import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDatetimeField extends MdComponent {
    render() {
        return html`
            <md-form>
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-datetime-field
                                label="datetime-local"
                                name="datetime-local"
                                required
                                cancelAction
                            ></md-datetime-field>
                        </div>
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-datetime-field
                                label="datetime-local"
                                name="datetime-local"
                                required
                                value="1990-10-17T20:30"
                                cancelAction
                            ></md-datetime-field>
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

customElements.define("demo-datetime-field", DemoDatetimeField);

export default document.createElement("demo-datetime-field");
