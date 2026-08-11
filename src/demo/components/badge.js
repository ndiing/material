import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoBadge extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
             <md-grid class="demo-grid">

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-badge></md-badge>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-badge></md-badge>
                </md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-badge label="1"></md-badge>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-badge label="PLAY"></md-badge>
                </md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-badge label="1000" max="999"></md-badge>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-badge label="PLAYER" maxLength="4"></md-badge>
                </md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-badge", DemoBadge);
export default document.createElement("demo-badge");
