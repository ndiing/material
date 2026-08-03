import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoA extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>A</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-a", DemoA);
export default document.createElement("demo-a");
