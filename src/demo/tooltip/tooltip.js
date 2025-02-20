import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTooltip extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Tooltip"
                            @click="${(event) => tooltip.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-tooltip
                            id="tooltip"
                            icons=""
                            actions=""
                            label="Label Label"
                            sublabel=""
                            .buttons="${[{ label: "Label" }, { label: "Label" }]}"
                            style="width:312px"
                            @onTooltipButtonClick="${(event) => tooltip.toggle({ trigger: event.currentTarget })}"
                            >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</md-tooltip
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Tooltip"
                            @click="${(event) => tooltip2.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-tooltip
                            id="tooltip2"
                            icons=""
                            actions=""
                            label="Label Label"
                            sublabel=""
                            .buttons="${[{ label: "Label" }]}"
                            style="width:312px"
                            @onTooltipButtonClick="${(event) => tooltip2.toggle({ trigger: event.currentTarget })}"
                            >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</md-tooltip
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Tooltip"
                            @click="${(event) => tooltip3.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-tooltip
                            id="tooltip3"
                            icons=""
                            actions=""
                            label="Label Label"
                            sublabel=""
                            style="width:312px"
                            @onTooltipButtonClick="${(event) => tooltip3.toggle({ trigger: event.currentTarget })}"
                            >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</md-tooltip
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Tooltip"
                            @click="${(event) => tooltip4.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-tooltip
                            id="tooltip4"
                            icons=""
                            actions=""
                            sublabel=""
                            .buttons="${[{ label: "Label" }]}"
                            style="width:312px"
                            @onTooltipButtonClick="${(event) => tooltip4.toggle({ trigger: event.currentTarget })}"
                            >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</md-tooltip
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Tooltip"
                            @click="${(event) => tooltip5.toggle({ trigger: event.currentTarget })}"
                        ></md-button>
                        <md-tooltip
                            id="tooltip5"
                            icons=""
                            actions=""
                            sublabel=""
                            .buttons="${[{ label: "Label" }, { label: "Label" }]}"
                            style="width:312px"
                            @onTooltipButtonClick="${(event) => tooltip5.toggle({ trigger: event.currentTarget })}"
                            >Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body</md-tooltip
                        >
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tooltip", DemoTooltip);

export default document.createElement("demo-tooltip");
