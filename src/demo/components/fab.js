import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoFab extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid>
                
                <md-grid-column>
                    <md-fab icon="edit" size="small"></md-fab>
                    <md-fab icon="edit" size="medium"></md-fab>
                    <md-fab icon="edit" size="large"></md-fab>
                </md-grid-column>
                <md-grid-column>
                    <md-fab icon="edit" color="primary-container"></md-fab>
                    <md-fab icon="edit" color="secondary-container"></md-fab>
                    <md-fab icon="edit" color="tertiary-container"></md-fab>
                    <md-fab icon="edit" color="primary"></md-fab>
                    <md-fab icon="edit" color="secondary"></md-fab>
                    <md-fab icon="edit" color="tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>
                

                <md-grid-column>
                    <md-fab unelevated icon="edit" size="small"></md-fab>
                    <md-fab unelevated icon="edit" size="medium"></md-fab>
                    <md-fab unelevated icon="edit" size="large"></md-fab>
                </md-grid-column>
                <md-grid-column>
                    <md-fab unelevated icon="edit" color="primary-container"></md-fab>
                    <md-fab unelevated icon="edit" color="secondary-container"></md-fab>
                    <md-fab unelevated icon="edit" color="tertiary-container"></md-fab>
                    <md-fab unelevated icon="edit" color="primary"></md-fab>
                    <md-fab unelevated icon="edit" color="secondary"></md-fab>
                    <md-fab unelevated icon="edit" color="tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column>
                    <md-fab label="Compose" icon="edit" size="small"></md-fab>
                    <md-fab label="Compose" icon="edit" size="medium"></md-fab>
                    <md-fab label="Compose" icon="edit" size="large"></md-fab>
                </md-grid-column>
                <md-grid-column>
                    <md-fab label="Compose" icon="edit" color="primary-container"></md-fab>
                    <md-fab label="Compose" icon="edit" color="secondary-container"></md-fab>
                    <md-fab label="Compose" icon="edit" color="tertiary-container"></md-fab>
                    <md-fab label="Compose" icon="edit" color="primary"></md-fab>
                    <md-fab label="Compose" icon="edit" color="secondary"></md-fab>
                    <md-fab label="Compose" icon="edit" color="tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column>
                    <md-fab label="Compose" size="small"></md-fab>
                    <md-fab label="Compose" size="medium"></md-fab>
                    <md-fab label="Compose" size="large"></md-fab>
                </md-grid-column>
                <md-grid-column>
                    <md-fab label="Compose" color="primary-container"></md-fab>
                    <md-fab label="Compose" color="secondary-container"></md-fab>
                    <md-fab label="Compose" color="tertiary-container"></md-fab>
                    <md-fab label="Compose" color="primary"></md-fab>
                    <md-fab label="Compose" color="secondary"></md-fab>
                    <md-fab label="Compose" color="tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column>
                    <md-fab unelevated label="Compose" icon="edit" size="small"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" size="medium"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" size="large"></md-fab>
                </md-grid-column>
                <md-grid-column>
                    <md-fab unelevated label="Compose" icon="edit" color="primary-container"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" color="secondary-container"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" color="tertiary-container"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" color="primary"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" color="secondary"></md-fab>
                    <md-fab unelevated label="Compose" icon="edit" color="tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column>
                    <md-fab unelevated label="Compose" size="small"></md-fab>
                    <md-fab unelevated label="Compose" size="medium"></md-fab>
                    <md-fab unelevated label="Compose" size="large"></md-fab>
                </md-grid-column>
                <md-grid-column>
                    <md-fab unelevated label="Compose" color="primary-container"></md-fab>
                    <md-fab unelevated label="Compose" color="secondary-container"></md-fab>
                    <md-fab unelevated label="Compose" color="tertiary-container"></md-fab>
                    <md-fab unelevated label="Compose" color="primary"></md-fab>
                    <md-fab unelevated label="Compose" color="secondary"></md-fab>
                    <md-fab unelevated label="Compose" color="tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-fab", DemoFab);
export default document.createElement("demo-fab");
