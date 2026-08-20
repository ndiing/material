"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[675],{8675(e,t,l){var o=l(420),a=l(9757),s=l(7200);class d extends a.O{north=(0,s._)();east=(0,s._)();south=(0,s._)();west=(0,s._)();render(){return o.qy`
            
            <md-layout>
                <md-layout-item ${(0,s.K)(this.north)} region="north" size="64" modal>
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${(0,s.K)(this.east)} region="east" size="256" modal>
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${(0,s.K)(this.south)} region="south" size="64" modal>
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${(0,s.K)(this.west)} region="west" size="256" modal>
                    <div style="padding:16px 24px;">west</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <div style="padding:24px;">
                        <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button>
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button>
                        <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button>
                    </div>
                </md-layout-item>
            </md-layout>
            
        `}_handleNorthToggle(){this.north.value.toggle()}_handleEastToggle(){this.east.value.toggle()}_handleSouthToggle(){this.south.value.toggle()}_handleWestToggle(){this.west.value.toggle()}_handleNorthToggleCollapse(){this.north.value.toggleCollapse()}_handleEastToggleCollapse(){this.east.value.toggleCollapse()}_handleSouthToggleCollapse(){this.south.value.toggleCollapse()}_handleWestToggleCollapse(){this.west.value.toggleCollapse()}}customElements.define("demo-layout-modal",d);const g=document.createElement("demo-layout-modal");l.d(t,["default",0,g])}}]);