import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            
            <md-grid class="demo-grid">
                
                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Default button</h3>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Toggle button</h3>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Size</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-button color="tonal" size="extra-small" label="Label"></md-button>
                            <md-button color="tonal" size="small" label="Label"></md-button>
                            <md-button color="tonal" size="medium" label="Label"></md-button>
                            <md-button color="tonal" size="large" label="Label"></md-button>
                            <md-button color="tonal" size="extra-large" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Shape</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-button color="outlined" shape="round" label="Label"></md-button>
                            <md-button color="outlined" shape="square" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Color</h3>
                        </md-grid-column>
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-button color="elevated" label="Label"></md-button>
                            <md-button color="filled" label="Label"></md-button>
                            <md-button color="tonal" label="Label"></md-button>
                            <md-button color="outlined" label="Label"></md-button>
                            <md-button color="text" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>
                

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Toggle button + Color</h3>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="elevated" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="elevated" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="elevated" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="filled" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="filled" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="filled" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="tonal" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="tonal" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="tonal" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="outlined" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="outlined" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="outlined" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="text" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="text" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-button color="text" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Toggle button + Shape</h3>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" shape="round" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" shape="round" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" shape="square" variant="toggle" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" shape="square" variant="toggle" selected icon="edit" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Default button + Size</h3>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="extra-small" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="extra-small" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="small" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="small" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="medium" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="medium" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="large" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="large" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="extra-large" label="Label"></md-button>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-button color="tonal" size="extra-large" icon="edit" label="Label"></md-button>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>

            </md-grid>

            
        `
    }
}
customElements.define("demo-button", DemoButton);
// export default document.createElement("demo-button");
export default new DemoButton();
