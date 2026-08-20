"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[182],{182(e,t,l){var o=l(420),d=l(9757),a=l(7200);class s extends d.O{north=(0,a._)();east=(0,a._)();south=(0,a._)();west=(0,a._)();render(){return o.qy`
            
            <md-layout>
                <md-layout-item ${(0,a.K)(this.north)} region="north" size="64" collapsedSize="32" docked .expanded="${!1}" open>
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${(0,a.K)(this.east)} region="east" size="256" collapsedSize="32" docked .expanded="${!1}" open>
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${(0,a.K)(this.south)} region="south" size="64" collapsedSize="32" docked .expanded="${!1}" open>
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${(0,a.K)(this.west)} region="west" size="256" collapsedSize="32" docked .expanded="${!1}" open>
                    <div style="padding:16px 24px;">west</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <div style="padding:24px;">
                        <md-button label="North Toggle" @click="${this._handleNorthToggle}"></md-button>
                        <md-button label="North Toggle Collapse" @click="${this._handleNorthToggleCollapse}"></md-button><br><br>
                        <md-button label="East Toggle" @click="${this._handleEastToggle}"></md-button>
                        <md-button label="East Toggle Collapse" @click="${this._handleEastToggleCollapse}"></md-button><br><br>
                        <md-button label="South Toggle" @click="${this._handleSouthToggle}"></md-button>
                        <md-button label="South Toggle Collapse" @click="${this._handleSouthToggleCollapse}"></md-button><br><br>
                        <md-button label="West Toggle" @click="${this._handleWestToggle}"></md-button>
                        <md-button label="West Toggle Collapse" @click="${this._handleWestToggleCollapse}"></md-button><br><br>
                    </div>
                </md-layout-item>
            </md-layout>
            
        `}_handleNorthToggle(){this.north.value.toggle()}_handleEastToggle(){this.east.value.toggle()}_handleSouthToggle(){this.south.value.toggle()}_handleWestToggle(){this.west.value.toggle()}_handleNorthToggleCollapse(){this.north.value.toggleCollapse()}_handleEastToggleCollapse(){this.east.value.toggleCollapse()}_handleSouthToggleCollapse(){this.south.value.toggleCollapse()}_handleWestToggleCollapse(){this.west.value.toggleCollapse()}}customElements.define("demo-layout-docked",s);const g=document.createElement("demo-layout-docked");l.d(t,["default",0,g])}}]);