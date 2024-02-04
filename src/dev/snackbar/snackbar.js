import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class SnackbarComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-snackbar
                    >Lorem, ipsum dolor.</md-snackbar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-snackbar
                        button="Action"
                    >Lorem, ipsum dolor.</md-snackbar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-snackbar
                    >Lorem, ipsum dolor.<br>Sed, ab iste!</md-snackbar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-snackbar
                        button="Action"
                    >Lorem, ipsum dolor.<br>Sed, ab iste!</md-snackbar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-snackbar
                        button="Longer action"
                    >Lorem, ipsum dolor.<br>Sed, ab iste!</md-snackbar>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("snackbar-component", SnackbarComponent);

export default document.createElement("snackbar-component");
