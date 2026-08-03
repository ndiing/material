import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGridMedium extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-grid">
                <div class="md-grid__column md-grid__column--medium1">medium1</div>
                <div class="md-grid__column md-grid__column--medium7">medium7</div>
                <div class="md-grid__column md-grid__column--medium2">medium2</div>
                <div class="md-grid__column md-grid__column--medium6">medium6</div>
                <div class="md-grid__column md-grid__column--medium3">medium3</div>
                <div class="md-grid__column md-grid__column--medium5">medium5</div>
                <div class="md-grid__column md-grid__column--medium4">medium4</div>
                <div class="md-grid__column md-grid__column--medium4">medium4</div>
                <div class="md-grid__column md-grid__column--medium8">medium8</div>
            </div>
        `
    }
}
customElements.define("demo-grid-medium", DemoGridMedium);
export default document.createElement("demo-grid-medium");
