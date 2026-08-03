import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoUsers extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-users", DemoUsers);
export default document.createElement("demo-users");
