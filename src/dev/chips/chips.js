import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [
    //
    { icon: "image", label: "Assist 1" },
    { icon: "image", label: "Assist 2" },
    { icon: "image", label: "Assist 3" },
    { icon: "image", label: "Assist 4" },
    { icon: "image", label: "Assist 5" },
];
const items1 = [
    //
    { label: "Filter 1", selected: true },
    { label: "Filter 2" },
    { label: "Filter 3", selected: true },
    { label: "Filter 4" },
    { label: "Filter 5" },
];
const items2 = [
    //
    { label: "Input 1", action: "close" },
    { label: "Input 2", action: "close" },
    { label: "Input 3", action: "close" },
    { label: "Input 4", action: "close" },
    { label: "Input 5", action: "close" },
];
const items3 = [
    //
    { label: "Suggestion 1" },
    { label: "Suggestion 2" },
    { label: "Suggestion 3" },
    { label: "Suggestion 4" },
    { label: "Suggestion 5" },
];

class DevChips extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips .items="${items0}"></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips .items="${items1}" multiSelection></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips .items="${items2}"></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips .items="${items3}"></md-chips>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-chips", DevChips);

export default document.createElement("dev-chips");
