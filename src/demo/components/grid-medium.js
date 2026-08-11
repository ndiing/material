import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGridMedium extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">
                <md-grid-column class="demo-grid__column" medium="1">1</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="7">7</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="2">2</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="6">6</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="3">3</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="5">5</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="4">4</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="4">4</md-grid-column>
                <md-grid-column class="demo-grid__column" medium="8">8</md-grid-column>
            </md-grid>
        `
    }
}
customElements.define("demo-grid-medium", DemoGridMedium);
export default document.createElement("demo-grid-medium");
