import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSnackbar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar0"
                                @onSnackbarShow="${console.log}"
                                @onSnackbarClose="${console.log}"
                                @onCardButtonClick="${() => snackbar0.close()}"
                                >Lorem, ipsum dolor.</md-snackbar
                            >
                            <md-button
                                variant="tonal"
                                label="show snackbar"
                                @click="${() => snackbar0.show()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar1"
                                .actions="${[
                                    {
                                        label: "label",
                                        onButtonClick: () => {
                                            snackbar1.close();
                                        },
                                    },
                                ]}"
                                @onSnackbarShow="${console.log}"
                                @onSnackbarClose="${console.log}"
                                >Lorem, ipsum dolor.</md-snackbar
                            >
                            <md-button
                                variant="tonal"
                                label="show snackbar"
                                @click="${() => snackbar1.show()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar2"
                                @onSnackbarShow="${console.log}"
                                @onSnackbarClose="${console.log}"
                                @onCardButtonClick="${() => snackbar2.close()}"
                            >
                                Lorem, ipsum dolor. Natus, praesentium provident?
                            </md-snackbar>
                            <md-button
                                variant="tonal"
                                label="show snackbar"
                                @click="${() => snackbar2.show()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar3"
                                .actions="${[
                                    {
                                        label: "label",
                                        onButtonClick: () => {
                                            snackbar3.close();
                                        },
                                    },
                                ]}"
                                @onSnackbarShow="${console.log}"
                                @onSnackbarClose="${console.log}"
                            >
                                Lorem, ipsum dolor. Natus, praesentium provident?
                            </md-snackbar>
                            <md-button
                                variant="tonal"
                                label="show snackbar"
                                @click="${() => snackbar3.show()}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar4"
                                .actions="${[
                                    {
                                        label: "Lorem, ipsum",
                                        onButtonClick: () => {
                                            snackbar4.close();
                                        },
                                    },
                                ]}"
                                @onSnackbarShow="${console.log}"
                                @onSnackbarClose="${console.log}"
                            >
                                Lorem, ipsum dolor. Natus, praesentium provident?
                            </md-snackbar>
                            <md-button
                                variant="tonal"
                                label="show snackbar"
                                @click="${() => snackbar4.show()}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-snackbar", DevSnackbar);

export default document.createElement("dev-snackbar");
