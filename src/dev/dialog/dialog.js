import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class DialogComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout md-layout--grid">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-dialog id="dialog">
                        <md-dialog-header
                            label="Label"
                            supportingText="Supporting text"
                        ></md-dialog-header>
                        <md-dialog-body>
                            Lorem, ipsum dolor.<br>
                            Aperiam, laudantium. Autem.<br>
                            Quae, eveniet veniam!<br>
                        </md-dialog-body>
                        <md-dialog-footer>
                            <md-button ui="filled" label="Label" @click="${() => dialog.toggle()}"></md-button>
                        </md-dialog-footer>
                    </md-dialog>
                    <md-button ui="filled-tonal" label="Dialog" @click="${() => dialog.toggle()}"></md-button>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("dialog-component", DialogComponent);

export default document.createElement("dialog-component");
