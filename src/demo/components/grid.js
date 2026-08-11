import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGrid extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">
                <md-grid-column class="demo-grid__column" expanded="1" medium="1" compact="1">1/1/1</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="11" medium="7" compact="3">11/7/3</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="2" medium="2" compact="2">2/2/2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="10" medium="6" compact="2">10/6/2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="3" medium="3" compact="1">3/3/1</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="9" medium="5" compact="3">9/5/3</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="4" medium="4" compact="2">4/4/2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="8" medium="4" compact="2">8/4/2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="5" medium="3" compact="1">5/3/1</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="7" medium="5" compact="3">7/5/3</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="6" medium="2" compact="2">6/2/2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="6" medium="6" compact="2">6/6/2</md-grid-column>
                <md-grid-column class="demo-grid__column" expanded="12" medium="8" compact="4">12/8/4</md-grid-column>
            </md-grid>
        `
    }
}
customElements.define("demo-grid", DemoGrid);
export default document.createElement("demo-grid");
