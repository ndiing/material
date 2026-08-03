import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGrid extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-grid">
                <div class="md-grid__column md-grid__column--expanded1 md-grid__column--medium1 md-grid__column--compact1">1/1/1</div>
                <div class="md-grid__column md-grid__column--expanded11 md-grid__column--medium7 md-grid__column--compact3">11/7/3</div>
                <div class="md-grid__column md-grid__column--expanded2 md-grid__column--medium2 md-grid__column--compact2">2/2/2</div>
                <div class="md-grid__column md-grid__column--expanded10 md-grid__column--medium6 md-grid__column--compact2">10/6/2</div>
                <div class="md-grid__column md-grid__column--expanded3 md-grid__column--medium3 md-grid__column--compact1">3/3/1</div>
                <div class="md-grid__column md-grid__column--expanded9 md-grid__column--medium5 md-grid__column--compact3">9/5/3</div>
                <div class="md-grid__column md-grid__column--expanded4 md-grid__column--medium4 md-grid__column--compact2">4/4/2</div>
                <div class="md-grid__column md-grid__column--expanded8 md-grid__column--medium4 md-grid__column--compact2">8/4/2</div>
                <div class="md-grid__column md-grid__column--expanded5 md-grid__column--medium3 md-grid__column--compact1">5/3/1</div>
                <div class="md-grid__column md-grid__column--expanded7 md-grid__column--medium5 md-grid__column--compact3">7/5/3</div>
                <div class="md-grid__column md-grid__column--expanded6 md-grid__column--medium2 md-grid__column--compact2">6/2/2</div>
                <div class="md-grid__column md-grid__column--expanded6 md-grid__column--medium6 md-grid__column--compact2">6/6/2</div>
                <div class="md-grid__column md-grid__column--expanded12 md-grid__column--medium8 md-grid__column--compact4">12/8/4</div>
            </div>
        `
    }
}
customElements.define("demo-grid", DemoGrid);
export default document.createElement("demo-grid");
