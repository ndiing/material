import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoBadge extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-badge></md-badge>
            <md-badge label="1"></md-badge>
            <md-badge label="1000"></md-badge>
        `
    }
}
customElements.define("demo-badge", DemoBadge);
export default document.createElement("demo-badge");
