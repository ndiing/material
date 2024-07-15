import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNavigationRail extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-rail
                    id="navigationRail0"
                    .list="${[
                        { label: "label", icon: "image", selected: true },
                        { label: "label", icon: "image" },
                        { label: "label", icon: "image" },
                        { label: "label", icon: "image" },
                    ]}"
                ></md-navigation-rail>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-rail
                            id="navigationRail1"
                            .list="${[
                                { icon: "image", selected: true },
                                { icon: "image" },
                                { icon: "image" },
                                { icon: "image" },
                            ]}"
                        ></md-navigation-rail>
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="toggle navigation rail" variant="tonal" @click="${()=>navigationRail0.toggle()}"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="toggle navigation rail" variant="tonal" @click="${()=>navigationRail1.toggle()}"></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation-rail", DevNavigationRail);

export default document.createElement("dev-navigation-rail");
