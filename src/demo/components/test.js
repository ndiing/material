import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoTest extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item ${ref(this.north)} region="north" size="64" modal>north</md-layout-item>
                <md-layout-item ${ref(this.east)} region="east" size="256" modal>east</md-layout-item>
                <md-layout-item ${ref(this.south)} region="south" size="200" modal>south</md-layout-item>
                <md-layout-item ${ref(this.west)} region="west" size="220" showScrimOnExpanded .closeOnScrimClick="${false}" collapseOnScrimClick .showScrimOnOpen="${false}" .expanded="${false}" dockedOnCollapsed collapsedSize="96" modal>west</md-layout-item>
                <md-layout-item style="display: flex;flex-direction: column;justify-content: center;align-items: center;gap:16px;">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestias, inventore eligendi iusto corrupti, dolorum fugit possimus sunt error reiciendis voluptatum neque perspiciatis iure aspernatur odit amet? Molestias, a quaerat.
                    <md-button label="toggle north" @click="${this.handleToggleNorth}"></md-button>
                    <md-button label="toggle east" @click="${this.handleToggleEast}"></md-button>
                    <md-button label="toggle south" @click="${this.handleToggleSouth}"></md-button>
                    <md-button label="toggle west" @click="${this.handleToggleWest}"></md-button>
                    <md-button label="toggle collapse north" @click="${this.handleToggleCollapseNorth}"></md-button>
                    <md-button label="toggle collapse east" @click="${this.handleToggleCollapseEast}"></md-button>
                    <md-button label="toggle collapse south" @click="${this.handleToggleCollapseSouth}"></md-button>
                    <md-button label="toggle collapse west" @click="${this.handleToggleCollapseWest}"></md-button>
                </md-layout-item>
            </md-layout>
            
        `
    }

    handleToggleNorth(event) {
        this.north.value.toggle();
    }
    handleToggleEast(event) {
        this.east.value.toggle();
    }
    handleToggleSouth(event) {
        this.south.value.toggle();
    }
    handleToggleWest(event) {
        this.west.value.toggle();
    }

    handleToggleCollapseNorth(event) {
        this.north.value.toggleCollapse();
    }
    handleToggleCollapseEast(event) {
        this.east.value.toggleCollapse();
    }
    handleToggleCollapseSouth(event) {
        this.south.value.toggleCollapse();
    }
    handleToggleCollapseWest(event) {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
