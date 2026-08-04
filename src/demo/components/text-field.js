import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTextField extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <md-form 
                @onFormNativeFormdata="${this.handleDemoTextFieldFormNativeFormdata}" 
                @onFormNativeReset="${this.handleDemoTextFieldFormNativeReset}" 
                @onFormNativeSubmit="${this.handleDemoTextFieldFormNativeSubmit}"
            >
                <div class="md-grid">

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field prefix="$" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field suffix="lbs" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    


                    <div class="md-grid__column md-grid__column--expanded12">
                        <md-button type="reset" label="reset"></md-button>
                        <md-button type="submit" label="submit"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleDemoTextFieldFormNativeFormdata(event) {
        console.log(Object.fromEntries(event.detail.formData.entries()));
    }

    handleDemoTextFieldFormNativeReset(event) {}

    handleDemoTextFieldFormNativeSubmit(event) {}
}
customElements.define("demo-text-field", DemoTextField);
export default document.createElement("demo-text-field");
