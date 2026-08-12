import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayoutNested extends MdElement {
    north1 = createRef();
    east1 = createRef();
    south1 = createRef();
    west1 = createRef();

    north2 = createRef();
    east2 = createRef();
    south2 = createRef();
    west2 = createRef();

    /* prettier-ignore */
    render(){
        return html`
            
            <md-layout>
                <md-layout-item ${ref(this.north1)} region="north" size="64">
                    <div style="padding:16px 24px;">north</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east1)} region="east" size="64">
                    <div style="padding:16px 24px;">east</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south1)} region="south" size="64">
                    <div style="padding:16px 24px;">south</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west1)} region="west" size="64">
                    <div style="padding:16px 24px;">west</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <md-layout>
                        <md-layout-item ${ref(this.north2)} region="north" size="64">
                            <div style="padding:16px 24px;">north</div>
                        </md-layout-item>
                        <md-layout-item ${ref(this.east2)} region="east" size="64">
                            <div style="padding:16px 24px;">east</div>
                        </md-layout-item>
                        <md-layout-item ${ref(this.south2)} region="south" size="64">
                            <div style="padding:16px 24px;">south</div>
                        </md-layout-item>
                        <md-layout-item ${ref(this.west2)} region="west" size="64">
                            <div style="padding:16px 24px;">west</div>
                        </md-layout-item>
                        <md-layout-item region="center">
                            <div style="padding:24px;">
                                <md-button label="North 1 Toggle" @click="${this._handleNorth1Toggle}"></md-button>
                                <md-button label="North 2 Toggle" color="tonal" @click="${this._handleNorth2Toggle}"></md-button><br><br>
                                
                                <md-button label="East 1 Toggle" @click="${this._handleEast1Toggle}"></md-button>
                                <md-button label="East 2 Toggle" color="tonal" @click="${this._handleEast2Toggle}"></md-button><br><br>

                                <md-button label="South 1 Toggle" @click="${this._handleSouth1Toggle}"></md-button>
                                <md-button label="South 2 Toggle" color="tonal" @click="${this._handleSouth2Toggle}"></md-button><br><br>
                                
                                <md-button label="West 1 Toggle" @click="${this._handleWest1Toggle}"></md-button>
                                <md-button label="West 2 Toggle" color="tonal" @click="${this._handleWest2Toggle}"></md-button><br><br>
                            </div>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
            
        `
    }

    _handleNorth1Toggle() {
        this.north1.value.toggle();
    }
    _handleEast1Toggle() {
        this.east1.value.toggle();
    }
    _handleSouth1Toggle() {
        this.south1.value.toggle();
    }
    _handleWest1Toggle() {
        this.west1.value.toggle();
    }

    _handleNorth2Toggle() {
        this.north2.value.toggle();
    }
    _handleEast2Toggle() {
        this.east2.value.toggle();
    }
    _handleSouth2Toggle() {
        this.south2.value.toggle();
    }
    _handleWest2Toggle() {
        this.west2.value.toggle();
    }
}
customElements.define("demo-layout-nested", DemoLayoutNested);
export default document.createElement("demo-layout-nested");
