import { html } from "lit";
import { MdComponent } from "../../material/component/component";



class DemoIcon extends MdComponent {
    render() {
        return html`
            <md-layout>
                <md-layout-grid>
                    <md-layout-column expanded="4" medium="4" compact="4">4</md-layout-column>
                    <md-layout-column expanded="4" medium="4" compact="4">4</md-layout-column>
                    <md-layout-column expanded="4" medium="4" compact="4">4</md-layout-column>
                </md-layout-grid>
            </md-layout>
        `;
    }
}
customElements.define("demo-test", DemoIcon);
export default document.createElement("demo-test");
