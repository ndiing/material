import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNavigationDrawer extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-drawer
                    id="navigationDrawer0"
                    .list="${[
                        { label: "label", icon: "image", selected: true },
                        { label: "label", icon: "image" },
                        { label: "label", icon: "image" },
                        { label: "label", icon: "image" },
                    ]}"
                ></md-navigation-drawer>

                <md-navigation-drawer
                    id="navigationDrawer1"
                    variant="modal"
                    .list="${[{ label: "label", selected: true }, { label: "label" }, { label: "label" }, { label: "label" }]}"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Standard navigation drawer</md-markdown>
                            <md-button
                                label="toggle navigation drawer"
                                variant="tonal"
                                @click="${() => navigationDrawer0.toggle()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Modal navigation drawer</md-markdown>
                            <md-button
                                label="toggle navigation drawer"
                                variant="tonal"
                                @click="${() => navigationDrawer1.toggle(true)}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-drawer", DevNavigationDrawer);

export default document.createElement("dev-navigation-drawer");
