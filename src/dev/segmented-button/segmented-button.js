import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const items = [
    //
    { label: "label", selected: true },
    { label: "label" },
    { label: "label" },
];

const items2 = [
    //
    { label: "$", selected: true },
    { label: "$$", selected: true },
    { label: "$$$" },
    { label: "$$$$" },
];

class DevSegmentedButton extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-segmented-button .items="${items}" singleSelection></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-segmented-button .items="${items2}" multiSelection></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-segmented-button style="--md-comp-segmented-button-density:0;" .items="${items}" singleSelection></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-segmented-button style="--md-comp-segmented-button-density:-1;" .items="${items}" singleSelection></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-segmented-button style="--md-comp-segmented-button-density:-2;" .items="${items}" singleSelection></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-segmented-button style="--md-comp-segmented-button-density:-3;" .items="${items}" singleSelection></md-segmented-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-segmented-button", DevSegmentedButton);

export default document.createElement("dev-segmented-button");
