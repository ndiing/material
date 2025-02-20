import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoIconButtonFilledTonal extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                            toggle
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                            toggle
                            selected
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                            disabled
                        ></md-icon-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-icon-button-filled-tonal", DemoIconButtonFilledTonal);

export default document.createElement("demo-icon-button-filled-tonal");
