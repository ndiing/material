import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoSheet extends MdElement {
    /* prettier-ignore */
    render(){
        return html`


            <md-sheet id="sheet0">
                <md-sheet-header
                    .leading="${[
                        {component:'icon-button',icon:'arrow_back',color:'standard'}
                    ]}"
                    headline="Headline"
                    .trailing="${[
                        {component:'icon-button',icon:'minimize',color:'standard'},
                        {component:'icon-button',icon:'maximize',color:'standard'},
                        {component:'icon-button',icon:'close',color:'standard'},
                    ]}"
                ></md-sheet-header>
                <md-sheet-body>
                    <md-sheet-main>main</md-sheet-main>
                    <md-sheet-footer
                        .buttons="${[
                            {label:"Save",color:'filled'},
                            {label:"Cancel",color:'outlined'},
                        ]}"
                    ></md-sheet-footer>
                </md-sheet-body>
            </md-sheet>


            <md-button label="toogle" @click="${() => sheet0.toggle()}"></md-button>

            <!-- <br>
            <br>

            <md-sheet id="sheet1" modal>
                <md-sheet-header
                    .leading="${[
                        {component:'icon-button',icon:'arrow_back',color:'standard'}
                    ]}"
                    headline="Headline"
                    .trailing="${[
                        {component:'icon-button',icon:'minimize',color:'standard'},
                        {component:'icon-button',icon:'maximize',color:'standard'},
                        {component:'icon-button',icon:'close',color:'standard'},
                    ]}"
                ></md-sheet-header>
                <md-sheet-body>
                    <md-sheet-main>main</md-sheet-main>
                    <md-sheet-footer
                        .buttons="${[
                            {label:"Save",color:'filled'},
                            {label:"Cancel",color:'outlined'},
                        ]}"
                    ></md-sheet-footer>
                </md-sheet-body>
            </md-sheet>

            <md-button label="toogle" @click="${() => sheet1.toggle()}"></md-button> -->
        `
    }
}
customElements.define("demo-sheet", DemoSheet);
export default document.createElement("demo-sheet");
