import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevBottomSheetComponent extends MDComponent {
    get bottomSheet() {
        return this.querySelector("#bottomSheet");
    }

    get bottomSheetModal() {
        return this.querySelector("#bottomSheetModal");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-bottom-sheet
                    id="bottomSheet"
                    @onCardIconButtonClick=${this.handleBottomSheetClick}
                    @onCardButtonClick=${this.handleBottomSheetClick}
                >
                </md-bottom-sheet>

                <md-bottom-sheet
                    id="bottomSheetModal"
                    variant="modal"
                    @onCardIconButtonClick=${this.handleBottomSheetModalClick}
                    @onCardButtonClick=${this.handleBottomSheetModalClick}
                >
                </md-bottom-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Bottom sheets standard"
                                @click="${this.handleButtonBottomSheetClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Bottom sheets modal"
                                @click="${this.handleButtonBottomSheetModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonBottomSheetClick() {
        this.bottomSheet.toggle();
    }
    handleButtonBottomSheetModalClick() {
        this.bottomSheetModal.showModal();
    }

    handleBottomSheetClick() {
        this.bottomSheet.close();
    }
    handleBottomSheetModalClick() {
        this.bottomSheetModal.close();
    }
}

customElements.define("dev-bottom-sheet", DevBottomSheetComponent);

export default document.createElement("dev-bottom-sheet");
