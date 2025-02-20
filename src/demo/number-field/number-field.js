import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNumberField extends MdComponent {
    render() {
        return html`
            <md-form>
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-number-field
                                label="number"
                                name="number"
                                required
                                cancelAction
                            ></md-number-field>
                        </div>
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-number-field
                                label="number"
                                name="number"
                                required
                                value="123"
                                cancelAction
                            ></md-number-field>
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
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("demo-number-field", DemoNumberField);

export default document.createElement("demo-number-field");
