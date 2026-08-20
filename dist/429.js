"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[429],{4429(e,d,i){var m=i(420),t=i(9757),n=i(7200);class a extends t.O{west=(0,n._)();constructor(){super(),this.items5=[{id:0,leading:[{component:"icon",icon:"image"}],label:"Item 1",selected:!0},{id:1,leading:[{component:"icon",icon:"image"}],label:"Item 2"},{id:2,leading:[{component:"icon",icon:"image"}],label:"Item 3"},{id:3,leading:[{component:"icon",icon:"image"}],label:"Item 4"}]}render(){return m.qy`
            <md-layout>
                
                <md-navigation-drawer ${(0,n.K)(this.west)} .items="${this.items5}" modal></md-navigation-drawer>
                <md-layout-item region="center">
                    
                    <md-grid class="demo-grid">
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-grid>
                                <md-grid-column expanded="12" medium="8" compact="8">
                                    <h3>Modal navigation drawer</h3>
                                </md-grid-column>

                                <md-grid-column expanded="6" medium="4" compact="4">
                                    <md-button label="Toggle" @click="${this.handleClickWest}"></md-button>
                                </md-grid-column>
                                
                            </md-grid>
                        </md-grid-column>
                        
                    </md-grid>
                </md-layout-item>
            </md-layout>
        `}handleClickWest(){this.west.value.toggle()}}customElements.define("demo-navigation-drawer-modal",a);const o=document.createElement("demo-navigation-drawer-modal");i.d(d,["default",0,o])}}]);