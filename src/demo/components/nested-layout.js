import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNestedLayout extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    north1 = createRef();
    east1 = createRef();
    south1 = createRef();
    west1 = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item ${ref(this.north)} height="64" region="north">north</md-layout-item>
                <md-layout-item ${ref(this.east)} width="128" region="east">east</md-layout-item>
                <md-layout-item ${ref(this.south)} height="64" region="south">south</md-layout-item>
                <md-layout-item ${ref(this.west)} width="128" region="west">west</md-layout-item>
                <md-layout-item region="center">
                    
                    <md-layout>
                        <md-layout-item ${ref(this.north1)} height="64" region="north">north</md-layout-item>
                        <md-layout-item ${ref(this.east1)} width="128" region="east">east</md-layout-item>
                        <md-layout-item ${ref(this.south1)} height="64" region="south">south</md-layout-item>
                        <md-layout-item ${ref(this.west1)} width="128" region="west">west</md-layout-item>
                        <md-layout-item region="center">
                            <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                            <md-button label="east" @click="${this.handleClickEast}"></md-button>
                            <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                            <md-button label="west" @click="${this.handleClickWest}"></md-button>
                            <br>
                            <br>
                            <md-button label="north1" @click="${this.handleClickNorth1}"></md-button>
                            <md-button label="east1" @click="${this.handleClickEast1}"></md-button>
                            <md-button label="south1" @click="${this.handleClickSouth1}"></md-button>
                            <md-button label="west1" @click="${this.handleClickWest1}"></md-button>
                        </md-layout-item>
                    </md-layout>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickNorth() {
        this.north.value.toggle();
    }
    handleClickEast() {
        this.east.value.toggle();
    }
    handleClickSouth() {
        this.south.value.toggle();
    }
    handleClickWest() {
        this.west.value.toggle();
    }

    handleClickNorth1() {
        this.north1.value.toggle();
    }
    handleClickEast1() {
        this.east1.value.toggle();
    }
    handleClickSouth1() {
        this.south1.value.toggle();
    }
    handleClickWest1() {
        this.west1.value.toggle();
    }
}
customElements.define("demo-nested-layout", DemoNestedLayout);
export default document.createElement("demo-nested-layout");
