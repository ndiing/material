"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[646],{1646(o,e,t){var n=t(420),l=t(9757),a=t(7200);class i extends l.O{north=(0,a._)();east=(0,a._)();east2=(0,a._)();south=(0,a._)();west=(0,a._)();west2=(0,a._)();render(){return n.qy`
        
            <md-layout>

                <md-sheet 
                    ${(0,a.K)(this.west)}
                    region="west"
                    size="256"
                    .leading="${[{component:"icon-button",icon:"arrow_back",color:"standard"}]}"
                    headline="Headline"
                    .trailing="${[{component:"icon-button",icon:"minimize",color:"standard"},{component:"icon-button",icon:"maximize",color:"standard"},{component:"icon-button",icon:"close",color:"standard"}]}"
                    .buttons="${[{label:"Save",color:"filled"},{label:"Cancel",color:"outlined"}]}"
                    .inner="${n.qy`body`}"
                ></md-sheet>

                <md-sheet 
                    ${(0,a.K)(this.west2)}
                    region="west"
                    modal
                    size="256"
                    .leading="${[{component:"icon-button",icon:"arrow_back",color:"standard"}]}"
                    headline="Headline"
                    .trailing="${[{component:"icon-button",icon:"minimize",color:"standard"},{component:"icon-button",icon:"maximize",color:"standard"},{component:"icon-button",icon:"close",color:"standard"}]}"
                    .buttons="${[{label:"Save",color:"filled"},{label:"Cancel",color:"outlined"}]}"
                    .inner="${n.qy`body`}"
                ></md-sheet>

                <md-sheet 
                    ${(0,a.K)(this.east)}
                    region="east"
                    size="256"
                    .leading="${[{component:"icon-button",icon:"arrow_back",color:"standard"}]}"
                    headline="Headline"
                    .trailing="${[{component:"icon-button",icon:"minimize",color:"standard"},{component:"icon-button",icon:"maximize",color:"standard"},{component:"icon-button",icon:"close",color:"standard"}]}"
                    .buttons="${[{label:"Save",color:"filled"},{label:"Cancel",color:"outlined"}]}"
                    .inner="${n.qy`body`}"
                ></md-sheet>

                <md-sheet 
                    ${(0,a.K)(this.east2)}
                    modal
                    region="east"
                    size="256"
                    .leading="${[{component:"icon-button",icon:"arrow_back",color:"standard"}]}"
                    headline="Headline"
                    .trailing="${[{component:"icon-button",icon:"minimize",color:"standard"},{component:"icon-button",icon:"maximize",color:"standard"},{component:"icon-button",icon:"close",color:"standard"}]}"
                    .buttons="${[{label:"Save",color:"filled"},{label:"Cancel",color:"outlined"}]}"
                    .inner="${n.qy`body`}"
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
        `}_handleNorthToggle(){this.north.value.toggle()}_handleEastToggle(){this.east.value.toggle()}_handleEastToggle2(){this.east2.value.toggle()}_handleSouthToggle(){this.south.value.toggle()}_handleWestToggle(){this.west.value.toggle()}_handleWestToggle2(){this.west2.value.toggle()}}customElements.define("demo-sheet",i);const c=document.createElement("demo-sheet");t.d(e,["default",0,c])}}]);