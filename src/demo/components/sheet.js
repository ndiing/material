import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoSheet extends MdElement {
    /* prettier-ignore */
    renderInner(){
        return html`
            test inner html
        `
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                
                <md-sheet 
                    modal 
                    open 
                    size="256"
                    .leading="${[
                        {component:'icon-button',icon:'arrow_back',color:'standard'}
                    ]}"
                    headline="Headline"
                    .trailing="${[
                        {component:'icon-button',icon:'minimize',color:'standard'},
                        {component:'icon-button',icon:'maximize',color:'standard'},
                        {component:'icon-button',icon:'close',color:'standard'},
                    ]}"
                    .buttons="${[
                        {label:"Save",color:'filled'},
                        {label:"Cancel",color:'outlined'},
                    ]}"
                    .inner="${this.renderInner()}"
                ></md-sheet>
                
            </md-layout>
        `
    }
}
customElements.define("demo-sheet", DemoSheet);
export default document.createElement("demo-sheet");
