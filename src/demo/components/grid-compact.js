import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGridCompact extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-grid">
                <div class="md-grid__column md-grid__column--compact1">compact1</div>
                <div class="md-grid__column md-grid__column--compact3">compact3</div>
                <div class="md-grid__column md-grid__column--compact2">compact2</div>
                <div class="md-grid__column md-grid__column--compact2">compact2</div>
                <div class="md-grid__column md-grid__column--compact4">compact4</div>
            </div>
        `
    }
}
customElements.define("demo-grid-compact", DemoGridCompact);
export default document.createElement("demo-grid-compact");
