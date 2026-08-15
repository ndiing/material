import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoCard extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Elevated card</h3>
                        </md-grid-column>

                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-card color="elevated">
                                <md-card-header>header</md-card-header>
                                <md-card-body>main</md-card-body>
                                <md-card-footer>footer</md-card-footer>
                            </md-card>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Filled card</h3>
                        </md-grid-column>

                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-card color="filled">
                                <md-card-header>header</md-card-header>
                                <md-card-body>main</md-card-body>
                                <md-card-footer>footer</md-card-footer>
                            </md-card>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Outlined card</h3>
                        </md-grid-column>

                        <md-grid-column expanded="4" medium="4" compact="4">
                            <md-card color="outlined">
                                <md-card-header>header</md-card-header>
                                <md-card-body>main</md-card-body>
                                <md-card-footer>footer</md-card-footer>
                            </md-card>
                        </md-grid-column>

                    </md-grid>
                </md-grid-column>




            </md-grid>
        `
    }
}
customElements.define("demo-card", DemoCard);
export default document.createElement("demo-card");
