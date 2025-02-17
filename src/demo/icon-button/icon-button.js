import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoIconButton extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            icon="image"
                            @onIconButtonClick="${console.log}"
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            icon="image"
                            toggle
                            @onIconButtonClick="${console.log}"
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            icon="image"
                            toggle
                            selected
                            @onIconButtonClick="${console.log}"
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            icon="image"
                            disabled
                            @onIconButtonClick="${console.log}"
                        ></md-icon-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-icon-button", DemoIconButton);

export default document.createElement("demo-icon-button");
