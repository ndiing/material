import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoDialog extends MdElement {
    constructor() {
        super();
        this.handleClick2 = this.handleClick2.bind(this);
    }
    /* prettier-ignore */
    render(){
        return html`
                
            <md-dialog 
                id="dialog0" 
                style="width:310px;"
                headline="Basic dialog title"
                .buttons="${[
                    {label:'Action 2',color:'text'},
                    {label:'Action 1',color:'text'},
                ]}"
                .inner="${html`A dialog is a modal window that
                        appears in front of app content to
                        provide critical information or prompt
                        for a decision to be made.`}"
            ></md-dialog>
                
            <md-dialog 
                heroIcon 
                id="dialog1" 
                style="width:340px;"
                .leading="${[
                    {component:'icon',icon:'image'}
                ]}"
                headline="Dialog with hero icon"
                .inner="${html`A dialog is a modal window that appears in front
                        of app content to provide critical
                        information or ask for a decision.`}"
                .buttons="${[
                    {label:'Cancel',color:'text'},
                    {label:'Accept',color:'text'},
                ]}"
            ></md-dialog>
 
            <md-dialog 
                variant="full-screen" 
                id="dialog2"
                .leading="${[
                    {component:'icon',icon:'image'}
                ]}"
                .trailing="${[
                    {component:'button',label:'Save',color:'text',onButtonClick:this.handleClick2}
                ]}"
                headline="Full-screen dialog title"
            ></md-dialog>
             
            <md-grid class="demo-grid">
                <div class="md-grid-item" expanded="6" medium="4" compact="4">
                    <md-button label="Basic dialog title" @click="${this.handleClick0}"></md-button><br><br>
                    <md-button label="Dialog with hero icon" @click="${this.handleClick1}"></md-button><br><br>
                    <md-button label="Full-screen dialog title" @click="${this.handleClick2}"></md-button><br><br>
                </div>
            </md-grid>

        `
    }

    get dialog0() {
        return this.querySelector("#dialog0");
    }
    get dialog1() {
        return this.querySelector("#dialog1");
    }
    get dialog2() {
        return this.querySelector("#dialog2");
    }

    handleClick0(event) {
        this.dialog0.show();
    }
    handleClick1(event) {
        this.dialog1.show();
    }
    handleClick2(event) {
        console.log(event);
        this.dialog2.toggle();
    }
}
customElements.define("demo-dialog", DemoDialog);
export default document.createElement("demo-dialog");
