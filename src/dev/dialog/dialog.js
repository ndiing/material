import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevDialogComponent extends MDComponent {
    get dialog() {
        return this.querySelector("#dialog");
    }
    get dialog2() {
        return this.querySelector("#dialog2");
    }

    get dialogFull() {
        return this.querySelector("#dialogFull");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog
                                id="dialog"
                                leadingActions='[{"icon":"mobile_friendly"}]'
                                label="Dialog with hero icon"
                                actions='[{"component":"spacer"},{"label":"Text button"},{"label":"Text button"}]'
                                @onCardIconButtonClick=${this.handleDialogClick}
                                @onCardButtonClick=${this.handleDialogClick}
                            >
                                A dialog is a type of modal window that<br />
                                appears in front of app content to provide<br />
                                critical information, or ask for a decision.
                            </md-dialog>

                            <md-button
                                variant="tonal"
                                label="Basic dialogs"
                                @click="${this.handleButtonDialogClick}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog
                                id="dialog2"
                                label="Basic dialog title"
                                actions='[{"component":"spacer"},{"label":"Text button"},{"label":"Text button"}]'
                                @onCardIconButtonClick=${this.handleDialog2Click}
                                @onCardButtonClick=${this.handleDialog2Click}
                            >
                                A dialog is a type of modal window that<br />
                                appears in front of app content to provide<br />
                                critical information, or ask for a decision.
                            </md-dialog>

                            <md-button
                                variant="tonal"
                                label="Basic dialogs 2"
                                @click="${this.handleButtonDialog2Click}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog
                                id="dialogFull"
                                variant="full"
                                leadingActions='[{"icon":"close"}]'
                                label="Full-screen dialog title"
                                trailingActions='[{"component":"button","label":"Save"}]'
                                @onCardIconButtonClick=${this.handleDialogFullClick}
                                @onCardButtonClick=${this.handleDialogFullClick}
                            ></md-dialog>

                            <md-button
                                variant="tonal"
                                label="Full-screen dialogs"
                                @click="${this.handleButtonDialogFullClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonDialogClick() {
        this.dialog.showModal();
    }
    handleButtonDialog2Click() {
        this.dialog2.showModal();
    }
    handleButtonDialogFullClick() {
        this.dialogFull.show();
    }

    handleDialogClick() {
        this.dialog.close();
    }
    handleDialog2Click() {
        this.dialog2.close();
    }
    handleDialogFullClick() {
        this.dialogFull.close();
    }
}

customElements.define("dev-dialog", DevDialogComponent);

export default document.createElement("dev-dialog");
