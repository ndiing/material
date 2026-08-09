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

        this.items4 = [
            { id: 0, label: "Item 1", selected: true },
            { id: 1, label: "Item 2" },
            { id: 2, label: "Item 3" },
            { id: 3, label: "Item 4" },
        ];
        this.items5 = [
            { id: 0, leading: [{ component: "icon", icon: "image" }], label: "Item 1", selected: true },
            { id: 1, leading: [{ component: "icon", icon: "image" }], label: "Item 2" },
            { id: 2, leading: [{ component: "icon", icon: "image" }], label: "Item 3" },
            { id: 3, leading: [{ component: "icon", icon: "image" }], label: "Item 4" },
        ];

        this.items6 = [
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
        this.items7 = [
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
        this.items8 = [
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
        this.items10 = [
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
        this.items11 = [
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
        this.items12 = [
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
        this.items13 = [
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
                        <md-list class="md-menu__list" .items="${this.items0}" singleSelect activeRow selectOnEnterActiveRow virtualScroll .virtualScrollOptions="${{rowHeight: 48+2}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column>
                    <div class="md-menu">
                        <md-list class="md-menu__list" .items="${this.items1}" singleSelect activeRow selectOnEnterActiveRow virtualScroll .virtualScrollOptions="${{rowHeight: 48+2}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column></md-grid-column>

                <md-grid-column expanded="12">
                    <div class="md-navigation-bar md-navigation-bar--vertical">
                        <md-list class="md-navigation-bar__list" .items="${this.items2}" singleSelect activeRow selectOnEnterActiveRow .rippleOptions="${{container:'.md-list__icon',centered:true}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="12">
                    <div class="md-navigation-bar md-navigation-bar--horizontal">
                        <md-list class="md-navigation-bar__list" .items="${this.items3}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>

                <md-grid-column>
                    <div class="md-navigation-drawer">
                        <md-list class="md-navigation-drawer__list" .items="${this.items4}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column>
                    <div class="md-navigation-drawer">
                        <md-list class="md-navigation-drawer__list" .items="${this.items5}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column></md-grid-column>

                
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--collapsed">
                        <md-list class="md-navigation-rail__list" .items="${this.items6}" singleSelect activeRow selectOnEnterActiveRow .rippleOptions="${{container:'.md-list__icon',centered:true}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--collapsed">
                        <md-icon-button class="md-navigation-rail__icon-button" icon='["menu","menu_open"]' variant="toggle" color="standard"></md-icon-button>
                        <md-list class="md-navigation-rail__list" .items="${this.items7}" singleSelect activeRow selectOnEnterActiveRow .rippleOptions="${{container:'.md-list__icon',centered:true}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--collapsed">
                        <md-fab class="md-navigation-rail__fab" unelevated icon="edit"></md-fab>
                        <md-list class="md-navigation-rail__list" .items="${this.items8}" singleSelect activeRow selectOnEnterActiveRow .rippleOptions="${{container:'.md-list__icon',centered:true}}"></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--collapsed">
                        <md-icon-button class="md-navigation-rail__icon-button" icon='["menu","menu_open"]' variant="toggle" color="standard"></md-icon-button>
                        <md-fab class="md-navigation-rail__fab" unelevated icon="edit"></md-fab>
                        <md-list class="md-navigation-rail__list" .items="${this.items9}" singleSelect activeRow selectOnEnterActiveRow .rippleOptions="${{container:'.md-list__icon',centered:true}}"></md-list>
                    </div>
                </md-grid-column>
                
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--expanded">
                        <md-list class="md-navigation-rail__list" .items="${this.items10}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--expanded">
                        <md-icon-button class="md-navigation-rail__icon-button" icon='["menu","menu_open"]' variant="toggle" color="standard" selected></md-icon-button>
                        <md-list class="md-navigation-rail__list" .items="${this.items11}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--expanded">
                        <md-fab class="md-navigation-rail__fab" unelevated icon="edit" label="Label"></md-fab>
                        <md-list class="md-navigation-rail__list" .items="${this.items12}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                <md-grid-column expanded="3">
                    <div class="md-navigation-rail md-navigation-rail--expanded">
                        <md-icon-button class="md-navigation-rail__icon-button" icon='["menu","menu_open"]' variant="toggle" color="standard" selected></md-icon-button>
                        <md-fab class="md-navigation-rail__fab" unelevated icon="edit" label="Label"></md-fab>
                        <md-list class="md-navigation-rail__list" .items="${this.items13}" singleSelect activeRow selectOnEnterActiveRow></md-list>
                    </div>
                </md-grid-column>
                

            </md-grid>
        `
    }
}
customElements.define("demo-list-style", DemoListStyle);
export default document.createElement("demo-list-style");
