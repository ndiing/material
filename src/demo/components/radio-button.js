import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoRadioButton extends MdElement {
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
                        
                        <md-radio-button name="radio1" checked></md-radio-button>
                        <md-radio-button name="radio1"></md-radio-button>
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
customElements.define("demo-radio-button", DemoRadioButton);
export default document.createElement("demo-radio-button");
