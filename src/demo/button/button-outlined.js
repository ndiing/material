import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoButtonOutlined extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="outlined" label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="outlined" icon="image" label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="outlined" label="Label" disabled></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="outlined" icon="image" label="Label" disabled></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-button-outlined", DemoButtonOutlined);

export default document.createElement("demo-button-outlined");
