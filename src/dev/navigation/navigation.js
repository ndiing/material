import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    { icon: "image", label: "Item 1", selected: true },
    { icon: "image", label: "Item 2", badge: 0 },
    { icon: "image", label: "Item 3", badge: 1 },
    { icon: "image", label: "Item 4", badge: 1111 },
];
const items1 = [
    { icon: "image", selected: true },
    { icon: "image", badge: 0 },
    { icon: "image", badge: 1 },
    { icon: "image", badge: 1111 },
];
const items2 = [
    { icon: "image", label: "Item 1", selected: true },
    { icon: "image", label: "Item 2", badge: 0 },
    { icon: "image", label: "Item 3", badge: 1 },
    { icon: "image", label: "Item 4", badge: 1111 },
];
const items3 = [
    { label: "Item 1", selected: true },
    { label: "Item 2", badge: 0 },
    { label: "Item 3", badge: 1 },
    { label: "Item 4", badge: 1111 },
];
const items4 = [
    { icon: "image", label: "Item 1", selected: true },
    { icon: "image", label: "Item 2", badge: 0 },
    { icon: "image", label: "Item 3", badge: 1 },
    { icon: "image", label: "Item 4", badge: 1111 },
];
const items5 = [
    { icon: "image", selected: true },
    { icon: "image", badge: 0 },
    { icon: "image", badge: 1 },
    { icon: "image", badge: 1111 },
];
const items6 = [
    { icon: "image", label: "Item 1", selected: true },
    { icon: "image", label: "Item 2", badge: 0 },
    { icon: "image", label: "Item 3", badge: 1 },
    { icon: "image", label: "Item 4", badge: 1111 },
];
const items7 = [
    { label: "Item 1", selected: true },
    { label: "Item 2", badge: 0 },
    { label: "Item 3", badge: 1 },
    { label: "Item 4", badge: 1111 },
];
const items8 = [
    { icon: "image", label: "Item 1", selected: true },
    { icon: "image", label: "Item 2", badge: 0 },
    { icon: "image", label: "Item 3", badge: 1 },
    { icon: "image", label: "Item 4", badge: 1111 },
];
const items9 = [
    { label: "Item 1", selected: true },
    { label: "Item 2", badge: 0 },
    { label: "Item 3", badge: 1 },
    { label: "Item 4", badge: 1111 },
];
const items10 = [
    { icon: "image", label: "Item 1", selected: true },
    { icon: "image", label: "Item 2", badge: 0 },
    { icon: "image", label: "Item 3", badge: 1 },
    { icon: "image", label: "Item 4", badge: 1111 },
];
const items11 = [
    { label: "Item 1", selected: true },
    { label: "Item 2", badge: 0 },
    { label: "Item 3", badge: 1 },
    { label: "Item 4", badge: 1111 },
];

class DevNavigationComponent extends MDComponent {
    constructor() {
        super();
    }

    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-navigation-bar__tree" variant="plain" .items="${items0}"></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-navigation-bar__tree" variant="plain" .items="${items1}"></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-navigation-drawer__tree" variant="plain" .items="${items2}"></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-navigation-drawer__tree" variant="plain" .items="${items3}"></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-navigation-rail__tree" variant="plain" .items="${items4}"></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-navigation-rail__tree" variant="plain" .items="${items5}"></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-menu__tree" variant="plain" .items="${items6}"></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-menu__tree" variant="plain" .items="${items7}"></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-tabs__tree md-tabs__tree--primary" variant="plain" .items="${items8}"></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-tabs__tree md-tabs__tree--primary" variant="plain" .items="${items9}"></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-tabs__tree md-tabs__tree--secondary" variant="plain" .items="${items10}"></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree class="md-tabs__tree md-tabs__tree--secondary" variant="plain" .items="${items11}"></md-tree>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation", DevNavigationComponent);

export default document.createElement("dev-navigation");
