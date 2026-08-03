import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoRadioButton extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <md-form 
                @onFormNativeFormdata="${this.handleDemoRadioButtonFormNativeFormdata}" 
                @onFormNativeReset="${this.handleDemoRadioButtonFormNativeReset}" 
                @onFormNativeSubmit="${this.handleDemoRadioButtonFormNativeSubmit}"
            >
                <div class="md-grid">
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-radio-button name="radio1"></md-radio-button>
                        <md-radio-button name="radio2" disabled></md-radio-button>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-radio-button name="radio1" checked></md-radio-button>
                        <md-radio-button name="radio2" disabled checked></md-radio-button>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                    </div>

               
                    <div class="md-grid__column md-grid__column--expanded12">
                        <md-button type="reset" label="reset" color="outlined"></md-button>
                        <md-button type="submit" label="submit" color="tonal"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleDemoRadioButtonFormNativeFormdata(event) {
        console.log(Object.fromEntries(event.detail.formData.entries()));
    }

    handleDemoRadioButtonFormNativeReset(event) {}

    handleDemoRadioButtonFormNativeSubmit(event) {}
}
customElements.define("demo-radio-button", DemoRadioButton);
export default document.createElement("demo-radio-button");
