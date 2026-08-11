import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoFab extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid style="margin:24px;">
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab icon="edit" unelevated></md-fab>
                </md-grid-column>
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="small" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="small" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="medium" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="medium" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="large" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="large" icon="edit" unelevated></md-fab>
                </md-grid-column>
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary-container" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary-container" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary-container" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary-container" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary-container" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary-container" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary" icon="edit" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary" icon="edit"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary" icon="edit" unelevated></md-fab>
                </md-grid-column>
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab icon="edit" label="Label"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab icon="edit" label="Label" unelevated></md-fab>
                </md-grid-column>
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="small" icon="edit" label="Small"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="small" icon="edit" label="Small" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="medium" icon="edit" label="Medium"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="medium" icon="edit" label="Medium" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="large" icon="edit" label="Large"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab size="large" icon="edit" label="Large" unelevated></md-fab>
                </md-grid-column>
                
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary-container" icon="edit" label="Primary Container"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary-container" icon="edit" label="Primary Container" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary-container" icon="edit" label="Secondary Container"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary-container" icon="edit" label="Secondary Container" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary-container" icon="edit" label="Tertiary Container"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary-container" icon="edit" label="Tertiary Container" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary" icon="edit" label="Primary"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="primary" icon="edit" label="Primary" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary" icon="edit" label="Secondary"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="secondary" icon="edit" label="Secondary" unelevated></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary" icon="edit" label="Tertiary"></md-fab>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-fab color="tertiary" icon="edit" label="Tertiary" unelevated></md-fab>
                </md-grid-column>
                
            </md-grid>
        `
    }
}
customElements.define("demo-fab", DemoFab);
export default document.createElement("demo-fab");
