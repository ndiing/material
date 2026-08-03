import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoSwitch extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <md-form 
                @onFormNativeFormdata="${this.handleDemoSwitchFormNativeFormdata}" 
                @onFormNativeReset="${this.handleDemoSwitchFormNativeReset}" 
                @onFormNativeSubmit="${this.handleDemoSwitchFormNativeSubmit}"
            >
                <div class="md-grid">
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch></md-switch>
                        <md-switch disabled></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch checked></md-switch>
                        <md-switch disabled checked></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch icon='["","done"]'></md-switch>
                        <md-switch icon='["","done"]' disabled></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch icon='["","done"]' checked></md-switch>
                        <md-switch icon='["","done"]' disabled checked></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch icon='["close","done"]'></md-switch>
                        <md-switch icon='["close","done"]' disabled></md-switch>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-switch icon='["close","done"]' checked></md-switch>
                        <md-switch icon='["close","done"]' disabled checked></md-switch>
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

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        await this.updateComplete;
    }

    handleDemoSwitchFormNativeFormdata(event) {
        console.log(Object.fromEntries(event.detail.formData.entries()));
    }

    handleDemoSwitchFormNativeReset(event) {}

    handleDemoSwitchFormNativeSubmit(event) {}
}
customElements.define("demo-switch", DemoSwitch);
export default document.createElement("demo-switch");
