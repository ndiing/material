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
                <md-grid >
                    <md-grid-column expanded="4">
                        

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
                    </md-grid-column>
                    

                    <md-grid-column expanded="12">
                        <md-button type="reset" label="reset"></md-button>
                        <md-button type="submit" label="submit"></md-button>
                    </md-grid-column>
                </md-grid>
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
