import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationDrawer extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <div class="md-layout__center">
                    <div class="md-layout">
                        <div class="md-layout__grid">
                            <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Toggle Navigation Drawer"
                                    @click="${(event) => navigationDrawer.toggle()}"
                                ></md-button>
                            </div>
                        </div>
                    </div>
                </div>
                <md-navigation-drawer
                    id="navigationDrawer"
                    .items="${[
                        { icon: "image", label: "Label", selected: true },
                        { icon: "image", label: "Label" },
                        { icon: "image", label: "Label" },
                        { icon: "image", label: "Label" },
                    ]}"
                    open
                ></md-navigation-drawer>
            </div>
        `;
    }
}

customElements.define("demo-navigation-drawer", DemoNavigationDrawer);

export default document.createElement("demo-navigation-drawer");
