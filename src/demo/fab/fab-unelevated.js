import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoFabUnelevated extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab variant="unelevated" icon="image"></md-fab>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-fab-unelevated", DemoFabUnelevated);

export default document.createElement("demo-fab-unelevated");
