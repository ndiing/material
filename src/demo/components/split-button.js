import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoSplitButton extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid>
                <md-grid-column expanded="12">
                    <md-split-button icon="edit" label="Label" color="elevated"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" color="elevated"></md-split-button>
                    <br>
                    <br>


                    <md-split-button icon="edit" label="Label" color="filled"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" color="filled"></md-split-button>
                    <br>
                    <br>


                    <md-split-button icon="edit" label="Label" color="tonal"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" color="tonal"></md-split-button>
                    <br>
                    <br>


                    <md-split-button icon="edit" label="Label" color="outlined"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" color="outlined"></md-split-button>
                    <br>
                    <br>


                    <br>
                    <br>

                    <md-split-button icon="edit" label="Label" size="extra-small"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" size="extra-small"></md-split-button>
                    <br>
                    <br>

                    <md-split-button icon="edit" label="Label" size="small"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" size="small"></md-split-button>
                    <br>
                    <br>

                    <md-split-button icon="edit" label="Label" size="medium"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" size="medium"></md-split-button>
                    <br>
                    <br>

                    <md-split-button icon="edit" label="Label" size="large"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" size="large"></md-split-button>
                    <br>
                    <br>

                    <md-split-button icon="edit" label="Label" size="extra-large"></md-split-button>
                    <md-split-button selected icon="edit" label="Label" size="extra-large"></md-split-button>
                    <br>
                    <br>

                    <br>
                    <br>

                    
                </md-grid-column>
            </md-grid>
        `
    }
}
customElements.define("demo-split-button", DemoSplitButton);
export default document.createElement("demo-split-button");
