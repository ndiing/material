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

const items2 = [
    { leadingIcon: "image", headline: "Headline 1", selected: true },
    { leadingIcon: "image", headline: "Headline 2", badge: 0 },
    { leadingIcon: "image", headline: "Headline 3", badge: 1 },
    { leadingIcon: "image", headline: "Headline 4", badge: 1111 },
];
const items3 = [
    { headline: "Headline 1", selected: true },
    { headline: "Headline 2", badge: 0 },
    { headline: "Headline 3", badge: 1 },
    { headline: "Headline 4", badge: 1111 },
];

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

class DevBadge extends MDComponent {
    render() {
        return html`
            <md-layout variant="column">
                
                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-layout-item region="center" class="dev-demo__container">
                            <md-badge></md-badge>
                            <md-badge label="1"></md-badge>
                            <md-badge label="1111" limit="999"></md-badge>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
                

                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-navigation-bar .items="${items0}" open></md-navigation-bar>
                        <md-layout-item region="center" class="dev-demo__container">
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>

                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-navigation-bar .items="${items1}" open></md-navigation-bar>
                        <md-layout-item region="center" class="dev-demo__container">
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>

                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-navigation-drawer .items="${items2}" open></md-navigation-drawer>
                        <md-layout-item region="center" class="dev-demo__container">
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>

                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-navigation-drawer .items="${items3}" open></md-navigation-drawer>
                        <md-layout-item region="center" class="dev-demo__container">
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>

                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-navigation-rail .items="${items4}" open></md-navigation-rail>
                        <md-layout-item region="center" class="dev-demo__container">
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>

                <md-layout-item expanded="6" medium="8" compact="4">
                    <md-layout variant="border" class="dev-demo__viewport">
                        <md-navigation-rail .items="${items5}" open></md-navigation-rail>
                        <md-layout-item region="center" class="dev-demo__container">
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>

            </md-layout>
        `;
    }
}

customElements.define("dev-badge", DevBadge);

export default document.createElement("dev-badge");
