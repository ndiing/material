import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoDialog extends MdElement {
    /* prettier-ignore */
    render(){
        return html`
                
            <md-dialog id="dialog" style="width:310px;" >
                <md-dialog-header>
                    <div class="md-dialog__leading"></div>
                    <div class="md-dialog__content">
                        <div class="md-dialog__headline">Basic dialog title</div>
                    </div>
                    <div class="md-dialog__trailing"></div>
                </md-dialog-header>
                <md-dialog-body>
                    <md-dialog-main>
                        A dialog is a modal window that
                        appears in front of app content to
                        provide critical information or prompt
                        for a decision to be made.
                    </md-dialog-main>
                    <md-dialog-footer>
                        <md-button label="Action 2" color="text"></md-button>
                        <md-button label="Action 1" color="text"></md-button>
                    </md-dialog-footer>
                </md-dialog-body>
            </md-dialog>

            <md-button label="Show" @click="${this.handleClick}"></md-button>

        `
    }

    get dialog() {
        return this.querySelector("#dialog");
    }

    handleClick(event) {
        this.dialog.show();
    }
}
customElements.define("demo-dialog", DemoDialog);
export default document.createElement("demo-dialog");
