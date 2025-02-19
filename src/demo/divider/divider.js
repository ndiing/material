import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoDivider extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-divider></md-divider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-divider vertical></md-divider>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-divider", DemoDivider);

export default document.createElement("demo-divider");
