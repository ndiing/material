import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTypography extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-grid class="demo-grid">
                
                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--display-large">Display Large</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--display-medium">Display Medium</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--display-small">Display Small</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--headline-large">Headline Large</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--headline-medium">Headline Medium</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--headline-small">Headline Small</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--title-large">Title Large</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--title-medium">Title Medium</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--title-small">Title Small</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--body-large">Body Large</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--body-medium">Body Medium</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--body-small">Body Small</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--label-large">Label Large</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--label-medium">Label Medium</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

                <md-grid-column expanded="6" medium="6" compact="4">
                    <div class="md-typography--label-small">Label Small</div>
                </md-grid-column>
                <md-grid-column expanded="6" medium="6" compact="4"></md-grid-column>

            </md-grid>
        `
    }
}
customElements.define("demo-typography", DemoTypography);
export default document.createElement("demo-typography");
