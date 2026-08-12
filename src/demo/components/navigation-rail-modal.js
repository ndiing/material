import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationRailModal extends MdElement {
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
                    modal
                ></md-navigation-rail>
                <md-layout-item region="center">
                    
                    <md-grid class="demo-grid">
                        <md-grid-column expanded="12" medium="8" compact="4">
                            <md-grid>
                                <md-grid-column expanded="12" medium="8" compact="8">
                                    <h3>Navigation rail modal</h3>
                                </md-grid-column>

                                <md-grid-column expanded="6" medium="4" compact="4">
                                    <md-button label="Toggle" @click="${this.handleClickWest}"></md-button>
                                    <md-button label="Toggle Collapse" @click="${this.handleToggleCollapse}"></md-button>
                                </md-grid-column>
                                
                            </md-grid>
                        </md-grid-column>
                        
                    </md-grid>
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
customElements.define("demo-navigation-rail-modal", DemoNavigationRailModal);
export default document.createElement("demo-navigation-rail-modal");
