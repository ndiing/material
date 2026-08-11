import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoCard extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid style="margin: 24px;">
                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-card color="elevated">
                        <md-card-header>header</md-card-header>
                        <md-card-body>
                            <md-card-main>main</md-card-main>
                            <md-card-footer>footer</md-card-footer>
                        </md-card-body>
                    </md-card>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-card color="filled">
                        <md-card-header>header</md-card-header>
                        <md-card-body>
                            <md-card-main>main</md-card-main>
                            <md-card-footer>footer</md-card-footer>
                        </md-card-body>
                    </md-card>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="4" compact="4">
                    <md-card color="outlined">
                        <md-card-header>header</md-card-header>
                        <md-card-body>
                            <md-card-main>main</md-card-main>
                            <md-card-footer>footer</md-card-footer>
                        </md-card-body>
                    </md-card>
                </md-grid-column>
                <md-grid-column expanded="6" medium="4" compact="4"></md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-card", DemoCard);
export default document.createElement("demo-card");
