import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoIconButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`

            <div>variant="default"</div>
            <br>
            <md-icon-button variant="default" color="filled" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button variant="default" color="tonal" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button variant="default" color="outlined" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button variant="default" color="standard" icon="thumb_up_off_alt"></md-icon-button>


            <br>
            <br>
            
            <div>variant="toggle"</div>
            <br>
            <md-icon-button variant="toggle" color="filled" icon='["menu","menu_open"]'></md-icon-button>
            <md-icon-button variant="toggle" color="tonal" icon='["menu","menu_open"]'></md-icon-button>
            <md-icon-button variant="toggle" color="outlined" icon='["menu","menu_open"]'></md-icon-button>
            <md-icon-button variant="toggle" color="standard" icon='["menu","menu_open"]'></md-icon-button>
            
            <div>variant="toggle" selected</div>
            <br>
            <md-icon-button selected variant="toggle" color="filled" .icon="${["menu","menu_open"]}"></md-icon-button>
            <md-icon-button selected variant="toggle" color="tonal" .icon="${["menu","menu_open"]}"></md-icon-button>
            <md-icon-button selected variant="toggle" color="outlined" .icon="${["menu","menu_open"]}"></md-icon-button>
            <md-icon-button selected variant="toggle" color="standard" .icon="${["menu","menu_open"]}"></md-icon-button>


            <br>
            <br>

            <div>size</div>
            <br>
            <md-icon-button size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button size="extra-large" icon="thumb_up_off_alt"></md-icon-button>

            <br>
            <br>

            <div>shape="round"</div>
            <br>
            <md-icon-button shape="round" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="round" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="round" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="round" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="round" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>

            <br>
            <br>

            <div>shape="round" selected</div>
            <br>
            <md-icon-button selected shape="round" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="round" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="round" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="round" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="round" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>

            <br>
            <br>

            <div>shape="square"</div>
            <br>
            <md-icon-button shape="square" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="square" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="square" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="square" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button shape="square" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>

            <br>
            <br>

            <div>shape="square" selected</div>
            <br>
            <md-icon-button selected shape="square" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="square" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="square" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="square" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button selected shape="square" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>

            <br>
            <br>

            <div>color</div>
            <br>
            <md-icon-button color="filled" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button color="tonal" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button color="outlined" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button color="standard" icon="thumb_up_off_alt"></md-icon-button>

            <br>
            <br>

            <div>width="narrow"</div>
            <br>
            <md-icon-button width="narrow" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="narrow" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="narrow" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="narrow" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="narrow" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>
            
            <br>
            <br>

            <div>width="default"</div>
            <br>
            <md-icon-button width="default" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="default" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="default" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="default" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="default" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>
            
            <br>
            <br>

            <div>width="wide"</div>
            <br>
            <md-icon-button width="wide" size="extra-small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="wide" size="small" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="wide" size="medium" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="wide" size="large" icon="thumb_up_off_alt"></md-icon-button>
            <md-icon-button width="wide" size="extra-large" icon="thumb_up_off_alt"></md-icon-button>

        `
    }
}
customElements.define("demo-icon-button", DemoIconButton);
export default document.createElement("demo-icon-button");
