import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoCheckbox extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <md-form 
                @onFormNativeFormdata="${this.handleDemoCheckboxFormNativeFormdata}" 
                @onFormNativeReset="${this.handleDemoCheckboxFormNativeReset}" 
                @onFormNativeSubmit="${this.handleDemoCheckboxFormNativeSubmit}"
            >
                <div class="md-grid">
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox></md-checkbox>
                        <md-checkbox disabled></md-checkbox>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox indeterminate></md-checkbox>
                        <md-checkbox disabled indeterminate></md-checkbox>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox checked></md-checkbox>
                        <md-checkbox disabled checked></md-checkbox>
                    </div>

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox id="checkbox0" required></md-checkbox>
                        <md-checkbox id="checkbox1" required disabled></md-checkbox>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox id="checkbox2" required indeterminate></md-checkbox>
                        <md-checkbox id="checkbox3" required disabled indeterminate></md-checkbox>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-checkbox id="checkbox4" required checked></md-checkbox>
                        <md-checkbox id="checkbox5" required disabled checked></md-checkbox>
                    </div>

                    <div class="md-grid__column md-grid__column--expanded12">
                        <md-button type="reset" label="reset" color="outlined"></md-button>
                        <md-button type="submit" label="submit" color="tonal"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        await this.updateComplete;

        [checkbox0, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5].forEach((s) => {
            s.checkboxNative.value.setCustomValidity("test error");
            s.validate();
        });
    }

    handleDemoCheckboxFormNativeFormdata(event) {
        console.log(Object.fromEntries(event.detail.formData.entries()));
    }

    handleDemoCheckboxFormNativeReset(event) {}

    handleDemoCheckboxFormNativeSubmit(event) {}
}
customElements.define("demo-checkbox", DemoCheckbox);
export default document.createElement("demo-checkbox");
