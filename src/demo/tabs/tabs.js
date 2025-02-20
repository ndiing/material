import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTabs extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            items=""
                            rippleOptions=""
                            variant=""
                        ></md-tabs>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tabs", DemoTabs);

export default document.createElement("demo-tabs");
