import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoPasswordField extends MdComponent {
    render() {
        return html`
            <md-form>
                <div class="md-layout">
                    <div class="md-layout__grid">
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-password-field label="password" name="password" required cancelAction></md-password-field>
                        </div>
                        <div class="md-layout__column--expanded6 md-layout__column--medium4 md-layout__column--compact4">
                            <md-password-field label="password" name="password" required value="password" cancelAction></md-password-field>
                        </div>
                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button variant="filled-tonal" label="Reset" type="reset"></md-button>
                            <md-button variant="filled-tonal" label="Submit" type="submit"></md-button>
                        </div>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("demo-password-field", DemoPasswordField);

export default document.createElement("demo-password-field");
