import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationDrawerModal extends MdElement {
    west = createRef();

    constructor() {
        super();

        this.items5 = [
            { id: 0, leading: [{ component: "icon", icon: "image" }], label: "Item 1", selected: true },
            { id: 1, leading: [{ component: "icon", icon: "image" }], label: "Item 2" },
            { id: 2, leading: [{ component: "icon", icon: "image" }], label: "Item 3" },
            { id: 3, leading: [{ component: "icon", icon: "image" }], label: "Item 4" },
        ];
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                
                <md-navigation-drawer ${ref(this.west)} .items="${this.items5}" modal></md-navigation-drawer>
                <md-layout-item region="center">
                    
                    <md-button label="Toggle Navigation Drawer" @click="${this.handleClickWest}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickWest() {
        this.west.value.toggle();
    }
}
customElements.define("demo-navigation-drawer-modal", DemoNavigationDrawerModal);
export default document.createElement("demo-navigation-drawer-modal");
