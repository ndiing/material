import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevSnackbar extends MDComponent {
    render() {
        return html`
            <div class="md-layout-border" style="background-color:var(--md-sys-color-surface-container-lowest);margin:24px;width:480px;height:800px;">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar @onSnackbarShow="${console.log}" @onSnackbarClose="${console.log}">Lorem, ipsum dolor.</md-snackbar>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar actions='[{"label":"label"}]' @onSnackbarShow="${console.log}" @onSnackbarClose="${console.log}">Lorem, ipsum dolor.</md-snackbar>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar @onSnackbarShow="${console.log}" @onSnackbarClose="${console.log}"> Lorem, ipsum dolor. Natus, praesentium provident? </md-snackbar>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar actions='[{"label":"label"}]' @onSnackbarShow="${console.log}" @onSnackbarClose="${console.log}"> Lorem, ipsum dolor. Natus, praesentium provident? </md-snackbar>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar open actions='[{"label":"Lorem, ipsum"}]' @onSnackbarShow="${console.log}" @onSnackbarClose="${console.log}"> Lorem, ipsum dolor. Natus, praesentium provident? </md-snackbar>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-snackbar", DevSnackbar);

export default document.createElement("dev-snackbar");
