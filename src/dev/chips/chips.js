import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevChipsComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips
                        .list="${[
                            { icon: "image", label: "Item 1" },
                            { icon: "image", label: "Item 2" },
                            { icon: "image", label: "Item 3" },
                            { icon: "image", label: "Item 4" },
                        ]}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips
                        multiSelection
                        .list="${[{ label: "Item 1", selected: true }, { label: "Item 2", selected: true }, { label: "Item 3" }, { label: "Item 4" }]}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips
                        .list="${[
                            { avatar: "https://placehold.co/24", label: "Item 1", action: "close" },
                            { avatar: "https://placehold.co/24", label: "Item 2", action: "close" },
                            { avatar: "https://placehold.co/24", label: "Item 3", action: "close" },
                            { avatar: "https://placehold.co/24", label: "Item 4", action: "close" },
                        ]}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips .list="${[{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }]}"></md-chips>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-chips", DevChipsComponent);

export default document.createElement("dev-chips");
