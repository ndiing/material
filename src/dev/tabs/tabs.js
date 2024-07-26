import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items8 = [
    { leadingIcon: "image", headline: "Headline 1", selected: true },
    { leadingIcon: "image", headline: "Headline 2", badge: 0 },
    { leadingIcon: "image", headline: "Headline 3", badge: 1 },
    { leadingIcon: "image", headline: "Headline 4", badge: 1111 },
];
const items9 = [
    { headline: "Headline 1", selected: true },
    { headline: "Headline 2", badge: 0 },
    { headline: "Headline 3", badge: 1 },
    { headline: "Headline 4", badge: 1111 },
];

const items10 = [
    { leadingIcon: "image", headline: "Headline 1", selected: true },
    { leadingIcon: "image", headline: "Headline 2", badge: 0 },
    { leadingIcon: "image", headline: "Headline 3", badge: 1 },
    { leadingIcon: "image", headline: "Headline 4", badge: 1111 },
];
const items11 = [
    { headline: "Headline 1", selected: true },
    { headline: "Headline 2", badge: 0 },
    { headline: "Headline 3", badge: 1 },
    { headline: "Headline 4", badge: 1111 },
];

class DevTabs extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="primary" .items="${items8}"></md-tabs>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="primary" .items="${items9}"></md-tabs>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="secondary" .items="${items10}"></md-tabs>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="secondary" .items="${items11}"></md-tabs>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tabs", DevTabs);

export default document.createElement("dev-tabs");
