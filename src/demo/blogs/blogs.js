import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoBlogs extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <h1>Blogs</h1>
            <!-- <md-outlet></md-outlet> -->
        `
    }
}
customElements.define("demo-blogs", DemoBlogs);
export default document.createElement("demo-blogs");
