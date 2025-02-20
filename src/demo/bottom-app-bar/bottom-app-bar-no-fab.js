import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoBottomAppBarNoFab extends MdComponent {
    constructor() {
        super();
        this.actions = [{ icon: "image" }, { icon: "image" }, { icon: "image" }, { icon: "image" }];
    }

    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Bottom App Bar"
                                    @click="${() => bottomAppBar.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-bottom-app-bar
                    id="bottomAppBar"
                    .actions="${this.actions}"
                    open
                ></md-bottom-app-bar>
            </div>
        `;
    }
}

customElements.define("demo-bottom-app-bar-no-fab", DemoBottomAppBarNoFab);

export default document.createElement("demo-bottom-app-bar-no-fab");
