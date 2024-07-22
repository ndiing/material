import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    { label: "label", icon: "image", selected: true },
    { label: "label", icon: "image" },
    { label: "label", icon: "image" },
    { label: "label", icon: "image" },
];
const items1 = [{ label: "label", selected: true }, { label: "label" }, { label: "label" }, { label: "label" }];
const items2 = [
    { label: "label", icon: "image", selected: true },
    { label: "label", icon: "image" },
    { label: "label", icon: "image" },
    { label: "label", icon: "image" },
];
const items3 = [{ label: "label", selected: true }, { label: "label" }, { label: "label" }, { label: "label" }];

class DevTabs extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="primary" .items="${items0}"></md-tabs>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="primary" .items="${items1}"></md-tabs>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="secondary" .items="${items2}"></md-tabs>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tabs variant="secondary" .items="${items3}"></md-tabs>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tabs", DevTabs);

export default document.createElement("dev-tabs");
