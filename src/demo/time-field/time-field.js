import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTimeField extends MdComponent {
    render() {
        return html`
            <md-form>
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-time-field label="time" name="time" required cancelAction></md-time-field>
                        </div>
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-time-field label="time" name="time" required value="20:30" cancelAction></md-time-field>
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

customElements.define("demo-time-field", DemoTimeField);

export default document.createElement("demo-time-field");
