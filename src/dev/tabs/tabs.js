import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTabsComponent extends MDComponent {
    constructor() {
        super();
    }
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tabs>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        variant="secondary"
                        .list="${[
                            { icon: "image", label: "Item 1", selected: true },
                            { icon: "image", label: "Item 2", badge: 0 },
                            { icon: "image", label: "Item 3", badge: 1 },
                            { icon: "image", label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        variant="secondary"
                        .list="${[
                            { label: "Item 1", selected: true },
                            { label: "Item 2", badge: 0 },
                            { label: "Item 3", badge: 1 },
                            { label: "Item 4", badge: 1111 },
                        ]}"
                    ></md-tabs>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tabs", DevTabsComponent);

export default document.createElement("dev-tabs");
