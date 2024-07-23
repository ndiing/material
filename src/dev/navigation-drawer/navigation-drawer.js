import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    { label: "label", icon: "image", selected: true },
    { label: "label", icon: "image" },
    { label: "label", icon: "image" },
    { label: "label", icon: "image" },
];
const items1 = [{ label: "label", selected: true }, { label: "label" }, { label: "label" }, { label: "label" }];

class DevNavigationDrawer extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-drawer open id="navigationDrawer0" .items="${items0}"></md-navigation-drawer>

                <md-navigation-drawer id="navigationDrawer1" variant="modal" .items="${items1}"></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="toggle navigation drawer" variant="tonal" @click="${() => navigationDrawer0.toggle()}"></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="toggle navigation drawer" variant="tonal" @click="${() => navigationDrawer1.toggle(true)}"></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-drawer", DevNavigationDrawer);

export default document.createElement("dev-navigation-drawer");
