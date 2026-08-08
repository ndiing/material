import { html } from "lit";
import { MdElement } from "../../material/base/element.js";

class DemoListStyle extends MdElement {
    constructor() {
        super();

        this.items0 = [
            { id: 0, label: "Item 1", selected: true },
            { id: 1, label: "Item 2" },
            { id: 2, label: "Item 3" },
            { id: 3, label: "Item 4" },
        ];
        this.items1 = [
            { id: 0, leading: [{ component: "icon", icon: "image" }], label: "Item 1", selected: true },
            { id: 1, leading: [{ component: "icon", icon: "image" }], label: "Item 2" },
            { id: 2, leading: [{ component: "icon", icon: "image" }], label: "Item 3" },
            { id: 3, leading: [{ component: "icon", icon: "image" }], label: "Item 4" },
        ];

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
        this.items3 = [
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
            <md-grid>

                <md-grid-column>
                    <div class="md-menu">
                        <md-list class="md-menu__list" .items="${this.items0}" singleSelect activeRow selectOnEnterActiveRow virtualScroll .virtualScrollOptions="${{rowHeight: 46,}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column>
                    <div class="md-menu">
                        <md-list class="md-menu__list" .items="${this.items1}" singleSelect activeRow selectOnEnterActiveRow virtualScroll .virtualScrollOptions="${{rowHeight: 46,}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column>
                </md-grid-column>

                <md-grid-column expanded="12">
                    <div class="md-navigation-bar md-navigation-bar--vertical">
                        <md-list class="md-navigation-bar__list" .items="${this.items2}" singleSelect activeRow selectOnEnterActiveRow .rippleOptions="${{container:'.md-list__icon'}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="12">
                    <div class="md-navigation-bar md-navigation-bar--horizontal">
                        <md-list class="md-navigation-bar__list" .items="${this.items3}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                

            </md-grid>
        `
    }
}
customElements.define("demo-list-style", DemoListStyle);
export default document.createElement("demo-list-style");
