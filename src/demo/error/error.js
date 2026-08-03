import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoError extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>Error</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-error", DemoError);
export default document.createElement("demo-error");
