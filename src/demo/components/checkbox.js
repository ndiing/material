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
                <div class="md-grid">
                    <div class="md-grid__column md-grid__column--expanded4">

                        <h2>States</h2>

                        <md-checkbox checked></md-checkbox>
                        <md-checkbox disabled checked></md-checkbox>

                        <br>
                        <br>

                        <md-checkbox indeterminate></md-checkbox>
                        <md-checkbox disabled indeterminate></md-checkbox>

                        <br>
                        <br>

                        <md-checkbox></md-checkbox>
                        <md-checkbox disabled></md-checkbox>

                        <br>
                        <br>

                        <md-checkbox id="checkbox0" checked></md-checkbox>
                        <md-checkbox id="checkbox1" disabled checked></md-checkbox>

                        <br>
                        <br>

                        <md-checkbox id="checkbox2" indeterminate></md-checkbox>
                        <md-checkbox id="checkbox3" disabled indeterminate></md-checkbox>

                        <br>
                        <br>

                        <md-checkbox id="checkbox4"></md-checkbox>
                        <md-checkbox id="checkbox5" disabled></md-checkbox>

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

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        await this.updateComplete;

        ["#checkbox0", "#checkbox1", "#checkbox2", "#checkbox3", "#checkbox4", "#checkbox5"].forEach((cls) => {
            const checkbox = this.querySelector(cls);
            checkbox.checkboxNative.value.setCustomValidity("errorMessage");
            checkbox.validate();
        });
    }

    handleFormdata(event) {}

    handleReset(event) {}

    handleSubmit(event) {
        event.preventDefault();
    }
}
customElements.define("demo-checkbox", DemoCheckbox);
export default document.createElement("demo-checkbox");
