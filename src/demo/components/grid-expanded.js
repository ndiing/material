import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGridExpanded extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">
                <md-grid-column class="demo-grid__column" expanded="1">1</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="11">11</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="2">2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="10">10</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="3">3</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="9">9</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="4">4</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="8">8</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="5">5</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="7">7</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="6">6</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="6">6</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="12">12</md-grid-column>
            </md-grid>
        `
    }
}
customElements.define("demo-grid-expanded", DemoGridExpanded);
export default document.createElement("demo-grid-expanded");
