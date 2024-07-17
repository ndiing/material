import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

const buttons = [
    //
    { label: "label", selected: true },
    { label: "label" },
    { label: "label" },
];

const buttons2 = [
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
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Single-select segmented button</md-markdown>
                            <md-segmented-button
                                .buttons="${buttons}"
                                singleSelection
                                @onSegmentedButtonItemClick="${console.log}"
                            ></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Multi-select segmented button</md-markdown>
                            <md-segmented-button
                                .buttons="${buttons2}"
                                multiSelection
                                @onSegmentedButtonItemClick="${console.log}"
                            ></md-segmented-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Density 0</md-markdown>
                            <md-segmented-button
                                style="--md-comp-segmented-button-density:0;"
                                .buttons="${buttons}"
                                singleSelection
                                @onSegmentedButtonItemClick="${console.log}"
                            ></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Density -1</md-markdown>
                            <md-segmented-button
                                style="--md-comp-segmented-button-density:-1;"
                                .buttons="${buttons}"
                                singleSelection
                                @onSegmentedButtonItemClick="${console.log}"
                            ></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Density -2</md-markdown>
                            <md-segmented-button
                                style="--md-comp-segmented-button-density:-2;"
                                .buttons="${buttons}"
                                singleSelection
                                @onSegmentedButtonItemClick="${console.log}"
                            ></md-segmented-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Density -3</md-markdown>
                            <md-segmented-button
                                style="--md-comp-segmented-button-density:-3;"
                                .buttons="${buttons}"
                                singleSelection
                                @onSegmentedButtonItemClick="${console.log}"
                            ></md-segmented-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-segmented-button", DevSegmentedButton);

export default document.createElement("dev-segmented-button");
