import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGridExpanded extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-grid">
                <div class="md-grid__column md-grid__column--expanded1">expanded1</div>
                <div class="md-grid__column md-grid__column--expanded11">expanded11</div>
                <div class="md-grid__column md-grid__column--expanded2">expanded2</div>
                <div class="md-grid__column md-grid__column--expanded10">expanded10</div>
                <div class="md-grid__column md-grid__column--expanded3">expanded3</div>
                <div class="md-grid__column md-grid__column--expanded9">expanded9</div>
                <div class="md-grid__column md-grid__column--expanded4">expanded4</div>
                <div class="md-grid__column md-grid__column--expanded8">expanded8</div>
                <div class="md-grid__column md-grid__column--expanded5">expanded5</div>
                <div class="md-grid__column md-grid__column--expanded7">expanded7</div>
                <div class="md-grid__column md-grid__column--expanded6">expanded6</div>
                <div class="md-grid__column md-grid__column--expanded6">expanded6</div>
                <div class="md-grid__column md-grid__column--expanded12">expanded12</div>
            </div>
        `
    }
}
customElements.define("demo-grid-expanded", DemoGridExpanded);
export default document.createElement("demo-grid-expanded");
