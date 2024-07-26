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

const items6 = [
    { leadingIcon: "image", headline: "Headline 1", selected: true },
    { leadingIcon: "image", headline: "Headline 2", badge: 0 },
    { leadingIcon: "image", headline: "Headline 3", badge: 1 },
    { leadingIcon: "image", headline: "Headline 4", badge: 1111 },
];
const items7 = [
    { headline: "Headline 1", selected: true },
    { headline: "Headline 2", badge: 0 },
    { headline: "Headline 3", badge: 1 },
    { headline: "Headline 4", badge: 1111 },
];

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

class DevList extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-navigation-bar__list" singleSelection .items="${items0}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-navigation-bar__list" singleSelection .items="${items1}"></md-list>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-navigation-drawer__list" singleSelection .items="${items2}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-navigation-drawer__list" singleSelection .items="${items3}"></md-list>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-navigation-rail__list" singleSelection .items="${items4}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-navigation-rail__list" singleSelection .items="${items5}"></md-list>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-menu__list" singleSelection .items="${items6}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-menu__list" singleSelection .items="${items7}"></md-list>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-tabs md-tabs--primary" singleSelection .items="${items8}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-tabs md-tabs--primary" singleSelection .items="${items9}"></md-list>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-tabs md-tabs--secondary" singleSelection .items="${items10}"></md-list>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-list class="md-tabs md-tabs--secondary" singleSelection .items="${items11}"></md-list>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list2", DevList);

export default document.createElement("dev-list2");
