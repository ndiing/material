import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTooltip extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Plain tooltipz</md-markdown>
                            <md-tooltip
                                id="tooltip0"
                                variant="plain"
                            >
                                Lorem, ipsum dolor.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip0.show(event.currentTarget)}"
                                @pointerleave="${(event) => tooltip0.close(event.currentTarget)}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Plain tooltipz</md-markdown>
                            <md-tooltip
                                id="tooltip1"
                                variant="plain"
                                style="max-width:280px;"
                            >
                                Lorem ipsum dolor sit amet. Fuga officia dolore at obcaecati. Sint expedita eaque officiis quibusdam? Necessitatibus, similique. Officiis, necessitatibus et.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip1.show(event.currentTarget)}"
                                @pointerleave="${(event) => tooltip1.close(event.currentTarget)}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Subhead, supporting text, and two buttonsz</md-markdown>
                            <md-tooltip
                                id="tooltip2"
                                variant="rich"
                                label="Lorem ipsum"
                                @onCardButtonClick="${() => tooltip2.close()}"
                                actions='[{"label":"action"},{"label":"action"}]'
                                style="width: 280px;"
                            >
                                Lorem ipsum dolor sit amet. Doloribus delectus autem temporibus saepe. Corrupti, similique incidunt. Quod, nisi.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip2.show(event.currentTarget)}"
                                @pointerleave="${console.log}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Subhead, supporting text, and one buttonz</md-markdown>
                            <md-tooltip
                                id="tooltip3"
                                variant="rich"
                                label="Lorem ipsum"
                                @onCardButtonClick="${() => tooltip3.close()}"
                                actions='[{"label":"action"}]'
                                style="width: 280px;"
                            >
                                Lorem ipsum dolor sit amet. Doloribus delectus autem temporibus saepe. Corrupti, similique incidunt. Quod, nisi.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip3.show(event.currentTarget)}"
                                @pointerleave="${console.log}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Subhead and supporting textz</md-markdown>
                            <md-tooltip
                                id="tooltip4"
                                variant="rich"
                                label="Lorem ipsum"
                                style="width: 280px;"
                            >
                                Lorem ipsum dolor sit amet. Doloribus delectus autem temporibus saepe. Corrupti, similique incidunt. Quod, nisi.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip4.show(event.currentTarget)}"
                                @pointerleave="${(event) => tooltip4.close(event.currentTarget)}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Supporting text and one buttonz</md-markdown>
                            <md-tooltip
                                id="tooltip5"
                                variant="rich"
                                @onCardButtonClick="${() => tooltip5.close()}"
                                actions='[{"label":"action"}]'
                                style="width: 280px;"
                            >
                                Lorem ipsum dolor sit amet. Doloribus delectus autem temporibus saepe. Corrupti, similique incidunt. Quod, nisi.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip5.show(event.currentTarget)}"
                                @pointerleave="${console.log}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-markdown>Button text and two buttonz</md-markdown>
                            <md-tooltip
                                id="tooltip6"
                                variant="rich"
                                label="Lorem ipsum"
                                @onCardButtonClick="${() => tooltip6.close()}"
                                actions='[{"label":"action"},{"label":"action"}]'
                                style="width: 280px;"
                            >
                                Lorem ipsum dolor sit amet. Doloribus delectus autem temporibus saepe. Corrupti, similique incidunt. Quod, nisi.
                            </md-tooltip>
                            <md-button
                                variant="tonal"
                                label="show tooltip"
                                @pointerenter="${(event) => tooltip6.show(event.currentTarget)}"
                                @pointerleave="${console.log}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-tooltip", DevTooltip);

export default document.createElement("dev-tooltip");
