import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSheetComponent extends MDComponent {
    get sheetNorth() {
        return this.querySelector("#sheetNorth");
    }
    get sheetEast() {
        return this.querySelector("#sheetEast");
    }
    get sheetSouth() {
        return this.querySelector("#sheetSouth");
    }
    get sheetWest() {
        return this.querySelector("#sheetWest");
    }

    get sheetNorthModal() {
        return this.querySelector("#sheetNorthModal");
    }
    get sheetEastModal() {
        return this.querySelector("#sheetEastModal");
    }
    get sheetSouthModal() {
        return this.querySelector("#sheetSouthModal");
    }
    get sheetWestModal() {
        return this.querySelector("#sheetWestModal");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-sheet
                    id="sheetNorth"
                    variant="north"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetNorthClick}
                    @onCardButtonClick=${this.handleSheetNorthClick}
                ></md-sheet>
                <md-sheet
                    id="sheetEast"
                    variant="east"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetEastClick}
                    @onCardButtonClick=${this.handleSheetEastClick}
                ></md-sheet>
                <md-sheet
                    id="sheetSouth"
                    variant="south"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetSouthClick}
                    @onCardButtonClick=${this.handleSheetSouthClick}
                ></md-sheet>
                <md-sheet
                    id="sheetWest"
                    variant="west"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetWestClick}
                    @onCardButtonClick=${this.handleSheetWestClick}
                ></md-sheet>

                <md-sheet
                    id="sheetNorthModal"
                    variant="north modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetNorthModalClick}
                    @onCardButtonClick=${this.handleSheetNorthModalClick}
                ></md-sheet>
                <md-sheet
                    id="sheetEastModal"
                    variant="east modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetEastModalClick}
                    @onCardButtonClick=${this.handleSheetEastModalClick}
                ></md-sheet>
                <md-sheet
                    id="sheetSouthModal"
                    variant="south modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetSouthModalClick}
                    @onCardButtonClick=${this.handleSheetSouthModalClick}
                ></md-sheet>
                <md-sheet
                    id="sheetWestModal"
                    variant="west modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetWestModalClick}
                    @onCardButtonClick=${this.handleSheetWestModalClick}
                ></md-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="North"
                                @click="${this.handleButtonSheetNorthClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="East"
                                @click="${this.handleButtonSheetEastClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="South"
                                @click="${this.handleButtonSheetSouthClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="West"
                                @click="${this.handleButtonSheetWestClick}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="North Modal"
                                @click="${this.handleButtonSheetNorthModalClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="East Modal"
                                @click="${this.handleButtonSheetEastModalClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="South Modal"
                                @click="${this.handleButtonSheetSouthModalClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="West Modal"
                                @click="${this.handleButtonSheetWestModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonSheetNorthClick() {
        this.sheetNorth.toggle();
    }
    handleButtonSheetEastClick() {
        this.sheetEast.toggle();
    }
    handleButtonSheetSouthClick() {
        this.sheetSouth.toggle();
    }
    handleButtonSheetWestClick() {
        this.sheetWest.toggle();
    }
    handleButtonSheetNorthModalClick() {
        this.sheetNorthModal.showModal();
    }
    handleButtonSheetEastModalClick() {
        this.sheetEastModal.showModal();
    }
    handleButtonSheetSouthModalClick() {
        this.sheetSouthModal.showModal();
    }
    handleButtonSheetWestModalClick() {
        this.sheetWestModal.showModal();
    }

    handleSheetNorthClick() {
        this.sheetNorth.close();
    }
    handleSheetEastClick() {
        this.sheetEast.close();
    }
    handleSheetSouthClick() {
        this.sheetSouth.close();
    }
    handleSheetWestClick() {
        this.sheetWest.close();
    }
    handleSheetNorthModalClick() {
        this.sheetNorthModal.close();
    }
    handleSheetEastModalClick() {
        this.sheetEastModal.close();
    }
    handleSheetSouthModalClick() {
        this.sheetSouthModal.close();
    }
    handleSheetWestModalClick() {
        this.sheetWestModal.close();
    }
}

customElements.define("dev-sheet", DevSheetComponent);

export default document.createElement("dev-sheet");
