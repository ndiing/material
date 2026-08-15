import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoTest extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            
            <div class="test">test</div>
            
        `
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
