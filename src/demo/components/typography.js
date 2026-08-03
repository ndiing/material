import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoTypography extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-typography--display-large">display-large</div>
            <div class="md-typography--display-medium">display-medium</div>
            <div class="md-typography--display-small">display-small</div>
            <div class="md-typography--headline-large">headline-large</div>
            <div class="md-typography--headline-medium">headline-medium</div>
            <div class="md-typography--headline-small">headline-small</div>
            <div class="md-typography--title-large">title-large</div>
            <div class="md-typography--title-medium">title-medium</div>
            <div class="md-typography--title-small">title-small</div>
            <div class="md-typography--body-large">body-large</div>
            <div class="md-typography--body-medium">body-medium</div>
            <div class="md-typography--body-small">body-small</div>
            <div class="md-typography--label-large">label-large</div>
            <div class="md-typography--label-medium">label-medium</div>
            <div class="md-typography--label-small">label-small</div>
        `
    }
}
customElements.define("demo-typography", DemoTypography);
export default document.createElement("demo-typography");
