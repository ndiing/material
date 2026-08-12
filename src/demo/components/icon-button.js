import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoIconButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Default icon button</h3>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="filled" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Toggle icon button</h3>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="filled" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="filled" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Five sizes</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-icon-button color="tonal" size="extra-small" icon="menu"></md-icon-button>
                            <md-icon-button color="tonal" size="small" icon="menu"></md-icon-button>
                            <md-icon-button color="tonal" size="medium" icon="menu"></md-icon-button>
                            <md-icon-button color="tonal" size="large" icon="menu"></md-icon-button>
                            <md-icon-button color="tonal" size="extra-large" icon="menu"></md-icon-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Two shapes</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-icon-button color="outlined" shape="round" icon="menu"></md-icon-button>
                            <md-icon-button color="outlined" shape="square" icon="menu"></md-icon-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Four color styles</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-icon-button color="filled" icon="menu"></md-icon-button>
                            <md-icon-button color="tonal" icon="menu"></md-icon-button>
                            <md-icon-button color="outlined" icon="menu"></md-icon-button>
                            <md-icon-button color="standard" icon="menu"></md-icon-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Three widths</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-icon-button width="narrow" color="filled" icon="menu"></md-icon-button>
                            <md-icon-button width="default" color="filled" icon="menu"></md-icon-button>
                            <md-icon-button width="wide" color="filled" icon="menu"></md-icon-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Toggle icon button + Four color styles</h3>
                        </md-grid-column>
                        
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="filled" icon='menu'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="filled" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="filled" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="tonal" icon='menu'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="tonal" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="tonal" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="outlined" icon='menu'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="outlined" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="outlined" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="standard" icon='menu'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="standard" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-icon-button color="standard" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Toggle icon button + Two shapes</h3>
                        </md-grid-column>
                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="tonal" shape="round" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="tonal" shape="round" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="tonal" shape="square" variant="toggle" icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-icon-button color="tonal" shape="square" variant="toggle" selected icon='["menu","menu_open"]'></md-icon-button>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Five sizes + Three widths</h3>
                        </md-grid-column>

                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="outlined" size="extra-small" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="filled" size="extra-small" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="narrow" size="extra-small" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="wide" size="extra-small" icon="menu"></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="outlined" size="small" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="filled" size="small" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="narrow" size="small" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="wide" size="small" icon="menu"></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="outlined" size="medium" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="filled" size="medium" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="narrow" size="medium" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="wide" size="medium" icon="menu"></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="outlined" size="large" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="filled" size="large" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="narrow" size="large" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="wide" size="large" icon="menu"></md-icon-button>
                        </md-grid-column>

                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="outlined" size="extra-large" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="filled" size="extra-large" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="narrow" size="extra-large" icon="menu"></md-icon-button>
                        </md-grid-column>
                        <md-grid-column expanded="3" medium="8" compact="4">
                            <md-icon-button color="tonal" width="wide" size="extra-large" icon="menu"></md-icon-button>
                        </md-grid-column>






                        
                    </md-grid>
                </md-grid-column>


            </md-grid>            
        `
    }
}
customElements.define("demo-icon-button", DemoIconButton);
export default document.createElement("demo-icon-button");
