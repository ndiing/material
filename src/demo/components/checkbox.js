import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoCheckbox extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <form 
                 @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <md-grid class="demo-grid">
                    <md-grid-column expanded="12" medium="8" compact="4">
                        <md-grid>
                            <md-grid-column expanded="12" medium="8" compact="8">
                                <h3>Checkbox</h3>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox checked></md-checkbox>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox checked disabled></md-checkbox>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox indeterminate></md-checkbox>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox indeterminate disabled></md-checkbox>
                            </md-grid-column>

                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox></md-checkbox>
                            </md-grid-column>
                            <md-grid-column expanded="6" medium="4" compact="4">
                                <md-checkbox disabled></md-checkbox>
                            </md-grid-column>

                        </md-grid>
                    </md-grid-column>
                    
                    <md-grid-column expanded="12">
                        <md-button color="outlined" type="reset" label="Reset"></md-button>
                        <md-button color="tonal" type="submit" label="Submit"></md-button>
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
customElements.define("demo-checkbox", DemoCheckbox);
export default document.createElement("demo-checkbox");
