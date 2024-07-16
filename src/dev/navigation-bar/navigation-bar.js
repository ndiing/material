import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNavigationBar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-bar
                    id="navigationBar0"
                    .list="${[
                        { label: "label", icon: "image", selected: true },
                        { label: "label", icon: "image" },
                        { label: "label", icon: "image" },
                        { label: "label", icon: "image" },
                    ]}"
                ></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-bar
                            id="navigationBar1"
                            .list="${[{ icon: "image", selected: true }, { icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                        ></md-navigation-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-markdown>label text</md-markdown>
                                    <md-button
                                        @click="${() => navigationBar0.toggle()}"
                                        label="toggle navigation bar"
                                        variant="tonal"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-markdown>no label text</md-markdown>
                                    <md-button
                                        @click="${() => navigationBar1.toggle()}"
                                        label="toggle navigation bar"
                                        variant="tonal"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-bar", DevNavigationBar);

export default document.createElement("dev-navigation-bar");
