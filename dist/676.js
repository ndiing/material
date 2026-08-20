"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[676],{8676(e,o,i){var n=i(420),t=i(9757),a=i(7200);class d extends t.O{south=(0,a._)();constructor(){super(),this.items3=[{id:0,leading:[{component:"icon",icon:"image"}],label:"Item 1",selected:!0},{id:1,leading:[{component:"icon",icon:"image"}],label:"Item 2"},{id:2,leading:[{component:"icon",icon:"image"},{component:"badge",label:0}],label:"Item 3"},{id:3,leading:[{component:"icon",icon:"image"},{component:"badge",label:3}],label:"Item 4"}]}render(){return n.qy`
            <md-layout>
                <md-navigation-bar ${(0,a.K)(this.south)} .items="${this.items3}" layout="horizontal" open></md-navigation-bar>
                <md-layout-item region="center">
                    
                    <md-grid class="demo-grid">
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-grid>
                                <md-grid-column expanded="12" medium="8" compact="8">
                                    <h3>Navigation bar + Horizontal navigation items</h3>
                                </md-grid-column>

                                <md-grid-column expanded="6" medium="4" compact="4">
                                    <md-button label="Toggle" @click="${this.handleClickSouth}"></md-button>
                                </md-grid-column>
                                
                            </md-grid>
                        </md-grid-column>
                        
                    </md-grid>
                </md-layout-item>
            </md-layout>
        `}handleClickSouth(){this.south.value.toggle()}}customElements.define("demo-navigation-bar-horizontal",d);const m=document.createElement("demo-navigation-bar-horizontal");i.d(o,["default",0,m])}}]);