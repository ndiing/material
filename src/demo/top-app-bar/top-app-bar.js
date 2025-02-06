import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoTopAppBar extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-top-app-bar
                    open
                    id="topAppBar1"
                    label="Title Large"
                    .leadingActions="${[{ icon: "arrow_back" }]}"
                    .trailingActions="${[{ icon: "attach_file" }, { icon: "today" }, { icon: "more_vert" }]}"
                ></md-top-app-bar>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Top App Bar"
                            @click="${() => topAppBar1.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-top-app-bar", DemoTopAppBar);
export default document.createElement("demo-top-app-bar");
