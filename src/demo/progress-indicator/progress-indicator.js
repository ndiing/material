import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoProgressIndicator extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-progress-indicator></md-progress-indicator>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-progress-indicator value="50"></md-progress-indicator>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-progress-indicator", DemoProgressIndicator);

export default document.createElement("demo-progress-indicator");
