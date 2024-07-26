import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items4 = [
    { leadingIcon: "image", headline: "Headline 1", selected: true },
    { leadingIcon: "image", headline: "Headline 2", badge: 0 },
    { leadingIcon: "image", headline: "Headline 3", badge: 1 },
    { leadingIcon: "image", headline: "Headline 4", badge: 1111 },
];
const items5 = [
    //
    { leadingIcon: "image", selected: true },
    { leadingIcon: "image", badge: 0 },
    { leadingIcon: "image", badge: 1 },
    { leadingIcon: "image", badge: 1111 },
];

class DevNavigationRail extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-rail open id="navigationRail0" .items="${items4}"></md-navigation-rail>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-rail id="navigationRail1" .items="${items5}"></md-navigation-rail>
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="toggle navigation rail" variant="tonal" @click="${() => navigationRail0.toggle()}"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button label="toggle navigation rail" variant="tonal" @click="${() => navigationRail1.toggle()}"></md-button>
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
