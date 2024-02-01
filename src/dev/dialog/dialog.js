import { html, nothing } from "lit";
import { MDComponent } from "../../material/base/component";

class DialogComponent extends MDComponent {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                    <md-dialog id="dialog">
                        <md-panel-header
                            label="Basic dialog title"
                            supportingText="Supporting text"
                            leadingIcon="arrow_back"
                            trailingIcon="close"
                            @onPanelIconClick="${() => dialog.toggle()}"
                        ></md-panel-header>
                        <md-panel-body>
                            A dialog is a type of modal window that<br>
                            appears in front of app content to provide<br>
                            critical information, or ask for decision.<br>
                        </md-panel-body>
                        <md-panel-footer>
                            <md-button label="Enabled" @click="${() => dialog.toggle()}"></md-button>
                            <md-button label="Enabled" @click="${() => dialog.toggle()}"></md-button>
                        </md-panel-footer>
                    </md-dialog>
                    <md-button ui="filled-tonal" label="dialog" @click="${() => dialog.toggle()}"></md-button>
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
                <div class="md-layout__grid-item md-layout__grid-item--expanded4 md-layout__grid-item--medium4 md-layout__grid-item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("dialog-component", DialogComponent);

export default document.createElement("dialog-component");
