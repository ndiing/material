import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoBlog extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>Blog</h1>
            <md-outlet></md-outlet>
        `
    }
}
customElements.define("demo-blog", DemoBlog);
export default document.createElement("demo-blog");
