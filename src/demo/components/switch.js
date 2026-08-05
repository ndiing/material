import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoSwitch extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <div class="md-grid">
                    <div class="md-grid__column md-grid__column--expanded4">
                        <h2>Configurations</h2>

                        <md-switch></md-switch>
                        <md-switch checked></md-switch>

                        <br>
                        <br>

                        <md-switch icon='["","check"]'></md-switch>
                        <md-switch icon='["","check"]' checked></md-switch>

                        <br>
                        <br>

                        <md-switch icon='["close","check"]'></md-switch>
                        <md-switch icon='["close","check"]' checked></md-switch>

                        <br>
                        <br>
                    </div>
                    

                    <div class="md-grid__column md-grid__column--expanded12">
                        <md-button type="reset" label="reset"></md-button>
                        <md-button type="submit" label="submit"></md-button>
                    </div>
                </div>
            </form>
        `;
    }

    handleFormdata(event) {}

    handleReset(event) {}

    handleSubmit(event) {
        event.preventDefault();
    }
}
customElements.define("demo-switch", DemoSwitch);
export default document.createElement("demo-switch");
