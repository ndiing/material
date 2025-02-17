import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoFabExtended extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            type="extended"
                            icon="image"
                            label="Label"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            type="extended"
                            label="Label"
                        ></md-fab>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-fab-extended", DemoFabExtended);

export default document.createElement("demo-fab-extended");
