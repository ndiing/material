import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevChips extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips
                                .list="${[
                                    //
                                    { icon: 'image', label: "Assist 1" },
                                    { icon: 'image', label: "Assist 2" },
                                    { icon: 'image', label: "Assist 3" },
                                    { icon: 'image', label: "Assist 4" },
                                    { icon: 'image', label: "Assist 5" },
                                ]}"
                                @onChipClick="${console.log}"
                            ></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips
                                .list="${[
                                    //
                                    { label: "Filter 1", selected: true },
                                    { label: "Filter 2" },
                                    { label: "Filter 3", selected: true },
                                    { label: "Filter 4" },
                                    { label: "Filter 5" },
                                ]}"
                                multiSelection
                                @onChipClick="${console.log}"
                            ></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips
                                .list="${[
                                    //
                                    { label: "Input 1",action:'close' },
                                    { label: "Input 2",action:'close' },
                                    { label: "Input 3",action:'close' },
                                    { label: "Input 4",action:'close' },
                                    { label: "Input 5",action:'close' },
                                ]}"
                                @onChipClick="${console.log}"
                            ></md-chips>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-chips
                                .list="${[
                                    //
                                    { label: "Suggestion 1", },
                                    { label: "Suggestion 2", },
                                    { label: "Suggestion 3", },
                                    { label: "Suggestion 4", },
                                    { label: "Suggestion 5", },
                                ]}"
                                @onChipClick="${console.log}"
                            ></md-chips>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-chips", DevChips);

export default document.createElement("dev-chips");
