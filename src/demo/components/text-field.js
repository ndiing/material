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
                <md-grid class="demo-grid">
                    
                    <!-- filled -->
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" clearable type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" prefix="$" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" suffix="lbs" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="filled" type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </md-grid-column>
                    

                    <!-- outlined -->
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </md-grid-column>

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" clearable type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" prefix="$" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" suffix="lbs" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" color="outlined" type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </md-grid-column>
                    
                    <!-- standard -->
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label" supporting="Supporting text"></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label" supporting="Supporting text" value="Input"></md-text-field>
                    </md-grid-column>
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" clearable type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" .leading="${[{component:'icon',icon:'search'}]}" clearable type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    

                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" prefix="$" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" prefix="$" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" suffix="lbs" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" suffix="lbs" type="text" label="Label"  value="Input"></md-text-field>
                    </md-grid-column>
                    
                    
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label" ></md-text-field>
                    </md-grid-column>
                    <md-grid-column expanded="6" medium="4" compact="4">
                        <md-text-field required placeholder="Placeholder" type="text" label="Label"  value="This is a long input in a multi-line text field that wraps overflow text onto a new line"></md-text-field>
                    </md-grid-column>
                    


                    <md-grid-column expanded="12">
                        <md-button color="tonal" type="reset" label="reset"></md-button>
                        <md-button color="tonal" type="submit" label="submit"></md-button>
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
customElements.define("demo-text-field", DemoTextField);
export default document.createElement("demo-text-field");
