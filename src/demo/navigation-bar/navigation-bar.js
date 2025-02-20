import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationBar extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Navigation Bar"
                                    @click="${(event) => navigationBar.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-navigation-bar
                    id="navigationBar"
                    .items="${[
                        { icon: "image", label: "Label", selected: true },
                        { icon: "image", label: "Label" },
                        { icon: "image", label: "Label" },
                        { icon: "image", label: "Label" },
                    ]}"
                    open
                ></md-navigation-bar>
            </div>
        `;
    }
}

customElements.define("demo-navigation-bar", DemoNavigationBar);

export default document.createElement("demo-navigation-bar");
