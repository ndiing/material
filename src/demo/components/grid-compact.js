import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoGridCompact extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid >
                <md-grid-column compact="1">1</md-grid-column>
                <md-grid-column compact="3">3</md-grid-column>
                <md-grid-column compact="2">2</md-grid-column>
                <md-grid-column compact="2">2</md-grid-column>
                <md-grid-column compact="4">4</md-grid-column>
            </md-grid>
        `
    }
}
customElements.define("demo-grid-compact", DemoGridCompact);
export default document.createElement("demo-grid-compact");
