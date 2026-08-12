import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoSheet extends MdElement {
    north = createRef();
    east = createRef();
    east2 = createRef();
    south = createRef();
    west = createRef();
    west2 = createRef();
    
    /* prettier-ignore */
    render(){
        return html`
        
            <md-layout>

                <md-sheet 
                    ${ref(this.west)}
                    region="west"
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
                    .inner="${html`body`}"
                ></md-sheet>

                <md-sheet 
                    ${ref(this.west2)}
                    region="west"
                    modal
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
                    .inner="${html`body`}"
                ></md-sheet>

                <md-sheet 
                    ${ref(this.east)}
                    region="east"
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
                    .inner="${html`body`}"
                ></md-sheet>

                <md-sheet 
                    ${ref(this.east2)}
                    modal
                    region="east"
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
                    .inner="${html`body`}"
                ></md-sheet>

                <md-layout-item region="center">
                    <div style="padding:24px;">
                        <!-- <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button> -->
                        <!-- <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button> -->
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button><br><br>
                        <md-button label="East Toggle Modal" @click="${this._handleEastToggle2}"></md-button><br><br>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button><br><br>
                        <md-button label="West Toggle Modal" @click="${this._handleWestToggle2}"></md-button><br><br>
                    </div>
                </md-layout-item>
            </md-layout>
        `
    }

    
    _handleNorthToggle() {
        this.north.value.toggle();
    }
    _handleEastToggle() {
        this.east.value.toggle();
    }
    _handleEastToggle2() {
        this.east2.value.toggle();
    }
    _handleSouthToggle() {
        this.south.value.toggle();
    }
    _handleWestToggle() {
        this.west.value.toggle();
    }
    _handleWestToggle2() {
        this.west2.value.toggle();
    }

}
customElements.define("demo-sheet", DemoSheet);
export default document.createElement("demo-sheet");
