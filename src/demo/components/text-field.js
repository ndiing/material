import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTextField extends MdElement {
    /* prettier-ignore */
    render() {
        return html`
            <form 
                @formdata="${this.handleFormdata}" 
                @reset="${this.handleReset}" 
                @submit="${this.handleSubmit}"
            >
                <div class="md-grid">
                    
                    <!-- filled -->
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" maxLength="10" clearable color="filled" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" maxLength="10" clearable color="filled" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" prefix="$" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" suffix="lbs" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <!-- outlined -->
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" maxLength="10" clearable color="outlined" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" maxLength="10" clearable color="outlined" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" prefix="$" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" suffix="lbs" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    <!-- standard -->
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" maxLength="10" clearable type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" maxLength="10" clearable type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    

                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" prefix="$" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" suffix="lbs" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    
                    
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label" ></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </div>
                    <div class="md-grid__column md-grid__column--expanded4"></div>
                    


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
customElements.define("demo-text-field", DemoTextField);
export default document.createElement("demo-text-field");
