import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoC extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>C</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-c", DemoC);
export default document.createElement("demo-c");
