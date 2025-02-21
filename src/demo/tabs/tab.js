import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTab extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tab icon="" label="" sublabel="" selected="" disabled="" routerLink="" rippleOptions="" badge=""></md-tab>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tab", DemoTab);

export default document.createElement("demo-tab");
