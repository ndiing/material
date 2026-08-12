import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayoutDockedModal extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            
            <md-layout>
                <md-layout-item ${ref(this.north)} region="north" size="64" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east)} region="east" size="256" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south)} region="south" size="64" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west)} region="west" size="256" collapsedSize="32" docked .expanded="${false}" open modal .showScrimOnOpen="${false}" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick>
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
            
        `
    }

    _handleNorthToggle() {
        this.north.value.toggle();
    }
    _handleEastToggle() {
        this.east.value.toggle();
    }
    _handleSouthToggle() {
        this.south.value.toggle();
    }
    _handleWestToggle() {
        this.west.value.toggle();
    }

    _handleNorthToggleCollapse() {
        this.north.value.toggleCollapse();
    }
    _handleEastToggleCollapse() {
        this.east.value.toggleCollapse();
    }
    _handleSouthToggleCollapse() {
        this.south.value.toggleCollapse();
    }
    _handleWestToggleCollapse() {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-layout-docked-modal", DemoLayoutDockedModal);
export default document.createElement("demo-layout-docked-modal");
