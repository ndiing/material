import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTopAppBar extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Top App Bar"
                                    @click="${() => topAppBar.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-top-app-bar
                    id="topAppBar"
                    .leadingActions="${[{ icon: "image" }]}"
                    label="Label"
                    .trailingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                    @onTopAppBarIconButtonClick="${console.log}"
                    @onTopAppBarShown="${console.log}"
                    @onTopAppBarClosed="${console.log}"
                ></md-top-app-bar>
            </div>
        `;
    }
}

customElements.define("demo-top-app-bar", DemoTopAppBar);

export default document.createElement("demo-top-app-bar");
