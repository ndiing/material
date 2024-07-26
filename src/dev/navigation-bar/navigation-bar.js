import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    { leadingIcon: "image", headline: "Headline 1", selected: true },
    { leadingIcon: "image", headline: "Headline 2", badge: 0 },
    { leadingIcon: "image", headline: "Headline 3", badge: 1 },
    { leadingIcon: "image", headline: "Headline 4", badge: 1111 },
];
const items1 = [
    //
    { leadingIcon: "image", selected: true },
    { leadingIcon: "image", badge: 0 },
    { leadingIcon: "image", badge: 1 },
    { leadingIcon: "image", badge: 1111 },
];

class DevNavigationBar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <md-navigation-bar open id="navigationBar0" .items="${items0}"></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-bar id="navigationBar1" .items="${items1}"></md-navigation-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button @click="${() => navigationBar0.toggle()}" label="toggle navigation bar" variant="tonal"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button @click="${() => navigationBar1.toggle()}" label="toggle navigation bar" variant="tonal"></md-button>
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
