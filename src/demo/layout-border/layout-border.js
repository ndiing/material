import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoLayoutBorder extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__border">
                    <div class="demo-layout__region md-layout__north">North</div>
                    <div class="demo-layout__region md-layout__east">East</div>
                    <div class="demo-layout__region md-layout__south">South</div>
                    <div class="demo-layout__region md-layout__west">West</div>
                    <div class="demo-layout__region md-layout__center">Center</div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-layout-border", DemoLayoutBorder);
export default document.createElement("demo-layout-border");
