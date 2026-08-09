import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationRail extends MdElement {
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
                <md-navigation-rail 
                    ${ref(this.west)} 
                    open 
                    .iconButton="${{icon:["menu","menu_open"], onIconButtonClick:this.handleToggleCollapse}}"
                    .fab="${{icon:'edit',label:'Label', onFabClick:console.log}}"
                    .items="${this.items9}"
                ></md-navigation-rail>
                <md-layout-item region="center">
                    <md-button label="Toggle Navigation Rail" @click="${this.handleClickWest}"></md-button>
                    <md-button label="Toggle Collapse Navigation Rail" @click="${this.handleToggleCollapse}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickWest() {
        this.west.value.toggle();
    }
    handleToggleCollapse() {
        this.west.value.toggleCollapse();
    }
}
customElements.define("demo-navigation-rail", DemoNavigationRail);
export default document.createElement("demo-navigation-rail");
