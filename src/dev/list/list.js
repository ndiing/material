import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevListComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { avatar: "https://placehold.co/96", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { avatar: "https://placehold.co/96", label: "Headline", subLabel: "Supporting text" },
                            { avatar: "https://placehold.co/96", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { avatar: "https://placehold.co/96", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { avatar: "https://placehold.co/96", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { avatar: "https://placehold.co/96", trailingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { thumbnail: "https://placehold.co/96", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { thumbnail: "https://placehold.co/96", label: "Headline", subLabel: "Supporting text" },
                            { thumbnail: "https://placehold.co/96", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { thumbnail: "https://placehold.co/96", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { thumbnail: "https://placehold.co/96", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { thumbnail: "https://placehold.co/96", trailingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { video: "https://placehold.co/96", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { video: "https://placehold.co/96", label: "Headline", subLabel: "Supporting text" },
                            { video: "https://placehold.co/96", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { video: "https://placehold.co/96", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { video: "https://placehold.co/96", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { video: "https://placehold.co/96", trailingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { icon: "image", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { icon: "image", label: "Headline", subLabel: "Supporting text" },
                            { icon: "image", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { icon: "image", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { icon: "image", trailingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { icon: "image", trailingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${[{ label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" }, { label: "Headline", subLabel: "Supporting text" }, { label: "Headline" }]}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { trailingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { trailingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { leadingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { leadingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { leadingCheckbox: true, text: "100+", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingCheckbox: true, text: "100+", label: "Headline", subLabel: "Supporting text" },
                            { leadingCheckbox: true, text: "100+", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { leadingRadioButton: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingRadioButton: true, label: "Headline", subLabel: "Supporting text" },
                            { leadingRadioButton: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { leadingRadioButton: true, text: "100+", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingRadioButton: true, text: "100+", label: "Headline", subLabel: "Supporting text" },
                            { leadingRadioButton: true, text: "100+", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { trailingSwitch: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingSwitch: true, label: "Headline", subLabel: "Supporting text" },
                            { trailingSwitch: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[
                            { trailingSwitch: true, icon: "image", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingSwitch: true, icon: "image", label: "Headline", subLabel: "Supporting text" },
                            { trailingSwitch: true, icon: "image", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-list", DevListComponent);

export default document.createElement("dev-list");
