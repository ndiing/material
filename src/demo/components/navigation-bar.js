import { html } from "lit";
import { MdElement } from "../../material/base/element.js";
import { createRef, ref } from "lit/directives/ref.js";

class DemoNavigationBar extends MdElement {
    south = createRef();

    constructor() {
        super();

        this.items2 = [
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
    }

    /* prettier-ignore */
    render(){
        return html`
            <md-layout>
                <md-navigation-bar ${ref(this.south)} .items="${this.items2}" open></md-navigation-bar>
                <md-layout-item region="center">
                    <md-button label="Toggle Navigation Bar" @click="${this.handleClickSouth}"></md-button>
                </md-layout-item>
            </md-layout>
        `
    }

    handleClickSouth() {
        this.south.value.toggle();
    }
}
customElements.define("demo-navigation-bar", DemoNavigationBar);
export default document.createElement("demo-navigation-bar");
