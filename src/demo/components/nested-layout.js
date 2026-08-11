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
                <md-layout-item ${ref(this.north)} size="64" region="north">
                    <div class="demo-layout__item">North</div>
                </md-layout-item>
                <md-layout-item ${ref(this.east)} size="128" region="east">
                    <div class="demo-layout__item">East</div>
                </md-layout-item>
                <md-layout-item ${ref(this.south)} size="64" region="south">
                    <div class="demo-layout__item">South</div>
                </md-layout-item>
                <md-layout-item ${ref(this.west)} size="128" region="west">
                    <div class="demo-layout__item">West</div>
                </md-layout-item>
                <md-layout-item region="center">
                    
                    <md-layout>
                        <md-layout-item ${ref(this.north1)} size="64" region="north">
                            <div class="demo-layout__item">North</div>
                        </md-layout-item>
                        <md-layout-item ${ref(this.east1)} size="128" region="east">
                            <div class="demo-layout__item">East</div>
                        </md-layout-item>
                        <md-layout-item ${ref(this.south1)} size="64" region="south">
                            <div class="demo-layout__item">South</div>
                        </md-layout-item>
                        <md-layout-item ${ref(this.west1)} size="128" region="west">
                            <div class="demo-layout__item">West</div>
                        </md-layout-item>
                        <md-layout-item region="center">
                            <div class="demo-layout__center">
                                <md-button color="tonal" label="Toogle North" @click="${this.handleClickNorth}"></md-button><br><br>
                                <md-button color="tonal" label="Toogle Nested North" @click="${this.handleClickNorth1}"></md-button><br><br>
                                <br><br>

                                <md-button color="tonal" label="Toogle East" @click="${this.handleClickEast}"></md-button><br><br>
                                <md-button color="tonal" label="Toogle Nested East" @click="${this.handleClickEast1}"></md-button><br><br>
                                <br><br>

                                <md-button color="tonal" label="Toogle South" @click="${this.handleClickSouth}"></md-button><br><br>
                                <md-button color="tonal" label="Toogle Nested South" @click="${this.handleClickSouth1}"></md-button><br><br>
                                <br><br>

                                <md-button color="tonal" label="Toogle West" @click="${this.handleClickWest}"></md-button><br><br>
                                <md-button color="tonal" label="Toogle Nested West" @click="${this.handleClickWest1}"></md-button><br><br>
                                <br><br>
                            </div>
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
