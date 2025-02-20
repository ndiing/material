import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSnackbar extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar.show()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar"
                            @onSnackbarButtonClick="${() => snackbar.toggle()}"
                            >Body</md-snackbar
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar2.show()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar2"
                            .buttons="${[{ label: "Label" }]}"
                            @onSnackbarButtonClick="${() => snackbar2.toggle()}"
                            >Body</md-snackbar
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar3.show()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar3"
                            @onSnackbarButtonClick="${() => snackbar3.toggle()}"
                            >Body Body Body Body Body Body Body Body</md-snackbar
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar4.show()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar4"
                            .buttons="${[{ label: "Label" }]}"
                            @onSnackbarButtonClick="${() => snackbar4.toggle()}"
                            >Body Body Body Body Body Body Body Body</md-snackbar
                        >
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar5.show()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar5"
                            .buttons="${[{ label: "Label Label" }]}"
                            @onSnackbarButtonClick="${() => snackbar5.toggle()}"
                            >Body Body Body Body Body Body Body Body</md-snackbar
                        >
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-snackbar", DemoSnackbar);

export default document.createElement("demo-snackbar");
