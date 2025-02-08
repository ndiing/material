import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoForm extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-form
                            acceptCharset=""
                            action=""
                            autocomplete=""
                            enctype=""
                            method=""
                            name=""
                            noValidate=""
                            @onFormNativeFormdata="${console.log}"
                            @onFormNativeReset="${console.log}"
                            @onFormNativeSubmit="${console.log}"
                        ></md-form>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-form", DemoForm);
export default document.createElement("demo-form");
