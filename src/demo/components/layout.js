import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoLayout extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item size="64" ${ref(this.north)} region="north">
                    <div class="demo-layout__item">North</div>
                </md-layout-item>
                <md-layout-item size="256" ${ref(this.east)} region="east">
                    <div class="demo-layout__item">East</div>
                </md-layout-item>
                <md-layout-item size="64" ${ref(this.south)} region="south">
                    <div class="demo-layout__item">South</div>
                </md-layout-item>
                <md-layout-item size="256" ${ref(this.west)} region="west">
                    <div class="demo-layout__item">West</div>
                </md-layout-item>
                <md-layout-item region="center">
                    <div class="demo-layout__center">
                        <md-button color="tonal" label="Toggle North" @click="${this.handleClickNorth}"></md-button><br><br>
                        <md-button color="tonal" label="Toggle East" @click="${this.handleClickEast}"></md-button><br><br>
                        <md-button color="tonal" label="Toggle South" @click="${this.handleClickSouth}"></md-button><br><br>
                        <md-button color="tonal" label="Toggle West" @click="${this.handleClickWest}"></md-button><br><br>
                    </div>
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
}
customElements.define("demo-layout", DemoLayout);
export default document.createElement("demo-layout");
