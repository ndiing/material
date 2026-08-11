import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            
            <md-grid style="margin: 24px;">
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button icon="edit" label="Label"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                </md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button variant="toggle" icon="edit" label="Toggle"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button variant="toggle" selected icon="edit" label="Toggle"></md-button>
                </md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="extra-small" variant="toggle" icon="edit" label="Extra Small"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="extra-small" variant="toggle" selected icon="edit" label="Extra Small"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="small" variant="toggle" icon="edit" label="Small"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="small" variant="toggle" selected icon="edit" label="Small"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="medium" variant="toggle" icon="edit" label="Medium"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="medium" variant="toggle" selected icon="edit" label="Medium"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="large" variant="toggle" icon="edit" label="Large"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="large" variant="toggle" selected icon="edit" label="Large"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="extra-large" variant="toggle" icon="edit" label="Extra Large"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button size="extra-large" variant="toggle" selected icon="edit" label="Extra Large"></md-button>
                </md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button shape="round" variant="toggle" icon="edit" label="Round"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button shape="round" variant="toggle" selected icon="edit" label="Round"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button shape="square" variant="toggle" icon="edit" label="Square"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button shape="square" variant="toggle" selected icon="edit" label="Square"></md-button>
                </md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="elevated" variant="toggle" icon="edit" label="Elevated"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="elevated" variant="toggle" selected icon="edit" label="Elevated"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="filled" variant="toggle" icon="edit" label="Filled"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="filled" variant="toggle" selected icon="edit" label="Filled"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="tonal" variant="toggle" icon="edit" label="Tonal"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="tonal" variant="toggle" selected icon="edit" label="Tonal"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="outlined" variant="toggle" icon="edit" label="Outlined"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="outlined" variant="toggle" selected icon="edit" label="Outlined"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="text" variant="toggle" icon="edit" label="Text"></md-button>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-button color="text" variant="toggle" selected icon="edit" label="Text"></md-button>
                </md-grid-column>

            </md-grid>

            
        `
    }
}
customElements.define("demo-button", DemoButton);
// export default document.createElement("demo-button");
export default new DemoButton();
