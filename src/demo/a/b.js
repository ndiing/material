import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoB extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>B</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-b", DemoB);
export default document.createElement("demo-b");
