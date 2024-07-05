import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSnackbarComponent extends MDComponent {
    get snackbar() {
        return this.querySelector("#snackbar");
    }
    get snackbar1() {
        return this.querySelector("#snackbar1");
    }
    get snackbar2() {
        return this.querySelector("#snackbar2");
    }
    get snackbar3() {
        return this.querySelector("#snackbar3");
    }
    get snackbar4() {
        return this.querySelector("#snackbar4");
    }
    get snackbar5() {
        return this.querySelector("#snackbar5");
    }

    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar"
                                @onCardIconButtonClick=${this.handleSnackbarClick}
                                @onCardButtonClick=${this.handleSnackbarClick}
                            >
                                Single-line snackbar
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Single line"
                                @click="${this.handleButtonSnackbarClick}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar1"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleSnackbar1Click}
                                @onCardButtonClick=${this.handleSnackbar1Click}
                            >
                                Single-line snackbar with action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Single line with action"
                                @click="${this.handleButtonSnackbar1Click}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar2"
                                @onCardIconButtonClick=${this.handleSnackbar2Click}
                                @onCardButtonClick=${this.handleSnackbar2Click}
                            >
                                Two-line snackbar<br />
                                without action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Two lines"
                                @click="${this.handleButtonSnackbar2Click}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar3"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleSnackbar3Click}
                                @onCardButtonClick=${this.handleSnackbar3Click}
                            >
                                Two-line snackbar<br />
                                with action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Two lines with action"
                                @click="${this.handleButtonSnackbar3Click}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar4"
                                actions='[{"label":"Longer action"}]'
                                @onCardIconButtonClick=${this.handleSnackbar4Click}
                                @onCardButtonClick=${this.handleSnackbar4Click}
                            >
                                Two-line snackbar<br />
                                with longer action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Two lines with longer action"
                                @click="${this.handleButtonSnackbar4Click}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar5"
                                actions='[{"label":"Action"},{"component":"icon-button","icon":"close"}]'
                                @onCardIconButtonClick=${this.handleSnackbar5Click}
                                @onCardButtonClick=${this.handleSnackbar5Click}
                            >
                                Single-line snackbar with action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="With close icon"
                                @click="${this.handleButtonSnackbar5Click}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    handleButtonSnackbarClick() {
        this.snackbar.toggle();
    }
    handleButtonSnackbar1Click() {
        this.snackbar1.toggle();
    }
    handleButtonSnackbar2Click() {
        this.snackbar2.toggle();
    }
    handleButtonSnackbar3Click() {
        this.snackbar3.toggle();
    }
    handleButtonSnackbar4Click() {
        this.snackbar4.toggle();
    }
    handleButtonSnackbar5Click() {
        this.snackbar5.toggle();
    }

    handleSnackbarClick() {
        this.snackbar.close();
    }
    handleSnackbar1Click() {
        this.snackbar1.close();
    }
    handleSnackbar2Click() {
        this.snackbar2.close();
    }
    handleSnackbar3Click() {
        this.snackbar3.close();
    }
    handleSnackbar4Click() {
        this.snackbar4.close();
    }
    handleSnackbar5Click() {
        this.snackbar5.close();
    }
}

customElements.define("dev-snackbar", DevSnackbarComponent);

export default document.createElement("dev-snackbar");
