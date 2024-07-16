import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTabs extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Primary tabs</md-markdown>
                            <md-tabs
                                variant="primary"
                                .list="${[
                                    { label: "label", icon: "image", selected: true },
                                    { label: "label", icon: "image" },
                                    { label: "label", icon: "image" },
                                    { label: "label", icon: "image" },
                                ]}"
                            ></md-tabs>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Primary tabs</md-markdown>
                            <md-tabs
                                variant="primary"
                                .list="${[{ label: "label", selected: true }, { label: "label" }, { label: "label" }, { label: "label" }]}"
                            ></md-tabs>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Secondary tabs</md-markdown>
                            <md-tabs
                                variant="secondary"
                                .list="${[
                                    { label: "label", icon: "image", selected: true },
                                    { label: "label", icon: "image" },
                                    { label: "label", icon: "image" },
                                    { label: "label", icon: "image" },
                                ]}"
                            ></md-tabs>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Secondary tabs</md-markdown>
                            <md-tabs
                                variant="secondary"
                                .list="${[{ label: "label", selected: true }, { label: "label" }, { label: "label" }, { label: "label" }]}"
                            ></md-tabs>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tabs", DevTabs);

export default document.createElement("dev-tabs");
