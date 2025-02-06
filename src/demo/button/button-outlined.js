import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoButtonOutlined extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="outlined"
                            label="Outlined"
                        ></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="outlined"
                            icon="image"
                            label="Outlined"
                        ></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="outlined"
                            disabled
                            label="Outlined"
                        ></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-button-outlined", DemoButtonOutlined);
export default document.createElement("demo-button-outlined");
