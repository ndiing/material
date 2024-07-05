import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTooltipComponent extends MDComponent {
    get tooltip() {
        return this.querySelector("#tooltip");
    }
    get tooltip1() {
        return this.querySelector("#tooltip1");
    }
    get tooltip2() {
        return this.querySelector("#tooltip2");
    }
    get tooltip3() {
        return this.querySelector("#tooltip3");
    }
    get tooltip4() {
        return this.querySelector("#tooltip4");
    }
    get tooltip5() {
        return this.querySelector("#tooltip5");
    }
    get tooltip6() {
        return this.querySelector("#tooltip6");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip"
                                label="Rich tooltip"
                                actions='[{"label":"Action"},{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltipClick}
                                @onCardButtonClick=${this.handleTooltipClick}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead, supporting text, and two buttons"
                                @pointerenter="${this.handleButtonTooltipPointerenter}"
                                @pointerleave="${this.handleButtonTooltipPointerleave}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip1"
                                label="Rich tooltip"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip1Click}
                                @onCardButtonClick=${this.handleTooltip1Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead, supporting text, and one button"
                                @pointerenter="${this.handleButtonTooltip1Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip1Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip2"
                                label="Rich tooltip"
                                @onCardIconButtonClick=${this.handleTooltip2Click}
                                @onCardButtonClick=${this.handleTooltip2Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead and supporting text"
                                @pointerenter="${this.handleButtonTooltip2Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip2Pointerleave}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip3"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip3Click}
                                @onCardButtonClick=${this.handleTooltip3Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Supporting text and one button"
                                @pointerenter="${this.handleButtonTooltip3Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip3Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip4"
                                label="Rich tooltip"
                                actions='[{"label":"Action"},{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip4Click}
                                @onCardButtonClick=${this.handleTooltip4Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Button text and two buttons"
                                @pointerenter="${this.handleButtonTooltip4Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip4Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip5"
                                variant="plain"
                                @onCardIconButtonClick=${this.handleTooltip5Click}
                                @onCardButtonClick=${this.handleTooltip5Click}
                            >
                                Save to favorites
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Plain tooltip"
                                @pointerenter="${this.handleButtonTooltip5Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip5Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip6"
                                variant="plain"
                                @onCardIconButtonClick=${this.handleTooltip6Click}
                                @onCardButtonClick=${this.handleTooltip6Click}
                            >
                                Grant value is calculated using the<br />
                                closing stock price from the day<br />
                                before the grant date. Amounts do<br />
                                not reflect tax witholdings.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Plain tooltip 2"
                                @pointerenter="${this.handleButtonTooltip6Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip6Pointerleave}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // handleButtonTooltipClick(event) {
    //     this.tooltip.toggle(event.currentTarget);
    // }
    // handleButtonTooltip1Click(event) {
    //     this.tooltip1.toggle(event.currentTarget);
    // }
    // handleButtonTooltip2Click(event) {
    //     this.tooltip2.toggle(event.currentTarget);
    // }
    // handleButtonTooltip3Click(event) {
    //     this.tooltip3.toggle(event.currentTarget);
    // }
    // handleButtonTooltip4Click(event) {
    //     this.tooltip4.toggle(event.currentTarget);
    // }
    // handleButtonTooltip5Click(event) {
    //     this.tooltip5.toggle(event.currentTarget);
    // }
    // handleButtonTooltip6Click(event) {
    //     this.tooltip6.toggle(event.currentTarget);
    // }

    handleButtonTooltipPointerenter(event) {
        this.tooltip.show(event.currentTarget);
    }
    handleButtonTooltipPointerleave() {
        this.tooltip.close();
    }
    handleButtonTooltip1Pointerenter(event) {
        this.tooltip1.show(event.currentTarget);
    }
    handleButtonTooltip1Pointerleave() {
        this.tooltip1.close();
    }
    handleButtonTooltip2Pointerenter(event) {
        this.tooltip2.show(event.currentTarget);
    }
    handleButtonTooltip2Pointerleave() {
        this.tooltip2.close();
    }
    handleButtonTooltip3Pointerenter(event) {
        this.tooltip3.show(event.currentTarget);
    }
    handleButtonTooltip3Pointerleave() {
        this.tooltip3.close();
    }
    handleButtonTooltip4Pointerenter(event) {
        this.tooltip4.show(event.currentTarget);
    }
    handleButtonTooltip4Pointerleave() {
        this.tooltip4.close();
    }
    handleButtonTooltip5Pointerenter(event) {
        this.tooltip5.show(event.currentTarget);
    }
    handleButtonTooltip5Pointerleave() {
        this.tooltip5.close();
    }
    handleButtonTooltip6Pointerenter(event) {
        this.tooltip6.show(event.currentTarget);
    }
    handleButtonTooltip6Pointerleave() {
        this.tooltip6.close();
    }

    handleTooltipClick() {
        this.tooltip.close();
    }
    handleTooltip1Click() {
        this.tooltip1.close();
    }
    handleTooltip2Click() {
        this.tooltip2.close();
    }
    handleTooltip3Click() {
        this.tooltip3.close();
    }
    handleTooltip4Click() {
        this.tooltip4.close();
    }
    handleTooltip5Click() {
        this.tooltip5.close();
    }
    handleTooltip6Click() {
        this.tooltip6.close();
    }
}

customElements.define("dev-tooltip", DevTooltipComponent);

export default document.createElement("dev-tooltip");
