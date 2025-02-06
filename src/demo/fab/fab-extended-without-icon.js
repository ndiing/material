import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoFabExtendedWithoutIcon extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            type="extended"
                            label="Compose"
                        ></md-fab>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            variant="unelevated"
                            type="extended"
                            label="Compose"
                        ></md-fab>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-fab-extended-without-icon", DemoFabExtendedWithoutIcon);
export default document.createElement("demo-fab-extended-without-icon");
