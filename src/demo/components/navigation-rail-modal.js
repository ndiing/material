import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationRailModal extends MdElement {
    north = createRef();
    east = createRef();
    south = createRef();
    west = createRef();

    constructor() {
        super();
        this.items9 = [
            { id: 0, leading: [{ component: "icon", icon: "image" }], label: "Item 1", selected: true },
            { id: 1, leading: [{ component: "icon", icon: "image" }], label: "Item 2" },
            {
                id: 2,
                leading: [
                    { component: "icon", icon: "image" },
                    { component: "badge", label: 0 },
                ],
                label: "Item 3",
            },
            {
                id: 3,
                leading: [
                    { component: "icon", icon: "image" },
                    { component: "badge", label: 3 },
                ],
                label: "Item 4",
            },
        ];

        this.handleToggleCollapse = this.handleToggleCollapse.bind(this);
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-layout-item height="64" ${ref(this.north)} region="north">
                        north
                </md-layout-item>
                <md-layout-item width="256" ${ref(this.east)} region="east">
                        east
                </md-layout-item>
                <md-layout-item height="64" ${ref(this.south)} region="south">
                        south
                </md-layout-item>
                <md-navigation-rail 
                    ${ref(this.west)} 
                    open 
                    .iconButton="${{icon:["menu","menu_open"], onIconButtonClick:this.handleToggleCollapse}}"
                    .fab="${{icon:'edit',label:'Label', onFabClick:console.log}}"
                    .items="${this.items9}"
                    modal
                ></md-navigation-rail>
                <md-layout-item region="center">
                    <md-button label="north" @click="${this.handleClickNorth}"></md-button>
                    <md-button label="east" @click="${this.handleClickEast}"></md-button>
                    <md-button label="south" @click="${this.handleClickSouth}"></md-button>
                    <md-button label="west" @click="${this.handleClickWest}"></md-button>
                    <md-button label="toggle collapse" @click="${this.handleToggleCollapse}"></md-button>
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
    handleToggleCollapse() {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-navigation-rail-modal", DemoNavigationRailModal);
export default document.createElement("demo-navigation-rail-modal");
