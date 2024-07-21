import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevNavigationComponent extends MDComponent {
    constructor() {
        super();
    }

    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-bar__tree"
                        variant="plain"
                        .items="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-bar__tree"
                        variant="plain"
                        .items="${[
                            { icon: "image", selected: true },
                            { icon: "image", badge: 0 },
                            { icon: "image", badge: 1 },
                            { icon: "image", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-drawer__tree"
                        variant="plain"
                        .items="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-drawer__tree"
                        variant="plain"
                        .items="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-rail__tree"
                        variant="plain"
                        .items="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-rail__tree"
                        variant="plain"
                        .items="${[
                            { icon: "image", selected: true },
                            { icon: "image", badge: 0 },
                            { icon: "image", badge: 1 },
                            { icon: "image", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-menu__tree"
                        variant="plain"
                        .items="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-menu__tree"
                        variant="plain"
                        .items="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--primary"
                        variant="plain"
                        .items="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--primary"
                        variant="plain"
                        .items="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--secondary"
                        variant="plain"
                        .items="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--secondary"
                        variant="plain"
                        .items="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tree>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-navigation", DevNavigationComponent);

export default document.createElement("dev-navigation");
