import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoUser extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>User</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-user", DemoUser);
export default document.createElement("demo-user");
