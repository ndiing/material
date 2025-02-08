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
                            @click="${() => snackbar.toggle()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar"
                            @onSnackbarIconButtonClick="${console.log}"
                            @onSnackbarButtonClick="${console.log}"
                            @onSnackbarShown="${() => snackbar.toggle()}"
                            @onSnackbarClosed="${console.log}"
                        >Body</md-snackbar>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar2.toggle()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar2"
                            .buttons="${[{label:"Label"}]}"
                            @onSnackbarIconButtonClick="${console.log}"
                            @onSnackbarButtonClick="${() => snackbar2.toggle()}"
                            @onSnackbarShown="${console.log}"
                            @onSnackbarClosed="${console.log}"
                        >Body</md-snackbar>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar3.toggle()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar3"
                            @onSnackbarIconButtonClick="${console.log}"
                            @onSnackbarButtonClick="${console.log}"
                            @onSnackbarShown="${() => snackbar3.toggle()}"
                            @onSnackbarClosed="${console.log}"
                        >Body Body Body Body Body Body Body Body</md-snackbar>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar4.toggle()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar4"
                            .buttons="${[{label:"Label"}]}"
                            @onSnackbarIconButtonClick="${console.log}"
                            @onSnackbarButtonClick="${() => snackbar4.toggle()}"
                            @onSnackbarShown="${console.log}"
                            @onSnackbarClosed="${console.log}"
                        >Body Body Body Body Body Body Body Body</md-snackbar>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar5.toggle()}"
                        ></md-button>
                        <md-snackbar
                            id="snackbar5"
                            .buttons="${[{label:"Label Label"}]}"
                            @onSnackbarIconButtonClick="${console.log}"
                            @onSnackbarButtonClick="${() => snackbar5.toggle()}"
                            @onSnackbarShown="${console.log}"
                            @onSnackbarClosed="${console.log}"
                        >Body Body Body Body Body Body Body Body</md-snackbar>
                    </div>

                </div>
            </div>
        `;
    }
}
customElements.define("demo-snackbar", DemoSnackbar);
export default document.createElement("demo-snackbar");
