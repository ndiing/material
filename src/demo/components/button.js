import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h3>Variants</h3>

            <md-button icon="edit" label="Label"></md-button>
            <md-button variant="toggle" icon="edit" label="Unselected"></md-button>
            <md-button variant="toggle" selected icon="edit" label="Selected"></md-button>

            <br>
            <br>

            <h2>Configurations</h2>

            <h3>Size</h3>

            <md-button size="extra-small" color="tonal" label="Extra Small"></md-button>
            <md-button size="small" color="tonal" label="Small"></md-button>
            <md-button size="medium" color="tonal" label="Medium"></md-button>
            <md-button size="large" color="tonal" label="Large"></md-button>
            <md-button size="extra-large" color="tonal" label="Extra Large"></md-button>

            
            <br>
            <br>

            <h3>Shape</h3>

            <md-button shape="round" color="outlined" label="Round"></md-button>
            <md-button shape="square" color="outlined" label="Square"></md-button>
            
            <br>
            <br>

            <h3>Color</h3>

            <md-button color="elevated" label="Elevated"></md-button>
            <md-button color="filled" label="Filled"></md-button>
            <md-button color="tonal" label="Tonal"></md-button>
            <md-button color="outlined" label="Outlined"></md-button>
            <md-button color="text" label="Text"></md-button>
            
            
            
            <br>
            <br>

            <h2>Color</h2>

            <md-button color="elevated" icon="edit" label="Elevated button"></md-button>
            <md-button variant="toggle" color="elevated" icon="edit" label="Elevated unselected"></md-button>
            <md-button variant="toggle" selected color="elevated" icon="edit" label="Elevated selected"></md-button>

            <br>
            <br>

            <md-button color="filled" icon="edit" label="Filled button"></md-button>
            <md-button variant="toggle" color="filled" icon="edit" label="Filled unselected"></md-button>
            <md-button variant="toggle" selected color="filled" icon="edit" label="Filled selected"></md-button>

            <br>
            <br>

            <md-button color="tonal" icon="edit" label="Tonal button"></md-button>
            <md-button variant="toggle" color="tonal" icon="edit" label="Tonal unselected"></md-button>
            <md-button variant="toggle" selected color="tonal" icon="edit" label="Tonal selected"></md-button>

            <br>
            <br>

            <md-button color="outlined" icon="edit" label="Outlined button"></md-button>
            <md-button variant="toggle" color="outlined" icon="edit" label="Outlined unselected"></md-button>
            <md-button variant="toggle" selected color="outlined" icon="edit" label="Outlined selected"></md-button>

            <br>
            <br>

            <md-button color="text" icon="edit" label="Text button"></md-button>
            <md-button variant="toggle" color="text" icon="edit" label="Text unselected"></md-button>
            <md-button variant="toggle" selected color="text" icon="edit" label="Text selected"></md-button>

            <br>
            <br>

            <h3>States</h3>

            
            <md-button color="elevated" label="Enabled"></md-button>
            <md-button disabled color="elevated" label="Disabled"></md-button>

            <br>
            <br>

            <md-button color="filled" label="Enabled"></md-button>
            <md-button disabled color="filled" label="Disabled"></md-button>

            <br>
            <br>

            <md-button color="tonal" label="Enabled"></md-button>
            <md-button disabled color="tonal" label="Disabled"></md-button>

            <br>
            <br>

            <md-button color="outlined" label="Enabled"></md-button>
            <md-button disabled color="outlined" label="Disabled"></md-button>

            <br>
            <br>

            <md-button color="text" label="Enabled"></md-button>
            <md-button disabled color="text" label="Disabled"></md-button>

            <br>
            <br>

            <h2>Shape morph</h2>

            <h3>When selected</h3>

            
            <md-button shape="round" color="outlined" label="Learn more"></md-button>
            <md-button variant="toggle" selected shape="round" color="outlined" label="Learn more"></md-button>

            <br>
            <br>
            
            <md-button shape="square" color="outlined" label="Learn more"></md-button>
            <md-button variant="toggle" selected shape="square" color="outlined" label="Learn more"></md-button>

            <br>
            <br>

            <h2>Measurements</h2>
            
            
            <md-button size="extra-small" color="tonal" label="Common button"></md-button>
            <md-button size="extra-small" color="tonal" icon="edit" label="Common button"></md-button>

            <br>
            <br>

            <md-button size="small" color="tonal" label="Common button"></md-button>
            <md-button size="small" color="tonal" icon="edit" label="Common button"></md-button>

            <br>
            <br>

            <md-button size="medium" color="tonal" label="Common button"></md-button>
            <md-button size="medium" color="tonal" icon="edit" label="Common button"></md-button>

            <br>
            <br>

            <md-button size="large" color="tonal" label="Common button"></md-button>
            <md-button size="large" color="tonal" icon="edit" label="Common button"></md-button>

            <br>
            <br>

            <md-button size="extra-large" color="tonal" label="Common button"></md-button>
            <md-button size="extra-large" color="tonal" icon="edit" label="Common button"></md-button>

            <br>
            <br>


            
        `
    }
}
customElements.define("demo-button", DemoButton);
// export default document.createElement("demo-button");
export default new DemoButton();
