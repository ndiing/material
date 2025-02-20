import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoScrim extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Scrim"
                            @click="${() => scrim.toggle()}"
                        ></md-button>
                        <md-scrim id="scrim"></md-scrim>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-scrim", DemoScrim);

export default document.createElement("demo-scrim");
