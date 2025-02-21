import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDateField extends MdComponent {
    render() {
        return html`
            <md-form>
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-date-field label="date" name="date" required cancelAction></md-date-field>
                        </div>
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-date-field label="date" name="date" required value="1990-10-17" cancelAction></md-date-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button variant="filled-tonal" label="Reset" type="reset"></md-button>
                            <md-button variant="filled-tonal" label="Submit" type="submit"></md-button>
                        </div>
                        <div style="height:100vh;"></div>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("demo-date-field", DemoDateField);

export default document.createElement("demo-date-field");
