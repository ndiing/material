import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoDatetimePicker extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <md-grid-column expanded="6">
                    <md-datetime-picker value="1990-10-17T23:45"></md-datetime-picker>
                </md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-datetime-picker", DemoDatetimePicker);
export default document.createElement("demo-datetime-picker");
