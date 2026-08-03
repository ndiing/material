import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-button size="extra-small" icon="person" label="extra-small"></md-button>
            <md-button size="small" icon="person" label="small"></md-button>
            <md-button size="medium" icon="person" label="medium"></md-button>
            <md-button size="large" icon="person" label="large"></md-button>
            <md-button size="extra-large" icon="person" label="extra-large"></md-button>

            
            <br>
            <br>

            <md-button shape="round" size="extra-small" icon="person" label="round"></md-button>
            <md-button shape="round" size="small" icon="person" label="round"></md-button>
            <md-button shape="round" size="medium" icon="person" label="round"></md-button>
            <md-button shape="round" size="large" icon="person" label="round"></md-button>
            <md-button shape="round" size="extra-large" icon="person" label="round"></md-button>
            
            <br>
            <br>

            <md-button variant="toggle" selected shape="round" size="extra-small" icon="person" label="round"></md-button>
            <md-button variant="toggle" selected shape="round" size="small" icon="person" label="round"></md-button>
            <md-button variant="toggle" selected shape="round" size="medium" icon="person" label="round"></md-button>
            <md-button variant="toggle" selected shape="round" size="large" icon="person" label="round"></md-button>
            <md-button variant="toggle" selected shape="round" size="extra-large" icon="person" label="round"></md-button>

            <br>
            <br>

            <md-button shape="square" size="extra-small" icon="person" label="square"></md-button>
            <md-button shape="square" size="small" icon="person" label="square"></md-button>
            <md-button shape="square" size="medium" icon="person" label="square"></md-button>
            <md-button shape="square" size="large" icon="person" label="square"></md-button>
            <md-button shape="square" size="extra-large" icon="person" label="square"></md-button>
            
            <br>
            <br>

            <br>
            <br>

            <md-button variant="toggle" selected shape="square" size="extra-small" icon="person" label="square"></md-button>
            <md-button variant="toggle" selected shape="square" size="small" icon="person" label="square"></md-button>
            <md-button variant="toggle" selected shape="square" size="medium" icon="person" label="square"></md-button>
            <md-button variant="toggle" selected shape="square" size="large" icon="person" label="square"></md-button>
            <md-button variant="toggle" selected shape="square" size="extra-large" icon="person" label="square"></md-button>
            
            <br>
            <br>

            <md-button color="elevated" icon="person" label="elevated"></md-button>
            <md-button color="filled" icon="person" label="filled"></md-button>
            <md-button color="tonal" icon="person" label="tonal"></md-button>
            <md-button color="outlined" icon="person" label="outlined"></md-button>
            <md-button color="text" icon="person" label="text"></md-button>
            
            <br>
            <br>

            <md-button variant="toggle" color="elevated" icon="person" label="elevated"></md-button>
            <md-button variant="toggle" color="filled" icon="person" label="filled"></md-button>
            <md-button variant="toggle" color="tonal" icon="person" label="tonal"></md-button>
            <md-button variant="toggle" color="outlined" icon="person" label="outlined"></md-button>
            <md-button variant="toggle" color="text" icon="person" label="text"></md-button>
            
            <br>
            <br>

            <md-button selected variant="toggle" color="elevated" icon="person" label="elevated"></md-button>
            <md-button selected variant="toggle" color="filled" icon="person" label="filled"></md-button>
            <md-button selected variant="toggle" color="tonal" icon="person" label="tonal"></md-button>
            <md-button selected variant="toggle" color="outlined" icon="person" label="outlined"></md-button>
            <md-button selected variant="toggle" color="text" icon="person" label="text"></md-button>
            
            <br>
            <br>

            <md-button disabled variant="toggle" color="elevated" icon="person" label="elevated"></md-button>
            <md-button disabled variant="toggle" color="filled" icon="person" label="filled"></md-button>
            <md-button disabled variant="toggle" color="tonal" icon="person" label="tonal"></md-button>
            <md-button disabled variant="toggle" color="outlined" icon="person" label="outlined"></md-button>
            <md-button disabled variant="toggle" color="text" icon="person" label="text"></md-button>
            
            <br>
            <br>

            <md-button selected disabled variant="toggle" color="elevated" icon="person" label="elevated"></md-button>
            <md-button selected disabled variant="toggle" color="filled" icon="person" label="filled"></md-button>
            <md-button selected disabled variant="toggle" color="tonal" icon="person" label="tonal"></md-button>
            <md-button selected disabled variant="toggle" color="outlined" icon="person" label="outlined"></md-button>
            <md-button selected disabled variant="toggle" color="text" icon="person" label="text"></md-button>
        `
    }
}
customElements.define("demo-button", DemoButton);
export default document.createElement("demo-button");
