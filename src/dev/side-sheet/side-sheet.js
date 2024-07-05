import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSideSheetComponent extends MDComponent {
    get sideSheet() {
        return this.querySelector("#sideSheet");
    }

    get sideSheetModal() {
        return this.querySelector("#sideSheetModal");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <md-side-sheet
                    id="sideSheet"
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSideSheetClick}
                    @onCardButtonClick=${this.handleSideSheetClick}
                ></md-side-sheet>

                <md-side-sheet
                    id="sideSheetModal"
                    variant="modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    actions='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                    @onCardIconButtonClick=${this.handleSideSheetModalClick}
                    @onCardButtonClick=${this.handleSideSheetModalClick}
                ></md-side-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Standard side sheet"
                                @click="${this.handleButtonSideSheetClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Modal side sheet"
                                @click="${this.handleButtonSideSheetModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonSideSheetClick() {
        this.sideSheet.toggle();
    }
    handleButtonSideSheetModalClick() {
        this.sideSheetModal.showModal();
    }

    handleSideSheetClick() {
        this.sideSheet.close();
    }
    handleSideSheetModalClick() {
        this.sideSheetModal.close();
    }
}

customElements.define("dev-side-sheet", DevSideSheetComponent);

export default document.createElement("dev-side-sheet");
