import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoIconButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`

            <h2>Variants</h2>
            <md-icon-button  icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
            <md-icon-button variant="toggle" selected .icon="${["menu","menu_open"]}"></md-icon-button>

            <br>
            <br>

            <h2>Configurations</h2>

            <h3>Size</h3>

            <md-icon-button color="tonal" size="extra-small"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" size="small"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" size="medium"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" size="large"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" size="extra-large"  icon="edit"></md-icon-button>

            <br>
            <br>

            <h3>Shape</h3>

            <md-icon-button color="outlined" shape="round" icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="square" icon="edit"></md-icon-button>

            <br>
            <br>

            <h3>Color</h3>

            <md-icon-button color="filled" icon="edit"></md-icon-button>
            <md-icon-button color="tonal" icon="edit"></md-icon-button>
            <md-icon-button color="outlined" icon="edit"></md-icon-button>
            <md-icon-button color="standard" icon="edit"></md-icon-button>

            <br>
            <br>

            <h3>Width</h3>

            <md-icon-button width="narrow" color="filled" icon="edit"></md-icon-button>
            <md-icon-button width="default" color="filled" icon="edit"></md-icon-button>
            <md-icon-button width="wide" color="filled" icon="edit"></md-icon-button>

            <br>
            <br>

            <h2>States</h2>


            <h3>Default</h3>
            <md-icon-button color="filled" icon="edit"></md-icon-button>
            <md-icon-button disabled color="filled" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="tonal" icon="edit"></md-icon-button>
            <md-icon-button disabled color="tonal" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="outlined" icon="edit"></md-icon-button>
            <md-icon-button disabled color="outlined" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="standard" icon="edit"></md-icon-button>
            <md-icon-button disabled color="standard" icon="edit"></md-icon-button>

            <br>
            <br>

            <h3>Toggle</h3>
            <md-icon-button color="filled" icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" selected color="filled" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="tonal" icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" selected color="tonal" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="outlined" icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" selected color="outlined" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="standard" icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" selected color="standard" icon="edit"></md-icon-button>

            <br>
            <br>

            <h2>Shape morph</h2>
            <h3>When selected</h3>

            <md-icon-button color="tonal" shape="round" icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" selected color="tonal" shape="round" icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="tonal" shape="square" icon="edit"></md-icon-button>
            <md-icon-button variant="toggle" selected color="tonal" shape="square" icon="edit"></md-icon-button>

            <br>
            <br>

            <h2>Measurements</h2>

            <md-icon-button color="outlined" size="extra-small"  icon="edit"></md-icon-button>
            <md-icon-button color="filled" size="extra-small"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="narrow" size="extra-small"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="wide" size="extra-small"  icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="outlined" size="small"  icon="edit"></md-icon-button>
            <md-icon-button color="filled" size="small"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="narrow" size="small"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="wide" size="small"  icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="outlined" size="medium"  icon="edit"></md-icon-button>
            <md-icon-button color="filled" size="medium"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="narrow" size="medium"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="wide" size="medium"  icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="outlined" size="large"  icon="edit"></md-icon-button>
            <md-icon-button color="filled" size="large"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="narrow" size="large"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="wide" size="large"  icon="edit"></md-icon-button>

            <br>
            <br>

            <md-icon-button color="outlined" size="extra-large"  icon="edit"></md-icon-button>
            <md-icon-button color="filled" size="extra-large"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="narrow" size="extra-large"  icon="edit"></md-icon-button>
            <md-icon-button color="tonal" width="wide" size="extra-large"  icon="edit"></md-icon-button>

            <br>
            <br>

            <h3>Button corner radius</h3>

            
            <md-icon-button color="outlined" shape="round" size="extra-small"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="round" size="small"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="round" size="medium"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="round" size="large"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="round" size="extra-large"  icon="edit"></md-icon-button>

            <br>
            <br>

            
            <md-icon-button color="outlined" shape="square" size="extra-small"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="square" size="small"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="square" size="medium"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="square" size="large"  icon="edit"></md-icon-button>
            <md-icon-button color="outlined" shape="square" size="extra-large"  icon="edit"></md-icon-button>


        `
    }
}
customElements.define("demo-icon-button", DemoIconButton);
export default document.createElement("demo-icon-button");
