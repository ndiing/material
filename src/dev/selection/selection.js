import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items0 = [{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }];
const items1 = [{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }];
const items2 = [{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }];
const items3 = [{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }];
const items4 = [{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }];
const items5 = [{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }];

class DevSelectionComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="No selection">
                        <md-list .items="${items0}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single selection (keyboard)">
                        <md-list singleSelection .items="${items1}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi selection (keyboard)">
                        <md-list singleSelection multiSelection .items="${items2}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi+range selection (keyboard)">
                        <md-list singleSelection multiSelection rangeSelection .items="${items3}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi+range+all selection (keyboard)">
                        <md-list singleSelection multiSelection rangeSelection allSelection .items="${items4}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Selection mode (mouse)">
                        <md-list selection .items="${items5}"></md-list>
                    </md-card>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-selection", DevSelectionComponent);

export default document.createElement("dev-selection");
