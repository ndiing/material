import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSelectionComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="No selection">
                        <md-list .list="${[{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }]}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single selection (keyboard)">
                        <md-list
                            singleSelection
                            .list="${[{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi selection (keyboard)">
                        <md-list
                            singleSelection
                            multiSelection
                            .list="${[{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi+range selection (keyboard)">
                        <md-list
                            singleSelection
                            multiSelection
                            rangeSelection
                            .list="${[{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi+range+all selection (keyboard)">
                        <md-list
                            singleSelection
                            multiSelection
                            rangeSelection
                            allSelection
                            .list="${[{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Selection mode (mouse)">
                        <md-list
                            selection
                            .list="${[{ label: "Headline 1" }, { label: "Headline 2" }, { label: "Headline 3" }, { label: "Headline 4" }, { label: "Headline 5" }, { label: "Headline 6" }]}"
                        ></md-list>
                    </md-card>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-selection", DevSelectionComponent);

export default document.createElement("dev-selection");
