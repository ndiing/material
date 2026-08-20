"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[743],{743(e,i,n){var t=n(420),d=n(9757),m=n(7200);class o extends d.O{south=(0,m._)();constructor(){super(),this.items2=[{id:0,leading:[{component:"icon",icon:"image"}],label:"Item 1",selected:!0},{id:1,leading:[{component:"icon",icon:"image"}],label:"Item 2"},{id:2,leading:[{component:"icon",icon:"image"},{component:"badge",label:0}],label:"Item 3"},{id:3,leading:[{component:"icon",icon:"image"},{component:"badge",label:3}],label:"Item 4"}]}render(){return t.qy`
            <md-layout>
                <md-navigation-bar ${(0,m.K)(this.south)} .items="${this.items2}" open></md-navigation-bar>
                <md-layout-item region="center">
                    
                    <md-grid class="demo-grid">
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-grid>
                                <md-grid-column expanded="12" medium="8" compact="8">
                                    <h3>Navigation bar + Vertical navigation items</h3>
                                </md-grid-column>

                                <md-grid-column expanded="6" medium="4" compact="4">
                                    <md-button label="Toggle" @click="${this.handleClickSouth}"></md-button>
                                </md-grid-column>
                                
                            </md-grid>
                        </md-grid-column>
                        
                    </md-grid>
                </md-layout-item>
            </md-layout>
        `}handleClickSouth(){this.south.value.toggle()}}customElements.define("demo-navigation-bar",o);const a=document.createElement("demo-navigation-bar");n.d(i,["default",0,a])}}]);