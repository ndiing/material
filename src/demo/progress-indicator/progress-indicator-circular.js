import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoProgressIndicatorCircular extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-progress-indicator variant="circular"></md-progress-indicator>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-progress-indicator
                            variant="circular"
                            value="50"
                        ></md-progress-indicator>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-progress-indicator-circular", DemoProgressIndicatorCircular);

export default document.createElement("demo-progress-indicator-circular");
