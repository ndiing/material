import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoFabSmall extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            size="small"
                            icon="image"
                        ></md-fab>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-fab-small", DemoFabSmall);

export default document.createElement("demo-fab-small");
